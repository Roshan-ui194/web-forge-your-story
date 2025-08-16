import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileSpreadsheet, BarChart3, Download, Calendar, TrendingUp } from "lucide-react";


interface DashboardProps {
  filesAnalyzed: number;
  chartsCreated: number;
  insightsGenerated: number;
}

export const Dashboard = ({ filesAnalyzed, chartsCreated, insightsGenerated }: DashboardProps) => {
  const stats = [
    {
      title: "Files Analyzed",
      value: filesAnalyzed.toString(),
      change: "+0%",
      icon: FileSpreadsheet,
      color: "analytics-primary"
    },
    {
      title: "Charts Created",
      value: chartsCreated.toString(),
      change: "+0%", 
      icon: BarChart3,
      color: "analytics-secondary"
    },
    {
      title: "Insights Generated",
      value: insightsGenerated.toString(),
      change: "+0%",
      icon: Download,
      color: "analytics-accent"
    },
    {
      title: "Processing Speed",
      value: "98.5%",
      change: "+4.2%",
      icon: TrendingUp,
      color: "analytics-success"
    }
  ];
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Analytics Dashboard</h2>
        <p className="text-muted-foreground">
          Overview of your Excel data analysis and chart generation activity
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6 bg-gradient-card border-border/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <p className="text-3xl font-bold mt-1">{stat.value}</p>
                <p className="text-sm text-analytics-success mt-1">{stat.change}</p>
              </div>
              <div className={`w-12 h-12 bg-${stat.color}/20 rounded-lg flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}`} />
              </div>
            </div>
          </Card>
        ))}
      </div>

    </div>
  );
};