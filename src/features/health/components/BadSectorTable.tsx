import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; // Importing from UI since simple table

export function BadSectorTable() {
  const logs = [
    { id: 1, sector: "0x00A4F2", status: "Recovered", file: "DSC04921.ARW", date: "2024-05-10" },
    { id: 2, sector: "0x00B1C3", status: "Corrupted", file: "DSC04922.ARW", date: "2024-05-11" },
    { id: 3, sector: "0x00D9E1", status: "Warning", file: "N/A", date: "2024-05-12" },
  ];

  return (
    <div className="rounded-md border border-border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Sector ID</TableHead>
            <TableHead>File Affected</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Date Detected</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {logs.map((log) => (
            <TableRow key={log.id}>
              <TableCell className="font-mono text-xs text-muted-foreground">{log.sector}</TableCell>
              <TableCell>{log.file}</TableCell>
              <TableCell>
                <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                    log.status === "Recovered" ? "bg-emerald-500/10 text-emerald-500" :
                    log.status === "Corrupted" ? "bg-red-500/10 text-red-500" :
                    "bg-amber-500/10 text-amber-500"
                }`}>
                    {log.status}
                </span>
              </TableCell>
              <TableCell className="text-right">{log.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
