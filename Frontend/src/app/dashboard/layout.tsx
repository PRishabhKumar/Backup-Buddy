import { DashboardShell } from "@/components/layout/dashboard-shell";
import { DriveProvider } from "@/context/drive-context";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DriveProvider>
      <DashboardShell>{children}</DashboardShell>
    </DriveProvider>
  );
}
