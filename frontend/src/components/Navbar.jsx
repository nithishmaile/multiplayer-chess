import { Link,Outlet } from "react-router-dom"
import { useDispatch,useSelector } from "react-redux"
import { logout } from "../slices/authSlice";
export const Navbar=()=>{
    const user=useSelector((state)=>state.auth.user);
    const dispatch=useDispatch()

    function handleLogout(){
        dispatch(logout())
    }
    return(
        <div>
            <div className="text-black p-4 bg-blue-400 flex items-center justify-between">
                <div>
                    <Link to="/lobby">Lobby</Link>
                </div>
                <div>
                    {user?(<div onClick={handleLogout} className="cursor-pointer">Logout</div>):(<div className="flex items-center">
                        <Link className="mr-5" to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </div>)}
                </div>
            </div>
            <div className="p-4">
                <Outlet/>
            </div>
        </div>

    )
}