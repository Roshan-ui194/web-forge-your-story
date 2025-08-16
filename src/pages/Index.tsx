import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FileUpload } from "@/components/FileUpload";
import { ChartArea } from "@/components/ChartArea";
import { AISummary } from "@/components/AISummary";
import { Dashboard } from "@/components/Dashboard";
import { UploadHistory } from "@/components/UploadHistory";


const Index = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [excelData, setExcelData] = useState<any[] | null>(null);
  const [showAISummary, setShowAISummary] = useState(false);
  const [activeTab, setActiveTab] = useState("upload");
  const [filesAnalyzed, setFilesAnalyzed] = useState(0);
  const [chartsCreated, setChartsCreated] = useState(0);
  const [insightsGenerated, setInsightsGenerated] = useState(0);

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash && ["upload", "charts", "ai-summary", "history", "dashboard"].includes(hash)) {
      setActiveTab(hash);
    }
  }, []);

  const handleFileUpload = (file: File, data: any[]) => {
    setUploadedFile(file);
    setExcelData(data);
    setFilesAnalyzed(prev => prev + 1);
  };

  const handleChartCreated = () => {
    setChartsCreated(prev => prev + 1);
  };

  const handleGenerateAISummary = () => {
    setShowAISummary(true);
    setInsightsGenerated(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <div className="container mx-auto px-4 py-12">

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
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
            <ChartArea data={excelData} onChartCreated={handleChartCreated} />
          </TabsContent>
          
          <TabsContent value="ai-summary" className="mt-6">
            <AISummary data={excelData} isVisible={true} />
          </TabsContent>
          
          <TabsContent value="history" className="mt-6">
            <UploadHistory />
          </TabsContent>
          
          <TabsContent value="dashboard" className="mt-6">
            <Dashboard 
              filesAnalyzed={filesAnalyzed}
              chartsCreated={chartsCreated}
              insightsGenerated={insightsGenerated}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
