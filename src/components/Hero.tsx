import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, BarChart3, Download, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Transform Your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Excel Data
            </span>{" "}
            Into Insights
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Upload any Excel file, analyze your data with powerful visualizations, 
            and generate interactive 2D and 3D charts. Save your analysis history 
            and download professional reports.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="text-lg px-8 py-6 shadow-analytics">
              <Upload className="w-5 h-5 mr-2" />
              Upload Excel File
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <BarChart3 className="w-5 h-5 mr-2" />
              View Demo
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 bg-gradient-card border-border/50 backdrop-blur-sm">
              <div className="w-12 h-12 bg-analytics-primary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Upload className="w-6 h-6 text-analytics-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Easy Upload</h3>
              <p className="text-muted-foreground text-sm">
                Drag and drop or select your .xlsx/.xls files. 
                Automatic parsing and data detection.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card border-border/50 backdrop-blur-sm">
              <div className="w-12 h-12 bg-analytics-secondary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <BarChart3 className="w-6 h-6 text-analytics-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Smart Visualization</h3>
              <p className="text-muted-foreground text-sm">
                Choose X and Y axes dynamically. Generate bar, line, pie, 
                scatter, and 3D charts instantly.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card border-border/50 backdrop-blur-sm">
              <div className="w-12 h-12 bg-analytics-accent/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Download className="w-6 h-6 text-analytics-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Export & Share</h3>
              <p className="text-muted-foreground text-sm">
                Download charts as PNG/PDF. Save analysis history 
                and share insights with your team.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};