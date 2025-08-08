import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart3, LineChart, PieChart, Download } from "lucide-react";
import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line, Pie } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const sampleData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    {
      label: 'Revenue',
      data: [65000, 85000, 75000, 95000],
      backgroundColor: 'hsl(252 78% 60% / 0.8)',
      borderColor: 'hsl(252 78% 60%)',
      borderWidth: 2,
    },
    {
      label: 'Expenses',
      data: [45000, 55000, 50000, 60000],
      backgroundColor: 'hsl(268 83% 58% / 0.8)',
      borderColor: 'hsl(268 83% 58%)',
      borderWidth: 2,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        color: 'hsl(0 0% 98%)',
      },
    },
    title: {
      display: true,
      text: 'Quarterly Financial Data',
      color: 'hsl(0 0% 98%)',
      font: {
        size: 16,
        weight: 'bold' as const,
      },
    },
  },
  scales: {
    y: {
      ticks: {
        color: 'hsl(240 5% 64%)',
      },
      grid: {
        color: 'hsl(240 6% 20%)',
      },
    },
    x: {
      ticks: {
        color: 'hsl(240 5% 64%)',
      },
      grid: {
        color: 'hsl(240 6% 20%)',
      },
    },
  },
};

export const ChartArea = () => {
  const [chartType, setChartType] = useState<'bar' | 'line' | 'pie'>('bar');
  const [xAxis, setXAxis] = useState('quarter');
  const [yAxis, setYAxis] = useState('revenue');

  const renderChart = () => {
    const commonProps = {
      data: sampleData,
      options: chartOptions,
      style: { height: '400px' }
    };

    switch (chartType) {
      case 'line':
        return <Line {...commonProps} />;
      case 'pie':
        return <Pie {...commonProps} />;
      default:
        return <Bar {...commonProps} />;
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
                    <SelectItem value="quarter">Quarter</SelectItem>
                    <SelectItem value="month">Month</SelectItem>
                    <SelectItem value="year">Year</SelectItem>
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
                    <SelectItem value="revenue">Revenue</SelectItem>
                    <SelectItem value="expenses">Expenses</SelectItem>
                    <SelectItem value="profit">Profit</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full" variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Download Chart
              </Button>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-card/30 rounded-lg p-4 h-[450px]">
              {renderChart()}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};