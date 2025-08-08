import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileSpreadsheet, BarChart3, Download, Calendar, TrendingUp } from "lucide-react";

const recentAnalyses = [
  {
    id: 1,
    fileName: "Q4_Sales_Report.xlsx",
    chartType: "Bar Chart",
    createdAt: "2024-01-15",
    size: "2.3 MB",
    status: "completed"
  },
  {
    id: 2,
    fileName: "Marketing_Data.xlsx", 
    chartType: "Line Chart",
    createdAt: "2024-01-14",
    size: "1.8 MB",
    status: "completed"
  },
  {
    id: 3,
    fileName: "Financial_Overview.xlsx",
    chartType: "Pie Chart", 
    createdAt: "2024-01-13",
    size: "3.1 MB",
    status: "processing"
  }
];

const stats = [
  {
    title: "Total Uploads",
    value: "24",
    change: "+12%",
    icon: FileSpreadsheet,
    color: "analytics-primary"
  },
  {
    title: "Charts Generated",
    value: "18",
    change: "+8%", 
    icon: BarChart3,
    color: "analytics-secondary"
  },
  {
    title: "Downloads",
    value: "31",
    change: "+23%",
    icon: Download,
    color: "analytics-accent"
  },
  {
    title: "Success Rate",
    value: "96%",
    change: "+2%",
    icon: TrendingUp,
    color: "analytics-success"
  }
];

export const Dashboard = () => {
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

      {/* Recent Analysis */}
      <Card className="p-6 bg-gradient-card border-border/50">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">Recent Analysis</h3>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>

        <div className="space-y-4">
          {recentAnalyses.map((analysis) => (
            <div 
              key={analysis.id}
              className="flex items-center justify-between p-4 bg-card/30 rounded-lg border border-border/30"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-analytics-primary/20 rounded-lg flex items-center justify-center">
                  <FileSpreadsheet className="w-5 h-5 text-analytics-primary" />
                </div>
                <div>
                  <p className="font-medium">{analysis.fileName}</p>
                  <p className="text-sm text-muted-foreground">
                    {analysis.chartType} • {analysis.size}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    {analysis.createdAt}
                  </p>
                </div>
                <Badge 
                  variant={analysis.status === 'completed' ? 'default' : 'secondary'}
                  className={analysis.status === 'completed' ? 'bg-analytics-success/20 text-analytics-success' : ''}
                >
                  {analysis.status}
                </Badge>
                <Button variant="ghost" size="sm">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};