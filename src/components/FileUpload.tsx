import { useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileSpreadsheet, X } from "lucide-react";
import { toast } from "sonner";

interface FileUploadProps {
  onFileUpload?: (file: File, data: any[]) => void;
}

export const FileUpload = ({ onFileUpload }: FileUploadProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    console.log("Drop event triggered");

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      console.log("File dropped:", file.name, file.type);
      if (file.name.endsWith('.xlsx') || file.name.endsWith('.xls') || file.type.includes('spreadsheet')) {
        setUploadedFile(file);
        processExcelFile(file);
        toast.success("File uploaded successfully!");
      } else {
        toast.error("Please upload an Excel file (.xlsx or .xls)");
      }
    }
  }, [onFileUpload]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("File input triggered");
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      console.log("File selected:", file.name, file.type);
      if (file.name.endsWith('.xlsx') || file.name.endsWith('.xls') || file.type.includes('spreadsheet')) {
        setUploadedFile(file);
        processExcelFile(file);
        toast.success("File uploaded successfully!");
      } else {
        toast.error("Please upload an Excel file (.xlsx or .xls)");
      }
    }
  }, []);

  const processExcelFile = async (file: File) => {
    try {
      const XLSX = await import('xlsx');
      const arrayBuffer = await file.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      
      console.log("Excel data processed:", data);
      onFileUpload?.(file, data);
    } catch (error) {
      console.error("Error processing Excel file:", error);
      toast.error("Error processing Excel file");
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
  };

  return (
    <Card className="p-8 bg-gradient-card border-border/50">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Upload Your Excel File</h2>
        <p className="text-muted-foreground mb-6">
          Drag and drop your .xlsx or .xls file here, or click to browse
        </p>

        {!uploadedFile ? (
          <div
            className={`relative border-2 border-dashed rounded-lg p-12 transition-colors ${
              dragActive 
                ? "border-analytics-primary bg-analytics-primary/10" 
                : "border-border hover:border-analytics-primary/50"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-analytics-primary/20 rounded-full flex items-center justify-center">
                <Upload className="w-8 h-8 text-analytics-primary" />
              </div>
              <div>
                <p className="text-lg font-medium mb-2">
                  Drop your Excel file here
                </p>
                <p className="text-sm text-muted-foreground">
                  Supports .xlsx and .xls formats
                </p>
              </div>
              <input
                type="file"
                accept=".xlsx,.xls"
                onChange={handleFileInput}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <Button variant="outline">
                Browse Files
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-4 p-4 bg-analytics-success/10 border border-analytics-success/20 rounded-lg">
            <FileSpreadsheet className="w-8 h-8 text-analytics-success" />
            <div className="flex-1 text-left">
              <p className="font-medium">{uploadedFile.name}</p>
              <p className="text-sm text-muted-foreground">
                {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={removeFile}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};