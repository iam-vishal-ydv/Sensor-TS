import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { Alert, Button, IconButton, Snackbar } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import  logo from '../../assets/Hyper-retail.jpg'


const NavBar = ({alert}) => {
  const navigate = useNavigate();
  const [navBar, setNavBar] = useState(false);
  

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="success"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const links = [
    {
      id: 1,
      links: "/Sensor-TS/",
      name: "Home",
    },
    {
      id: 2,
      links: "/Sensor-TS/about",
      name: "About Us",
    },
    {
      id: 3,
      links: "/Sensor-TS/retail-projects",
      name: "Our Product",
    },
  
    {
      id: 5,
      links: "/Sensor-TS/contact",
      name: "Contact Us",
    },
  ];

  return (
    <>
      <div className="flex z-50  px-10  justify-between items-center w-full h-20  text-black bg-gray-100 sticky top-0">
       <div className="w-20">
           <img  src={logo} className="logo bg-black " onClick={()=>navigate('/Sensor-TS/')} alt="logo"/>
           </div>

        <ul className="hidden md:flex ">
          {links.map((item) => {
            return (
              <li
                className="px-4 cursor-pointer capitalize  xl:text-lg lg:text-lg md:text-sm sm:text-sm  text-sm    font-medium text-black hover:scale-105 duration-200"
                key={item.id}
              >
                <Link to={item.links} smooth duration={500}>
                  {" "}
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div
          className="cursor-pointer pr-4 z-10  text-gray-500 md:hidden"
          onClick={() => setNavBar(!navBar)}
        >
          {" "}
          {navBar ? (
            <FaTimes text-size={30}></FaTimes>
          ) : (
            <FaBars text-size={30}></FaBars>
          )}
        </div>

        {navBar && (
          <ul
            className=" flex  flex-col   gap-y-5 text-2xl justify-center items-center absolute top-0 left-0 w-full h-screen bg-white text-black hover:text-orange-400
         "
          >
            {links.map((item) => {
              return (
                <li
                  className="px-4 cursor-pointer capitalize    font-medium text-gray-500 hover:scale-105 duration-200"
                  key={item.id}
                >
                  <Link
                    to={item.links}
                    smooth
                    duration={500}
                    onClick={() => setNavBar(!navBar)}
                  >
                    {" "}
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>


             




      {/* {!alert?<Alert   severity="success">Email Send Succesfully</Alert>:''} */}
      <Snackbar
        open={alert}
        autoHideDuration={6000}
        onClose={handleClose}
       
        action={action}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Email Send Successfully
        </Alert>
      </Snackbar>
    </>
  );
};

export default NavBar;
