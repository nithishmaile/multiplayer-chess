
import { Navigate ,Outlet} from "react-router-dom"
import { useSelector } from "react-redux"

export const ProtectedRoute=()=>{
    const user=useSelector((state)=>state.auth.user)
    const isAuthChecked=useSelector((state)=>state.auth.isAuthChecked)
    if (!isAuthChecked) {
        return <div>...Loading</div>;
    }
    if(!user){
        return  <Navigate to="/login" replace={true} />
    }
    return <Outlet/>
}