import React,{useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';


export const NavBar = () => {
  const navigate = useNavigate()
  const [navBar, setNavBar] = useState(false);

    const links=[
    
    { 
    
      id:1,
      links:"/Sensor-TS/",
      name:"Home"
    },
    { 
    
      id:2,
      links:"/Sensor-TS/about",
      name:"About Us"
    },
    { 
    
      id:3,
      links:"/Sensor-TS/retail-projects",
      name:'Retail Projects'
    },
    { 
    
      id:4,
      links:"/Sensor-TS/contact",
      name:'Contact Us'
    }
    ]



  return (
    <>
      <div className="flex z-50  justify-around items-center w-full h-20 px-4 text-black bg-gray-100 sticky top-0">
        <div>
          <h1 className='text-xl text-black font-bold pointer' onClick={()=>navigate('/Sensor-TS/')}> Sensor Tech Solutions</h1>
        </div>

        <ul className="hidden md:flex">
        
        {
         links.map((item)=>{
        
           return(
            
            
            <li className="px-4 cursor-pointer capitalize font-medium text-gray-950 hover:scale-105 duration-200" key={item.id}>
            <Link to={item.links} smooth duration={500}> {item.name}</Link> 
          </li>
            
            )
        
        })
        }
        
        </ul>
        <div className="cursor-pointer pr-4 z-10  text-gray-500 md:hidden" onClick={() => setNavBar(!navBar)}>
          {" "}
          {navBar ? (
            <FaTimes text-size={30}></FaTimes>
          ) : (
            <FaBars text-size={30}></FaBars>
          )}
        </div>

        {navBar && (
          <ul
            className=" flex  flex-col  gap-y-5 text-2xl justify-center items-center absolute top-0 left-0 w-full h-screen bg-white text-black hover:text-orange-400
         "
          >
           
           {links.map((item)=>{


             return(
              
              <li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200" key={item.id}>
            <Link to={item.links} smooth duration={500} onClick={(()=>setNavBar(!navBar))}> {item.name}</Link> 
            </li>
              
              )
          
          }) }
          </ul>
        )}
      </div>
    </>
  );
}
