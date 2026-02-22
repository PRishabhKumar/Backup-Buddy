"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

export interface Drive {
  device: string;
  mountpoint: string;
  total: number;
  used: number;
  free: number;
  percentage: number;
}

interface DriveContextType {
  drives: Drive[];
  selectedDrive: Drive | null;
  loading: boolean;
  error: string | null;
  scanDrives: () => Promise<void>;
  setSelectedDrive: (drive: Drive | null) => void;
}

const DriveContext = createContext<DriveContextType | undefined>(undefined);

export function DriveProvider({ children }: { children: React.ReactNode }) {
  const [drives, setDrives] = useState<Drive[]>([]);
  const [selectedDrive, setSelectedDrive] = useState<Drive | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const scanDrives = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/system/detect_drives",
        { cache: 'no-store' }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch drives");
      }
      const data = await response.json();
      
      const newDrives = data.drives;
      setDrives(newDrives);
      
      // Atomic update for initial selection
      if (newDrives.length > 0) {
        setSelectedDrive(prev => {
          const stillExists = newDrives.find((d: Drive) => d.device === prev?.device);
          return stillExists || newDrives[0];
        });
      } else {
        setSelectedDrive(null);
      }
    } catch (err) {
      setError(
        "Unable to connect to the backend. Please ensure the server is running.",
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Auto-scan drives on initial mount
  React.useEffect(() => {
    scanDrives();
  }, [scanDrives]);

  const value = React.useMemo(() => ({
    drives,
    selectedDrive,
    loading,
    error,
    scanDrives,
    setSelectedDrive,
  }), [drives, selectedDrive, loading, error, scanDrives]);

  return (
    <DriveContext.Provider value={value}>
      {children}
    </DriveContext.Provider>
  );
}

export function useDrive() {
  const context = useContext(DriveContext);
  if (context === undefined) {
    throw new Error("useDrive must be used within a DriveProvider");
  }
  return context;
}
