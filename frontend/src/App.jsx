
import { Route,Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import { Lobby } from './pages/Lobby'
import { Navbar } from './components/Navbar'
import { useEffect } from 'react'
import { ProtectedRoute } from './components/ProtectedRoute'
import { useDispatch } from 'react-redux'
import { fetchMe } from './slices/authSlice'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMe());
  }, [dispatch]);




  return(
    <Routes>
      <Route element={<Navbar/>}>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route element={<ProtectedRoute/>}>
          <Route path="/lobby" element={<Lobby/>}/>
        </Route>
      </Route>
    </Routes>
  )
}

export default App
