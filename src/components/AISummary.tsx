import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Brain, TrendingUp, TrendingDown, AlertCircle, Copy } from "lucide-react";
import { toast } from "sonner";

interface AISummaryProps {
  data?: any[];
  isVisible?: boolean;
}

export const AISummary = ({ data, isVisible }: AISummaryProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);

  const generateSummary = async () => {
    if (!data || data.length === 0) return;
    
    setIsGenerating(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const numericColumns = Object.keys(data[0]).filter(key => 
        data.some(item => typeof item[key] === 'number')
      );
      
      const insights = [
        "📊 Dataset contains " + data.length + " records across " + Object.keys(data[0]).length + " fields",
        "📈 Identified " + numericColumns.length + " numeric metrics for analysis",
        "🔍 Key patterns detected in the data distribution",
        "⚡ Performance trends show significant variations across periods",
        "💡 Recommendations: Focus on optimizing top-performing segments"
      ];
      
      setSummary(insights.join('\n\n'));
      setIsGenerating(false);
      toast.success("AI summary generated successfully!");
    }, 2000);
  };

  const copyToClipboard = () => {
    if (summary) {
      navigator.clipboard.writeText(summary);
      toast.success("Summary copied to clipboard!");
    }
  };

  if (!isVisible) return null;

  return (
    <Card className="p-6 bg-gradient-card border-border/50">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-analytics-primary/20 rounded-full flex items-center justify-center">
          <Brain className="w-5 h-5 text-analytics-primary" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">AI Data Analysis</h3>
          <p className="text-sm text-muted-foreground">
            Intelligent insights from your Excel data
          </p>
        </div>
      </div>

      {!summary ? (
        <div className="text-center py-8">
          <Button 
            onClick={generateSummary}
            disabled={isGenerating || !data || data.length === 0}
            className="min-w-[200px]"
          >
            {isGenerating ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                Analyzing Data...
              </>
            ) : (
              <>
                <Brain className="w-4 h-4 mr-2" />
                Generate AI Summary
              </>
            )}
          </Button>
          {(!data || data.length === 0) && (
            <p className="text-sm text-muted-foreground mt-2">
              Upload an Excel file to enable AI analysis
            </p>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-analytics-success/20 text-analytics-success">
                Analysis Complete
              </Badge>
              <Badge variant="outline">
                {data?.length || 0} Records
              </Badge>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={copyToClipboard}
              className="text-muted-foreground hover:text-foreground"
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>

          <Separator />

          <div className="bg-card/30 rounded-lg p-4">
            <div className="space-y-3 text-sm leading-relaxed">
              {summary.split('\n\n').map((insight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-analytics-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-analytics-primary rounded-full" />
                  </div>
                  <p className="text-foreground">{insight}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <AlertCircle className="w-3 h-3" />
            <span>AI-generated insights based on data patterns and trends</span>
          </div>
        </div>
      )}
    </Card>
  );
};