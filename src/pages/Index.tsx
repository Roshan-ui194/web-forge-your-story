import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FileUpload } from "@/components/FileUpload";
import { ChartArea } from "@/components/ChartArea";
import { Dashboard } from "@/components/Dashboard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <Hero />
      
      <main className="container mx-auto px-4 py-12">
        <Tabs defaultValue="upload" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="upload">Upload & Analyze</TabsTrigger>
            <TabsTrigger value="charts">Chart Generation</TabsTrigger>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upload" className="space-y-8">
            <FileUpload onFileUpload={setUploadedFile} />
            {uploadedFile && (
              <div className="text-center">
                <p className="text-muted-foreground mb-4">
                  File uploaded successfully! Switch to the Chart Generation tab to create visualizations.
                </p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="charts" className="space-y-8">
            <ChartArea />
          </TabsContent>
          
          <TabsContent value="dashboard" className="space-y-8">
            <Dashboard />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
