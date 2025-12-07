import {  Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Users from "./pages/Users"
import UserDetails from "./pages/UserDetails"
import Navbar from "./components/Navbar"


const App = () => {
  return (
    <>
    
      <Navbar/>
          <Routes>

              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/users" element={<Users/>}/>
              <Route path="/users/:id" element = {<UserDetails/>}/>

          </Routes>


    </>
  )
}

export default App