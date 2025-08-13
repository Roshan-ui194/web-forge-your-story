import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileSpreadsheet, Download, Calendar, Trash2 } from "lucide-react";

export const UploadHistory = () => {
  // No sample data - empty state
  const uploadHistory: any[] = [];

  if (uploadHistory.length === 0) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Upload History</h2>
          <p className="text-muted-foreground">Track your file uploads and analysis history</p>
        </div>

        <Card className="p-12 text-center bg-gradient-card border-border/50">
          <FileSpreadsheet className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
          <h3 className="text-lg font-semibold mb-2">No uploads yet</h3>
          <p className="text-muted-foreground mb-4">
            Your upload history will appear here once you start uploading files
          </p>
          <Button variant="outline">
            Upload Your First File
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">Upload History</h2>
          <p className="text-muted-foreground">Track your file uploads and analysis history</p>
        </div>
        <Button variant="outline">
          Clear History
        </Button>
      </div>

      <div className="space-y-4">
        {uploadHistory.map((upload) => (
          <Card key={upload.id} className="p-6 bg-gradient-card border-border/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-analytics-primary/20 rounded-lg flex items-center justify-center">
                  <FileSpreadsheet className="w-6 h-6 text-analytics-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{upload.fileName}</h3>
                  <p className="text-sm text-muted-foreground">
                    {upload.chartType} • {upload.size}
                  </p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <Calendar className="w-3 h-3" />
                    {upload.createdAt}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Badge 
                  variant={upload.status === 'completed' ? 'default' : 'secondary'}
                  className={upload.status === 'completed' ? 'bg-analytics-success/20 text-analytics-success' : ''}
                >
                  {upload.status}
                </Badge>
                <Button variant="ghost" size="sm">
                  <Download className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};