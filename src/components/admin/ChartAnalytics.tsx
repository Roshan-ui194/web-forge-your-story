import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3, PieChart, LineChart, Activity, TrendingUp, Users, FileSpreadsheet } from "lucide-react";

const chartStats = [
  {
    title: "Total Charts Created",
    value: "142",
    change: "+18%",
    icon: BarChart3,
    color: "analytics-primary"
  },
  {
    title: "Most Popular Type",
    value: "Bar Charts",
    change: "45% of total",
    icon: BarChart3,
    color: "analytics-secondary"
  },
  {
    title: "Average Charts per User",
    value: "8.3",
    change: "+12%",
    icon: Users,
    color: "analytics-accent"
  },
  {
    title: "Chart Success Rate",
    value: "94.2%",
    change: "+3%",
    icon: TrendingUp,
    color: "analytics-success"
  }
];

const chartTypes = [
  {
    type: "Bar Chart",
    count: 64,
    percentage: 45,
    icon: BarChart3,
    color: "analytics-primary"
  },
  {
    type: "Line Chart", 
    count: 38,
    percentage: 27,
    icon: LineChart,
    color: "analytics-secondary"
  },
  {
    type: "Pie Chart",
    count: 25,
    percentage: 18,
    icon: PieChart,
    color: "analytics-accent"
  },
  {
    type: "Area Chart",
    count: 15,
    percentage: 10,
    icon: Activity,
    color: "analytics-warning"
  }
];

const recentCharts = [
  {
    id: 1,
    title: "Q3 Revenue Analysis",
    type: "Bar Chart",
    creator: "Sarah Johnson",
    createdAt: "2024-08-09",
    views: 23,
    downloads: 8
  },
  {
    id: 2,
    title: "Marketing Funnel Performance",
    type: "Line Chart", 
    creator: "Michael Chen",
    createdAt: "2024-08-08",
    views: 15,
    downloads: 5
  },
  {
    id: 3,
    title: "Department Budget Distribution",
    type: "Pie Chart",
    creator: "Emily Rodriguez", 
    createdAt: "2024-08-07",
    views: 31,
    downloads: 12
  },
  {
    id: 4,
    title: "Sales Trend Analysis",
    type: "Area Chart",
    creator: "David Kim",
    createdAt: "2024-08-06", 
    views: 19,
    downloads: 6
  }
];

export const ChartAnalytics = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Chart Analytics</h2>
        <p className="text-muted-foreground">Detailed insights into chart creation and usage patterns</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {chartStats.map((stat, index) => (
          <Card key={index} className="p-6 bg-gradient-card border-border/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <p className="text-2xl font-bold mt-1 text-foreground">{stat.value}</p>
                <p className="text-sm text-analytics-success mt-1">{stat.change}</p>
              </div>
              <div className={`w-12 h-12 bg-${stat.color}/20 rounded-lg flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}`} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart Type Distribution */}
        <Card className="p-6 bg-gradient-card border-border/50">
          <h3 className="text-xl font-semibold text-foreground mb-6">Chart Type Distribution</h3>
          <div className="space-y-4">
            {chartTypes.map((chart, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-${chart.color}/20 rounded-lg flex items-center justify-center`}>
                    <chart.icon className={`w-5 h-5 text-${chart.color}`} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{chart.type}</p>
                    <p className="text-sm text-muted-foreground">{chart.count} charts</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-foreground">{chart.percentage}%</p>
                  <div className="w-16 h-2 bg-muted rounded-full mt-1">
                    <div 
                      className={`h-full bg-${chart.color} rounded-full`}
                      style={{ width: `${chart.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Charts */}
        <Card className="p-6 bg-gradient-card border-border/50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-foreground">Recent Charts</h3>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          
          <div className="space-y-4">
            {recentCharts.map((chart) => (
              <div 
                key={chart.id}
                className="flex items-center justify-between p-3 bg-card/30 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-analytics-primary/20 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-analytics-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{chart.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {chart.type} • {chart.creator}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{chart.views} views</span>
                  <span>{chart.downloads} downloads</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};