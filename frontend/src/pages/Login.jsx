import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {login,fetchMe} from '../slices/authSlice'
import {useSnackbar } from 'notistack'

export const Login=()=>{
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const { enqueueSnackbar,closeSnackbar} = useSnackbar()


    async function handleSubmit(e){
        e.preventDefault();
        const formData=new FormData(e.target);
        const email=formData.get("email");
        const password=formData.get("password");
        try{
            await dispatch(login({email,password,})).unwrap();
            await dispatch(fetchMe()).unwrap();
            enqueueSnackbar("Successfully logged in", { variant: "success" });
            navigate("/lobby")
            closeSnackbar()
        }catch(error){
            console.log(error)
        }
    }
    return (
        <div className="flex items-center justify-center h-screen">
        <div className="p-10 border border-black rounded">
            <form  onSubmit={handleSubmit} className="flex flex-col gap-10">
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
                    Login
                </button>
            </form>
            </div>    
    </div>
    )
}