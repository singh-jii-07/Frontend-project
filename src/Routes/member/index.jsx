import {lazy} from "react";
import ProtectedRouter from "../ProtectedRoute";
import MemberLayout from '../../Layouts/member'
const MemberLanding=lazy(()=>import('../../Views/member/index'))
const MemberRoute ={
    path: '/member',
    element:<ProtectedRouter layout={<MemberLayout/>} role={"member"}/>,
    children: [
{
    path:'/member',
    element:<MemberLanding/>
}
    ]
}
export default MemberRoute