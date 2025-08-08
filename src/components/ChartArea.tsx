
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart3, LineChart, PieChart, Download } from "lucide-react";
import { 
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  Line,
  LineChart as RechartsLineChart,
  Pie,
  PieChart as RechartsPieChart,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

interface ChartAreaProps {
  data?: any[];
  onGenerateAISummary?: () => void;
}

const sampleData = [
  { quarter: "Q1", revenue: 65000, expenses: 45000, profit: 20000 },
  { quarter: "Q2", revenue: 85000, expenses: 55000, profit: 30000 },
  { quarter: "Q3", revenue: 75000, expenses: 50000, profit: 25000 },
  { quarter: "Q4", revenue: 95000, expenses: 60000, profit: 35000 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-1))",
  },
  expenses: {
    label: "Expenses",
    color: "hsl(var(--chart-2))",
  },
  profit: {
    label: "Profit",
    color: "hsl(var(--chart-3))",
  },
};

const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))"];

export const ChartArea = ({ data, onGenerateAISummary }: ChartAreaProps) => {
  const [chartType, setChartType] = useState<'bar' | 'line' | 'pie'>('bar');
  const [xAxis, setXAxis] = useState('quarter');
  const [yAxis, setYAxis] = useState('revenue');
  
  const chartData = data && data.length > 0 ? data : sampleData;
  const availableKeys = chartData.length > 0 ? Object.keys(chartData[0]) : ['quarter', 'revenue', 'expenses'];
  const numericKeys = availableKeys.filter(key => 
    chartData.some(item => typeof item[key] === 'number')
  );
  const textKeys = availableKeys.filter(key => 
    chartData.some(item => typeof item[key] === 'string')
  );

  const renderBarChart = () => (
    <ChartContainer config={chartConfig} className="min-h-[400px] w-full">
      <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xAxis} />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey={yAxis} fill="hsl(var(--chart-1))" />
      </BarChart>
    </ChartContainer>
  );

  const renderLineChart = () => (
    <ChartContainer config={chartConfig} className="min-h-[400px] w-full">
      <RechartsLineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xAxis} />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Line type="monotone" dataKey={yAxis} stroke="hsl(var(--chart-1))" strokeWidth={2} />
      </RechartsLineChart>
    </ChartContainer>
  );

  const pieData = chartData.map((item, index) => ({
    name: item[xAxis] || `Item ${index + 1}`,
    value: item[yAxis] as number,
  }));

  const renderPieChart = () => (
    <ChartContainer config={chartConfig} className="min-h-[400px] w-full">
      <RechartsPieChart margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <Pie
          data={pieData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <ChartTooltip content={<ChartTooltipContent />} />
      </RechartsPieChart>
    </ChartContainer>
  );

  const renderChart = () => {
    console.log("Rendering chart type:", chartType);
    
    switch (chartType) {
      case 'line':
        return renderLineChart();
      case 'pie':
        return renderPieChart();
      default:
        return renderBarChart();
    }
  };

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-gradient-card border-border/50">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/3 space-y-4">
            <h3 className="text-xl font-semibold">Chart Configuration</h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Chart Type
                </label>
                <Select value={chartType} onValueChange={(value: 'bar' | 'line' | 'pie') => setChartType(value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bar">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-4 h-4" />
                        Bar Chart
                      </div>
                    </SelectItem>
                    <SelectItem value="line">
                      <div className="flex items-center gap-2">
                        <LineChart className="w-4 h-4" />
                        Line Chart
                      </div>
                    </SelectItem>
                    <SelectItem value="pie">
                      <div className="flex items-center gap-2">
                        <PieChart className="w-4 h-4" />
                        Pie Chart
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  X-Axis
                </label>
                <Select value={xAxis} onValueChange={setXAxis}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {textKeys.map(key => (
                      <SelectItem key={key} value={key}>{key}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Y-Axis
                </label>
                <Select value={yAxis} onValueChange={setYAxis}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {numericKeys.map(key => (
                      <SelectItem key={key} value={key}>{key}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Button className="w-full" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download Chart
                </Button>
                {data && data.length > 0 && (
                  <Button 
                    className="w-full" 
                    onClick={onGenerateAISummary}
                    variant="default"
                  >
                    Generate AI Summary
                  </Button>
                )}
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-card/30 rounded-lg p-4">
              {renderChart()}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
