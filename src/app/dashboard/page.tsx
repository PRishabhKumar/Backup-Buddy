import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, AlertTriangle, CheckCircle2, Copy, HardDrive } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Overview</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-card/50 backdrop-blur-sm transition-all hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Please Backup</CardTitle>
            <AlertTriangle className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">128 Files</div>
            <p className="text-xs text-muted-foreground">Pending from SD Card</p>
          </CardContent>
        </Card>
        
        <Card className="bg-card/50 backdrop-blur-sm transition-all hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Storage Health</CardTitle>
            <Activity className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98%</div>
            <p className="text-xs text-muted-foreground">Excellent Condition</p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm transition-all hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Duplicates Found</CardTitle>
            <Copy className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2 GB</div>
            <p className="text-xs text-muted-foreground">Potentially recoverable</p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm transition-all hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Last Backup</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2h ago</div>
            <p className="text-xs text-muted-foreground">To Ext. SSD 1</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
                <div className="flex items-center gap-4 rounded-md border border-border p-3">
                    <div className="h-8 w-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                        <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                        <p className="font-medium text-foreground">Backup Completed</p>
                        <p className="text-xs text-muted-foreground">Moved 450 RAW files to External SSD</p>
                    </div>
                    <div className="text-xs text-muted-foreground">2h ago</div>
                </div>
                <div className="flex items-center gap-4 rounded-md border border-border p-3">
                    <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                        <Copy className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                        <p className="font-medium text-foreground">Duplicates Cleanup</p>
                        <p className="text-xs text-muted-foreground">Removed 12 similar shots (240 MB saved)</p>
                    </div>
                    <div className="text-xs text-muted-foreground">5h ago</div>
                </div>
                <div className="flex items-center gap-4 rounded-md border border-border p-3">
                     <div className="h-8 w-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500">
                        <HardDrive className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                        <p className="font-medium text-foreground">SD Card Connected</p>
                        <p className="text-xs text-muted-foreground">Sony Tough G 128GB detected</p>
                    </div>
                    <div className="text-xs text-muted-foreground">1d ago</div>
                </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-3 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
             <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-border bg-background/50 p-4 text-center hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer">
                    <HardDrive className="h-6 w-6 text-primary" />
                    <span className="text-sm font-medium">Eject Card</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-border bg-background/50 p-4 text-center hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer">
                    <Copy className="h-6 w-6 text-primary" />
                    <span className="text-sm font-medium">Scan Duplicates</span>
                </div>
                 <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-border bg-background/50 p-4 text-center hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer">
                    <Activity className="h-6 w-6 text-primary" />
                    <span className="text-sm font-medium">Check Health</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-border bg-background/50 p-4 text-center hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <span className="text-sm font-medium">Verify Backup</span>
                </div>
             </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
