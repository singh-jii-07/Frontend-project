import {lazy} from "react";
import ProtectedRouter from "../protectedRoute";
import AdminLayout from '../../Layouts/admin'
const AdminLanding=lazy(()=>import('../../Views/admin/index'))
const AdminRoute ={
    path: '/admin',
    element:<ProtectedRouter layout={<AdminLayout/>} role={"admin"}/>,
    children: [
{
    path:'/admin',
    element:<AdminLanding/>
}
    ]
}
export default AdminRoute