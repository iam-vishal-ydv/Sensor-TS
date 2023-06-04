 import { Route, Routes } from "react-router-dom"
import Footer from "./Components/Footer/Footer"
import {NavBar} from "./Components/Header/NavBar"
import Home from "./Components/Home/Home"
import About from "./Components/AboutUs/About"
import ContactUs from "./Components/ContactUs/ContactUs"


function App() {
  

  return (
    <>
     <NavBar/>
     <Routes>
      <Route path='/Sensor-TS/' element={<Home/>}/>
      <Route path='/Sensor-TS/about' element={<About/>}/>
      <Route path='/Sensor-TS/contact' element={<ContactUs/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
