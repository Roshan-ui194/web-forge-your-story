import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FileUpload } from "@/components/FileUpload";
import { ChartArea } from "@/components/ChartArea";
import { AISummary } from "@/components/AISummary";
import { Dashboard } from "@/components/Dashboard";
import { UploadHistory } from "@/components/UploadHistory";
import AdminDashboard from "./admin/AdminDashboard";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [excelData, setExcelData] = useState<any[] | null>(null);
  const [showAISummary, setShowAISummary] = useState(false);
  const [currentView, setCurrentView] = useState("user");

  const handleFileUpload = (file: File, data: any[]) => {
    setUploadedFile(file);
    setExcelData(data);
  };

  const handleGenerateAISummary = () => {
    setShowAISummary(true);
  };

  // Admin view
  if (currentView === "admin") {
    return <AdminDashboard />;
  }

  // User view
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <div className="container mx-auto px-4 py-12">
        {/* View Toggle */}
        <Card className="p-4 mb-8 bg-gradient-card border-border/50">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-foreground">Demo Mode</h3>
              <p className="text-sm text-muted-foreground">Switch between user and admin views</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentView("user")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentView === "user"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                User View
              </button>
              <button
                onClick={() => setCurrentView("admin")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentView === "admin"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Admin View
              </button>
            </div>
          </div>
        </Card>

        <Tabs defaultValue="upload" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="upload">Upload</TabsTrigger>
            <TabsTrigger value="charts">Charts</TabsTrigger>
            <TabsTrigger value="ai-summary">AI Analysis</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upload" className="mt-6">
            <FileUpload onFileUpload={handleFileUpload} />
          </TabsContent>
          
          <TabsContent value="charts" className="mt-6">
            <ChartArea data={excelData} />
          </TabsContent>
          
          <TabsContent value="ai-summary" className="mt-6">
            <AISummary data={excelData} isVisible={true} />
          </TabsContent>
          
          <TabsContent value="history" className="mt-6">
            <UploadHistory />
          </TabsContent>
          
          <TabsContent value="dashboard" className="mt-6">
            <Dashboard />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
