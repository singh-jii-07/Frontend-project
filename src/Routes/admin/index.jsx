import { lazy } from "react";
import ProtectedRoute from "../ProtectedRoute";
import AdminLayout from "../../Layouts/admin";
const AdminLanding = lazy(() => import("../../Views/admin/index"));
const AdminRoute = {
  path: "/admin",
  element: <ProtectedRoute layout={<AdminLayout />} role={"admin"} />,
  children: [
    {
      path: "/admin",
      element: <AdminLanding />,
    },
  ],
};
export default AdminRoute;
