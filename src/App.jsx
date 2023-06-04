 import { Route, Routes } from "react-router-dom"
import Footer from "./Components/Footer/Footer"
import {NavBar} from "./Components/Header/NavBar"
import Home from "./Components/Home/Home"
import About from "./Components/AboutUs/About"


function App() {
  

  return (
    <>
     <NavBar/>
     <Routes>
      <Route path='/Sensor-TS/' element={<Home/>}/>
      <Route path='//about' element={<About/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
