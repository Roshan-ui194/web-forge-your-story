import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Settings, Database, Shield, Bell, Globe, Server } from "lucide-react";

export const SystemSettings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">System Settings</h2>
        <p className="text-muted-foreground">Configure system-wide settings and preferences</p>
      </div>

      {/* General Settings */}
      <Card className="p-6 bg-gradient-card border-border/50">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-analytics-primary/20 rounded-lg flex items-center justify-center">
            <Settings className="w-5 h-5 text-analytics-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">General Settings</h3>
            <p className="text-sm text-muted-foreground">Basic system configuration</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Maintenance Mode</p>
              <p className="text-sm text-muted-foreground">Temporarily disable user access</p>
            </div>
            <Switch />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">System Name</label>
            <Input defaultValue="Excel Analytics Platform" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Upload Limit (MB)</label>
            <Input type="number" defaultValue="10" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Global Notice</label>
            <Textarea 
              placeholder="Enter a system-wide announcement..."
              className="resize-none"
            />
          </div>
        </div>
      </Card>

      {/* Security Settings */}
      <Card className="p-6 bg-gradient-card border-border/50">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-analytics-secondary/20 rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-analytics-secondary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">Security Settings</h3>
            <p className="text-sm text-muted-foreground">Configure security and access controls</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Two-Factor Authentication</p>
              <p className="text-sm text-muted-foreground">Require 2FA for all admin accounts</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Auto-logout</p>
              <p className="text-sm text-muted-foreground">Automatically log out inactive users</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Session Timeout (minutes)</label>
            <Input type="number" defaultValue="60" />
          </div>
        </div>
      </Card>

      {/* Database Settings */}
      <Card className="p-6 bg-gradient-card border-border/50">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-analytics-accent/20 rounded-lg flex items-center justify-center">
            <Database className="w-5 h-5 text-analytics-accent" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">Database Settings</h3>
            <p className="text-sm text-muted-foreground">Database configuration and maintenance</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Auto Backup</p>
              <p className="text-sm text-muted-foreground">Automatically backup database daily</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Data Retention</p>
              <p className="text-sm text-muted-foreground">Keep data for 90 days</p>
            </div>
            <Badge variant="secondary">90 days</Badge>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline">
              <Database className="w-4 h-4 mr-2" />
              Backup Now
            </Button>
            <Button variant="outline">
              <Database className="w-4 h-4 mr-2" />
              Optimize Database
            </Button>
          </div>
        </div>
      </Card>

      {/* Notification Settings */}
      <Card className="p-6 bg-gradient-card border-border/50">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-analytics-warning/20 rounded-lg flex items-center justify-center">
            <Bell className="w-5 h-5 text-analytics-warning" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">Notification Settings</h3>
            <p className="text-sm text-muted-foreground">Configure system notifications</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Email Notifications</p>
              <p className="text-sm text-muted-foreground">Send email alerts for system events</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Upload Notifications</p>
              <p className="text-sm text-muted-foreground">Notify admins of new file uploads</p>
            </div>
            <Switch />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Admin Email</label>
            <Input type="email" defaultValue="admin@company.com" />
          </div>
        </div>
      </Card>

      <div className="flex justify-end gap-4">
        <Button variant="outline">Cancel</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
};