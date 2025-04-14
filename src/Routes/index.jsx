import MemberRoute from "./member";
import AdminRoute from "./admin";
import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import LandingLayout from "../Layouts/Landing";

const Unauthorized=lazy (()=> import("../Views/error/Unauthorized"));
const LandingPage = lazy(()=>import('../Views/Landing'))
const LandingRoute={
    path:"/",
    element:<LandingLayout/>,
    children: [
        {
            path:"/",
            element:<LandingPage/>
        },
        {
            path:"/401",element:<Unauthorized/>
        },{
            path:"*",
            element:
            <div className="h-screen flex justify-center items-center text-9xl font-bold text-yellow-500">
                404
            </div>
        }
    ]
}
const route= createBrowserRouter([
    AdminRoute,
    MemberRoute,
    LandingRoute
])
export default route;