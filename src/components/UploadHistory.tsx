import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileIcon, Download, Calendar, BarChart3 } from "lucide-react";
import { format } from "date-fns";

interface UploadHistoryProps {
  uploads?: any[];
}

const mockUploads = [
  {
    id: 1,
    fileName: "Revenue_Analysis_Q3_2024.xlsx",
    fileSize: "5.3MB",
    uploadDate: new Date(2024, 7, 9),
    chartsCreated: 6,
    status: "completed"
  },
  {
    id: 2,
    fileName: "Marketing_Campaign_Performance.xlsx",
    fileSize: "3.7MB", 
    uploadDate: new Date(2024, 7, 8),
    chartsCreated: 4,
    status: "completed"
  },
  {
    id: 3,
    fileName: "Customer_Segmentation_Data.xlsx",
    fileSize: "7.1MB",
    uploadDate: new Date(2024, 7, 7),
    chartsCreated: 8,
    status: "completed"
  },
  {
    id: 4,
    fileName: "Inventory_Optimization_Report.xlsx",
    fileSize: "4.2MB",
    uploadDate: new Date(2024, 7, 6),
    chartsCreated: 3,
    status: "processing"
  }
];

export const UploadHistory = ({ uploads = mockUploads }: UploadHistoryProps) => {
  if (!uploads || uploads.length === 0) {
    return (
      <Card className="p-8 text-center bg-gradient-card border-border/50">
        <FileIcon className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-foreground mb-2">No files uploaded yet</h3>
        <p className="text-muted-foreground">
          Upload your first Excel file to see it here
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-6 bg-gradient-card border-border/50">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-analytics-secondary/20 rounded-full flex items-center justify-center">
          <FileIcon className="w-5 h-5 text-analytics-secondary" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground">Upload History</h3>
          <p className="text-sm text-muted-foreground">
            Track your uploaded files and generated charts
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {uploads.map((upload) => (
          <div
            key={upload.id}
            className="flex items-center justify-between p-4 bg-card/30 rounded-lg border border-border/50"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <FileIcon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">{upload.fileName}</h4>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {format(upload.uploadDate, "MMM dd, yyyy")}
                  </span>
                  <span>{upload.fileSize}</span>
                  <span className="flex items-center gap-1">
                    <BarChart3 className="w-3 h-3" />
                    {upload.chartsCreated} charts
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Badge 
                variant={upload.status === "completed" ? "secondary" : "default"}
                className={
                  upload.status === "completed" 
                    ? "bg-analytics-success/20 text-analytics-success" 
                    : "bg-analytics-warning/20 text-analytics-warning"
                }
              >
                {upload.status === "completed" ? "Completed" : "Processing"}
              </Badge>
              {upload.status === "completed" && (
                <Button variant="ghost" size="sm">
                  <Download className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};