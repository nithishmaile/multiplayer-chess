import { signup } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {useSnackbar } from 'notistack'


export const Signup=()=>{
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const { enqueueSnackbar,closeSnackbar} = useSnackbar()
    
    async function handleSubmit(e){
        e.preventDefault()
        const formData=new FormData(e.target);
        const name=formData.get("name");
        const email=formData.get("email")
        const password=formData.get("password")
        try{
            await dispatch(signup({name,email,password})).unwrap()
            enqueueSnackbar("Successfully signed up", { variant: "success" });
            navigate("/login");
            closeSnackbar()
        }catch(error){
            console.log(error)
        }
    }
    return(
    <div className="flex items-center justify-center h-screen">
        <div className="p-10 border border-black rounded">
            <form  onSubmit={handleSubmit} className="flex flex-col gap-10">
                <label>
                    Name
                    <input
                    className="ml-12 border rounded p-1"
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    />
                </label>
                <label>
                    Email
                    <input
                    className="ml-12 border rounded p-1"
                    type="text"
                    name="email"
                    placeholder="Enter email"
                    />
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        className="ml-4 border rounded p-1"
                        />
                </label>
                <button type="submit" className="border rounded">
                    Signup
                </button>
            </form>
        </div>    
    </div>
    )
}