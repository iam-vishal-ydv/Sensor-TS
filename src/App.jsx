 import { Route, Routes } from "react-router-dom"
import Footer from "./Components/Footer/Footer"
import {NavBar} from "./Components/Header/NavBar"
import Home from "./Components/Home/Home"


function App() {
  

  return (
    <>
     <NavBar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
