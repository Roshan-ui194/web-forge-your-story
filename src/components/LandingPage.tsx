import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BarChart3, Upload, Brain, TrendingUp, Shield, Zap } from "lucide-react";

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-foreground">Excel Analytics</h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Profile
            </a>
            <Button variant="outline" size="sm">
              Logout
            </Button>
          </nav>

          <div className="flex items-center gap-3 md:hidden">
            <Button variant="outline" size="sm">
              Menu
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Excel Analytics Platform
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Effortlessly upload, analyze, and visualize your Excel data with
              beautiful charts and smart insights. Built for users and admins with a
              focus on speed, security, and simplicity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-analytics-primary hover:bg-white/90">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Login
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 text-center bg-gradient-card border-border/50 shadow-card">
              <div className="w-16 h-16 bg-analytics-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Upload className="w-8 h-8 text-analytics-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Easy Excel Upload</h3>
              <p className="text-muted-foreground leading-relaxed">
                Drag & drop your Excel files and instantly
                parse your data.
              </p>
            </Card>

            <Card className="p-8 text-center bg-gradient-card border-border/50 shadow-card">
              <div className="w-16 h-16 bg-analytics-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-analytics-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Dynamic Data Mapping</h3>
              <p className="text-muted-foreground leading-relaxed">
                Choose your X and Y axes and generate
                charts on the fly.
              </p>
            </Card>

            <Card className="p-8 text-center bg-gradient-card border-border/50 shadow-card">
              <div className="w-16 h-16 bg-analytics-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-analytics-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Beautiful Visualizations</h3>
              <p className="text-muted-foreground leading-relaxed">
                Bar, line, and pie charts with download
                options and responsive design.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-analytics-primary mb-2">500+</div>
              <div className="text-muted-foreground">Files Processed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-analytics-secondary mb-2">50+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-analytics-accent mb-2">1000+</div>
              <div className="text-muted-foreground">Charts Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-analytics-success mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-foreground">Excel Analytics Platform</span>
          </div>
          <p className="text-muted-foreground">
            © 2024 Excel Analytics Platform. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};