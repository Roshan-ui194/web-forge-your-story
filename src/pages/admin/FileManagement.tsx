import { AdminLayout } from "@/components/AdminLayout";
import { FileManagement as FileManagementComponent } from "@/components/admin/FileManagement";

export default function FileManagement() {
  return (
    <AdminLayout>
      <FileManagementComponent />
    </AdminLayout>
  );
}