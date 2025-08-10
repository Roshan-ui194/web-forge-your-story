import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileSpreadsheet, Search, Download, Calendar, BarChart3, User, Trash2 } from "lucide-react";

const uploads = [
  {
    id: 1,
    fileName: "Q3_Financial_Analysis.xlsx",
    user: "Sarah Johnson",
    uploadDate: "2024-08-09",
    fileSize: "3.2MB",
    chartsGenerated: 4,
    downloadCount: 12,
    status: "Active"
  },
  {
    id: 2,
    fileName: "Marketing_Performance_2024.xlsx", 
    user: "Michael Chen",
    uploadDate: "2024-08-08",
    fileSize: "2.1MB",
    chartsGenerated: 2,
    downloadCount: 8,
    status: "Active"
  },
  {
    id: 3,
    fileName: "Sales_Data_Regional.xlsx",
    user: "Emily Rodriguez",
    uploadDate: "2024-08-07",
    fileSize: "4.5MB", 
    chartsGenerated: 6,
    downloadCount: 15,
    status: "Archived"
  },
  {
    id: 4,
    fileName: "HR_Analytics_Dashboard.xlsx",
    user: "David Kim",
    uploadDate: "2024-08-06",
    fileSize: "1.8MB",
    chartsGenerated: 3,
    downloadCount: 5,
    status: "Active"
  },
  {
    id: 5,
    fileName: "Inventory_Management.xlsx",
    user: "Sarah Johnson", 
    uploadDate: "2024-08-05",
    fileSize: "2.7MB",
    chartsGenerated: 2,
    downloadCount: 7,
    status: "Processing"
  }
];

export const FileManagement = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">File Uploads & Usage</h2>
          <p className="text-muted-foreground">Monitor all file uploads and usage analytics</p>
        </div>
        <Button variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Export Report
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="p-4 bg-gradient-card border-border/50">
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input 
              placeholder="Search files by name or user..." 
              className="pl-10"
            />
          </div>
          <Button variant="outline">Filter by Status</Button>
          <Button variant="outline">Filter by Date</Button>
        </div>
      </Card>

      {/* Files Table */}
      <Card className="bg-gradient-card border-border/50">
        <div className="p-6">
          <div className="space-y-4">
            {uploads.map((upload) => (
              <div 
                key={upload.id}
                className="flex items-center justify-between p-4 bg-card/30 rounded-lg border border-border/50"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-analytics-accent/20 rounded-lg flex items-center justify-center">
                    <FileSpreadsheet className="w-6 h-6 text-analytics-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{upload.fileName}</h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {upload.user}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {upload.uploadDate}
                      </span>
                      <span>{upload.fileSize}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-sm font-medium text-foreground">{upload.chartsGenerated}</p>
                    <p className="text-xs text-muted-foreground">Charts</p>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm font-medium text-foreground">{upload.downloadCount}</p>
                    <p className="text-xs text-muted-foreground">Downloads</p>
                  </div>

                  <Badge 
                    variant={upload.status === "Active" ? "default" : "secondary"}
                    className={
                      upload.status === "Active" 
                        ? "bg-analytics-success/20 text-analytics-success" 
                        : upload.status === "Processing"
                        ? "bg-analytics-warning/20 text-analytics-warning"
                        : "bg-analytics-secondary/20 text-analytics-secondary"
                    }
                  >
                    {upload.status}
                  </Badge>

                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <BarChart3 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};