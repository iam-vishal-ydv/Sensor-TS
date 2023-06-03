import React,{useState} from 'react'
import {Link} from "react-router-dom"
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';


export const NavBar = () => {

  const [navBar, setNavBar] = useState(false);

    const links=[
    
    { 
    
      id:1,
      links:"home"
    },
    { 
    
      id:2,
      links:"about"
    },
    { 
    
      id:3,
      links:"Our Products"
    },
    { 
    
      id:4,
      links:"Contact Us"
    }
    ]



  return (
    <>
      <div className="flex z-50  justify-around items-center w-full h-20 px-4 text-black bg-gray-100 fixed">
        <div>
          <h1 className='text-xl text-black font-bold'> Sensor Tech Solutions</h1>
        </div>

        <ul className="hidden md:flex">
        
        {
         links.map((item)=>{
        
           return(
            
            
            <li className="px-4 cursor-pointer capitalize font-medium text-gray-950 hover:scale-105 duration-200" key={item.id}>
            <Link to={item.links} smooth duration={500}> {item.links}</Link> 
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
            <Link to={item.links} smooth duration={500} onClick={(()=>setNavBar(!navBar))}> {item.links}</Link> 
            </li>
              
              )
          
          }) }
          </ul>
        )}
      </div>
    </>
  );
}
