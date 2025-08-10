import { AdminLayout } from "@/components/AdminLayout";
import { SystemSettings as SystemSettingsComponent } from "@/components/admin/SystemSettings";

export default function SystemSettings() {
  return (
    <AdminLayout>
      <SystemSettingsComponent />
    </AdminLayout>
  );
}