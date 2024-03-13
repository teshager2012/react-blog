import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import SignUp from './pages/SignUp' 
import Header from "./components/Header"
export default function App()  {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-In" element={<SignIn />} />
        <Route path="/sign-Up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        
        </Routes>
    
    
    
    </BrowserRouter>
  )
}
