import { AdminLayout } from "@/components/AdminLayout";
import { UserManagement as UserManagementComponent } from "@/components/admin/UserManagement";

export default function UserManagement() {
  return (
    <AdminLayout>
      <UserManagementComponent />
    </AdminLayout>
  );
}