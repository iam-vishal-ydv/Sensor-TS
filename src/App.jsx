import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/Header/NavBar";
import Home from "./Components/Home/Home";
import About from "./Components/AboutUs/About";
import ContactUs from "./Components/ContactUs/ContactUs";
import RetailProjects from "./Components/Retail Projects/RetailProjects";
// import SingleProject from "./Components/Retail Projects/SingleProject";
import SingleProduct from "./Components/Retail Projects/SingleProduct";
import { useState } from "react";
import ContactFields from "./Components/ContactUs/ContactFields";
import {AllData} from "./Data/data"



function App() {
  const [alert,setAlert] = useState(false) 
  return (
    <>
      <NavBar alert={alert}/>
      <Routes>
        <Route path="/Sensor-TS/"  element={<Home setAlert={setAlert}/>} />
        <Route path="/Sensor-TS/about" element={<About setAlert={setAlert}/>} />
        <Route path="/Sensor-TS/contact" element={<ContactUs setAlert={setAlert} alert={alert}/>} />
        <Route path="/Sensor-TS/retail-projects" element={<RetailProjects  data={AllData}  />} />
   
        <Route path="/Sensor-TS/retail-projects/singleproduct/:id" element={<SingleProduct setAlert={setAlert}/>} />
        <Route path="/msg" element={<ContactFields alert={alert} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
