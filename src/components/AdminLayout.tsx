import { useState } from "react";
import {
  Home,
  Users,
  FolderOpen,
  BarChart3,
  Settings,
  HelpCircle,
  MoreHorizontal,
  Menu,
  LogOut,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Dashboard Overview",
    url: "/admin",
    icon: Home,
    active: true
  },
  {
    title: "User Management",
    url: "/admin/users",
    icon: Users,
    active: false
  },
  {
    title: "File Uploads & Usage",
    url: "/admin/uploads",
    icon: FolderOpen,
    active: false
  },
  {
    title: "Chart Analytics",
    url: "/admin/analytics",
    icon: BarChart3,
    active: false
  },
  {
    title: "System Settings",
    url: "/admin/settings",
    icon: Settings,
    active: false
  },
  {
    title: "Support & Feedback",
    url: "/admin/support",
    icon: HelpCircle,
    active: false
  },
  {
    title: "Other",
    url: "/admin/other",
    icon: MoreHorizontal,
    active: false
  }
];

interface AdminLayoutProps {
  children: React.ReactNode;
  currentPage?: string;
}

function AppSidebar() {
  const { state } = useSidebar();

  return (
    <Sidebar className={state === "collapsed" ? "w-14" : "w-60"} collapsible="icon">
      <SidebarContent className="bg-sidebar">
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70 px-3 py-2">
            Admin Panel
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className={`
                      ${item.active 
                        ? "bg-sidebar-primary text-sidebar-primary-foreground" 
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      }
                    `}
                  >
                    <a href={item.url} className="flex items-center gap-3 px-3 py-2">
                      <item.icon className="h-4 w-4" />
                      {state !== "collapsed" && <span>{item.title}</span>}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export const AdminLayout = ({ children, currentPage = "Dashboard Overview" }: AdminLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm flex items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-foreground">Excel Analytics</span>
                <span className="text-muted-foreground">/</span>
                <span className="text-analytics-primary font-medium">Admin Panel</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
              <div className="w-8 h-8 bg-analytics-primary rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6 bg-background">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};