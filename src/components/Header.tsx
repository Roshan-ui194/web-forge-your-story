import { Button } from "@/components/ui/button";
import { BarChart3, Upload } from "lucide-react";
import { AuthDialog } from "./AuthDialog";

export const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl font-bold text-foreground">Excel Analytics Platform</h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
            Dashboard
          </a>
          <a href="#charts" className="text-muted-foreground hover:text-foreground transition-colors">
            Analytics
          </a>
          <a href="#history" className="text-muted-foreground hover:text-foreground transition-colors">
            History
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <Upload className="w-4 h-4 mr-2" />
            Upload
          </Button>
          <AuthDialog />
        </div>
      </div>
    </header>
  );
};