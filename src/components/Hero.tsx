import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, BarChart3, Download, Brain, TrendingUp } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <BarChart3 className="w-7 h-7 text-white" />
            </div>
            <span className="text-white/90 font-semibold text-lg">Excel Analytics Platform</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Transform Your Excel Data into
            <span className="block bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Beautiful Insights
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            Effortlessly upload, analyze, and visualize your Excel data with beautiful charts and smart insights. 
            Built for users and admins with a focus on speed, security, and simplicity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button size="lg" className="bg-white text-analytics-primary hover:bg-white/90 px-8 py-4 text-lg">
              Get Started Free
              <Upload className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm">
              Login to Dashboard
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <BarChart3 className="w-8 h-8 text-white mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Easy Upload</h3>
              <p className="text-white/80 text-sm">Drag & drop Excel files</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <TrendingUp className="w-8 h-8 text-white mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Smart Charts</h3>
              <p className="text-white/80 text-sm">Dynamic visualizations</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Brain className="w-8 h-8 text-white mb-3 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">AI Insights</h3>
              <p className="text-white/80 text-sm">Comprehensive analysis</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full animate-pulse animation-delay-200" />
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-white rounded-full animate-pulse animation-delay-500" />
        <div className="absolute bottom-40 right-10 w-16 h-16 bg-white rounded-full animate-pulse animation-delay-700" />
      </div>
    </section>
  );
};