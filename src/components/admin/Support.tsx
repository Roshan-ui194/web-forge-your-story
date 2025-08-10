import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageSquare, Mail, Clock, User } from "lucide-react";

const supportTickets = [
  {
    id: 1,
    title: "Cannot upload large Excel files",
    user: "Michael Chen",
    email: "michael.chen@company.com",
    priority: "High",
    status: "Open",
    createdAt: "2024-08-09",
    category: "Upload Issues"
  },
  {
    id: 2,
    title: "Chart rendering is slow",
    user: "Sarah Johnson", 
    email: "sarah.johnson@company.com",
    priority: "Medium",
    status: "In Progress",
    createdAt: "2024-08-08",
    category: "Performance"
  },
  {
    id: 3,
    title: "Request for new chart type",
    user: "Emily Rodriguez",
    email: "emily.rodriguez@company.com", 
    priority: "Low",
    status: "Resolved",
    createdAt: "2024-08-07",
    category: "Feature Request"
  },
  {
    id: 4,
    title: "Login issues with 2FA",
    user: "David Kim",
    email: "david.kim@company.com",
    priority: "High", 
    status: "Open",
    createdAt: "2024-08-06",
    category: "Authentication"
  }
];

const feedbackStats = [
  {
    title: "Support Tickets",
    value: "23",
    change: "+5 this week",
    icon: HelpCircle,
    color: "analytics-primary"
  },
  {
    title: "Avg Response Time",
    value: "2.4h",
    change: "-0.5h improvement", 
    icon: Clock,
    color: "analytics-success"
  },
  {
    title: "Resolution Rate",
    value: "94%",
    change: "+2% this month",
    icon: MessageSquare,
    color: "analytics-accent"
  },
  {
    title: "User Satisfaction",
    value: "4.7/5",
    change: "+0.2 this quarter",
    icon: User,
    color: "analytics-secondary"
  }
];

export const Support = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Support & Feedback</h2>
          <p className="text-muted-foreground">Manage user support tickets and feedback</p>
        </div>
        <Button>
          <Mail className="w-4 h-4 mr-2" />
          Contact User
        </Button>
      </div>

      {/* Support Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {feedbackStats.map((stat, index) => (
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

      {/* Support Tickets */}
      <Card className="bg-gradient-card border-border/50">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-foreground">Recent Support Tickets</h3>
            <Button variant="outline" size="sm">View All Tickets</Button>
          </div>

          <div className="space-y-4">
            {supportTickets.map((ticket) => (
              <div 
                key={ticket.id}
                className="flex items-center justify-between p-4 bg-card/30 rounded-lg border border-border/50"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-analytics-warning/20 rounded-lg flex items-center justify-center">
                    <HelpCircle className="w-6 h-6 text-analytics-warning" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{ticket.title}</h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {ticket.user}
                      </span>
                      <span>{ticket.category}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {ticket.createdAt}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Badge 
                    variant={ticket.priority === "High" ? "destructive" : ticket.priority === "Medium" ? "default" : "secondary"}
                    className={
                      ticket.priority === "High" 
                        ? "bg-red-500/20 text-red-500" 
                        : ticket.priority === "Medium"
                        ? "bg-analytics-warning/20 text-analytics-warning"
                        : "bg-analytics-secondary/20 text-analytics-secondary"
                    }
                  >
                    {ticket.priority}
                  </Badge>

                  <Badge 
                    variant={ticket.status === "Resolved" ? "default" : "secondary"}
                    className={
                      ticket.status === "Resolved" 
                        ? "bg-analytics-success/20 text-analytics-success" 
                        : ticket.status === "In Progress"
                        ? "bg-analytics-primary/20 text-analytics-primary"
                        : "bg-analytics-warning/20 text-analytics-warning"
                    }
                  >
                    {ticket.status}
                  </Badge>

                  <Button variant="ghost" size="sm">
                    <MessageSquare className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Quick Actions */}
      <Card className="p-6 bg-gradient-card border-border/50">
        <h3 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline">
            <Mail className="w-4 h-4 mr-2" />
            Send Announcement
          </Button>
          <Button variant="outline">
            <HelpCircle className="w-4 h-4 mr-2" />
            Create FAQ
          </Button>
          <Button variant="outline">
            <MessageSquare className="w-4 h-4 mr-2" />
            Send Feedback Survey
          </Button>
        </div>
      </Card>
    </div>
  );
};