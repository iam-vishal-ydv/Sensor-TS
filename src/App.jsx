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
import OurSolutions from "./Components/OurSolutions/OurSolutions";



function App() {
  const [alert,setAlert] = useState(false) 
  return (
    <>
      <NavBar alert={alert}/>
      <Routes>
        <Route path="/"  element={<Home setAlert={setAlert}/>} />
        <Route path="/about" element={<About setAlert={setAlert}/>} />
        <Route path="/contact" element={<ContactUs setAlert={setAlert} alert={alert}/>} />
        <Route path="/retail-projects" element={<RetailProjects  data={AllData}  />} />
        <Route path="/our-solutions" element={<OurSolutions  data={AllData}  />} />
        <Route path="/retail-projects/singleproduct/:id" element={<SingleProduct setAlert={setAlert}/>} />
        <Route path="/msg" element={<ContactFields alert={alert} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
