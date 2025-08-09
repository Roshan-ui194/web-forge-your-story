import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, FolderOpen, FileText, Activity, Settings, TrendingUp } from "lucide-react";
import { AdminLayout } from "./AdminLayout";

const stats = [
  {
    title: "Total Users",
    value: "3",
    icon: Users,
    color: "text-analytics-primary",
    bgColor: "bg-analytics-primary/20"
  },
  {
    title: "Total Excel Files Processed", 
    value: "14",
    icon: FolderOpen,
    color: "text-analytics-secondary",
    bgColor: "bg-analytics-secondary/20"
  },
  {
    title: "Most Uploaded File Type",
    value: "xlsx",
    icon: FileText,
    color: "text-analytics-accent",
    bgColor: "bg-analytics-accent/20"
  },
  {
    title: "Active Users (24h)",
    value: "2",
    icon: Activity,
    color: "text-analytics-success",
    bgColor: "bg-analytics-success/20"
  }
];

const systemSettings = [
  {
    title: "Maintenance Mode",
    status: "OFF",
    type: "toggle"
  },
  {
    title: "Global Alert/Notice", 
    status: "e.g. Server down for upgrade",
    type: "text"
  },
  {
    title: "Upload Limit (MB)",
    status: "5",
    type: "number"
  },
  {
    title: "Version Control & Changelog",
    status: "v1.2.0 (2024-08-01): Added chart analytics, Improved dashboard.\nv1.1.0 (2024-08-01): User management and file tracking.",
    type: "version"
  }
];

export const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-border/50">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.title}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* API Usage Card */}
        <Card className="p-6 bg-gradient-card border-border/50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-analytics-warning/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-analytics-warning" />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">API Usage: 120 calls</div>
              <div className="text-sm text-muted-foreground">API Usage Summary</div>
            </div>
          </div>
        </Card>

        {/* System Settings */}
        <Card className="p-6 bg-gradient-card border-border/50">
          <h3 className="text-xl font-semibold text-foreground mb-6">System Settings</h3>
          <div className="space-y-4">
            {systemSettings.map((setting, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-card/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <Settings className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium text-foreground">{setting.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  {setting.type === "toggle" && (
                    <Badge variant={setting.status === "OFF" ? "secondary" : "default"}>
                      {setting.status}
                    </Badge>
                  )}
                  {setting.type === "text" && (
                    <span className="text-sm text-muted-foreground">{setting.status}</span>
                  )}
                  {setting.type === "number" && (
                    <span className="text-sm font-medium text-foreground">{setting.status}</span>
                  )}
                  {setting.type === "version" && (
                    <div className="text-sm text-muted-foreground max-w-md">
                      {setting.status.split('\n').map((line, i) => (
                        <div key={i} className="mb-1">• {line}</div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AdminLayout>
  );
};