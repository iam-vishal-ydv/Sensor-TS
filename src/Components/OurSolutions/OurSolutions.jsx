import React, { useEffect } from 'react'
import { Cards } from '../Retail Projects/RetailProjects'
import { Link } from 'react-router-dom';
import ContactFields from '../ContactUs/ContactFields';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';

export default function OurSolutions({data}) {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
  return (
    <>
    <a href="https://api.whatsapp.com/send?phone=919717689571&text=Hello Varun" className="whatsapp"><WhatsAppIcon id='whatsapp' /></a>
    <div className=' pt-3 path'><Link className='text-xl text-gray-600' to='/'>Home</Link>&nbsp;&nbsp; <ArrowForwardIosIcon sx={{ fontSize: '18px' }} />&nbsp;&nbsp;<Link className='text-xl text-gray-600' to='/our-solutions'>Our Solutions</Link> </div>
    <a href="tel:+919717689571" className="call"><CallIcon /></a>






    <div className='  flex  flex-wrap  gap-9 w-full  mx-auto  mt-7     justify-center '>

        {data.map((item) => {



            return <React.Fragment key={item.id}>


                <di ><Cards image={item.poster} name={item.name} infoAbout={item.infoAbout} id={item.id}></Cards> </di>
            </React.Fragment>

        })}




    </div>



    <div className='contact_container'>
        <h1 className='about-product-heading text-center pb-5 text-gray-700'>Contact Us</h1>
        <ContactFields />
    </div>
</>
  )
}
