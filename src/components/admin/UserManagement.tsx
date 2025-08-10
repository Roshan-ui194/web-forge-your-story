import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, Search, Mail, Calendar, MoreHorizontal, Shield, UserCheck } from "lucide-react";

const users = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@company.com",
    role: "Admin",
    status: "Active",
    lastLogin: "2024-08-09",
    uploadCount: 15,
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.chen@company.com", 
    role: "User",
    status: "Active",
    lastLogin: "2024-08-08",
    uploadCount: 8,
    avatar: "MC"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    email: "emily.rodriguez@company.com",
    role: "User", 
    status: "Inactive",
    lastLogin: "2024-08-05",
    uploadCount: 3,
    avatar: "ER"
  },
  {
    id: 4,
    name: "David Kim",
    email: "david.kim@company.com",
    role: "Moderator",
    status: "Active", 
    lastLogin: "2024-08-09",
    uploadCount: 12,
    avatar: "DK"
  }
];

export const UserManagement = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">User Management</h2>
          <p className="text-muted-foreground">Manage platform users and their permissions</p>
        </div>
        <Button>
          <Users className="w-4 h-4 mr-2" />
          Add User
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="p-4 bg-gradient-card border-border/50">
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input 
              placeholder="Search users by name or email..." 
              className="pl-10"
            />
          </div>
          <Button variant="outline">Filter</Button>
        </div>
      </Card>

      {/* Users Table */}
      <Card className="bg-gradient-card border-border/50">
        <div className="p-6">
          <div className="space-y-4">
            {users.map((user) => (
              <div 
                key={user.id}
                className="flex items-center justify-between p-4 bg-card/30 rounded-lg border border-border/50"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-analytics-primary rounded-full flex items-center justify-center text-white font-medium">
                    {user.avatar}
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{user.name}</h4>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Mail className="w-3 h-3" />
                      {user.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-sm font-medium text-foreground">{user.uploadCount}</p>
                    <p className="text-xs text-muted-foreground">Uploads</p>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {user.lastLogin}
                    </p>
                    <p className="text-xs text-muted-foreground">Last login</p>
                  </div>

                  <Badge 
                    variant={user.role === "Admin" ? "default" : "secondary"}
                    className={
                      user.role === "Admin" 
                        ? "bg-analytics-primary/20 text-analytics-primary" 
                        : user.role === "Moderator"
                        ? "bg-analytics-accent/20 text-analytics-accent"
                        : "bg-analytics-secondary/20 text-analytics-secondary"
                    }
                  >
                    <Shield className="w-3 h-3 mr-1" />
                    {user.role}
                  </Badge>

                  <Badge 
                    variant={user.status === "Active" ? "default" : "secondary"}
                    className={
                      user.status === "Active" 
                        ? "bg-analytics-success/20 text-analytics-success" 
                        : "bg-analytics-warning/20 text-analytics-warning"
                    }
                  >
                    <UserCheck className="w-3 h-3 mr-1" />
                    {user.status}
                  </Badge>

                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};