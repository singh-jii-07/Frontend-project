import MemberRoute from "./member";
import AdminRoute from "./admin";
import { createBrowserRouter } from "react-router-dom";
const route= createBrowserRouter([
    AdminRoute,
    MemberRoute
])
export default route;