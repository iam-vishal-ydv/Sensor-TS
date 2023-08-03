import React, { useEffect } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
      <a href="tel:+919717689571" className="call"><CallIcon /></a>
      <a href="https://api.whatsapp.com/send?phone=919717689571&text=Hello Varun" className="whatsapp"><WhatsAppIcon id='whatsapp' /></a>
      <div className=' pt-3 path'><Link className='text-lg text-gray-600' to='/'>Home</Link>&nbsp;&nbsp; <ArrowForwardIosIcon sx={{ fontSize: '16px' }} />&nbsp;&nbsp; <span className='text-lg text-gray-700'>About Us</span></div>
      <Grid container>
        <Grid item md={6} px={5} py={3} sm={12} xs={12}>
          <span className='c_heading'>About Us</span>
          <p style={{ textAlign: 'justify' }}>We started in 2017 to provide various solutions to Retail segment. We started with providing POS systems to retail with Posiflex POS system in India. Then we started moving in other segment also like security and surveillance in retail sector. Audi and video integration in retail stores and malls.
            In 2022 we started to provide wide range of products and solutions to retail owners under one roof of Hyper retail.
            In Hyper retail we are your one stop solution for all your supermarket and retail brand store’s needs.
            As we want now they don’t need to coordinate with so many agencies for different items which give them more time to concentrate on business growth. This will also save their manpower cost which is needed for managing different agencies as per products.
            We deals in Supermarket display racks, Apparels display racks, Vegetable racks, MDF shelves racks, Italian top cash counter, Nut bolts less slotted angle racks and may more in partner with Star Interior PVT LTD.
            We work and supply pan India and have office in Delhi/NCR, Patna, Durgapur, Raipur, Secundrabad, Hyderabad.
            We also do projects of supermarket and retail store and provide EAS antennas, POS billing systems, Electronics weighting machine, Air curtain, security, surveillance systems, IT equipment’s, Thermal and barcode paper, Audio/Video integration, Active LED video wall, Access control system, Fire alarm system, Biometric, Electronics shelves labels, RFID warehouse management, RFID asset tracking and many more IOT/analytics solutions.
            We are doing projects across the India with experienced manpower. Our aim is to provide on time delivery of projects with minimum investment of business owners.</p>
        </Grid>
        <Grid item md={6} px={5} py={3} sm={12} xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
          <img src='images/about.png' style={{ margin: '0 auto' }} />
        </Grid>
      </Grid>
    </>
  )
}
