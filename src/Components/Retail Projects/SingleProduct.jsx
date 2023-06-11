import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link, useParams } from 'react-router-dom';
import img1 from '../../assets/rack1.jpeg'
import img2 from '../../assets/POS-Billing-System.jpeg'
import img3 from '../../assets/EAS-Antena.jpeg'
import img4 from '../../assets/Electronics-surveillance.jpeg'
import img5 from '../../assets/Air-Curtain.jpeg'
import img6 from '../../assets/Billing-Software.jpeg'
import img7 from '../../assets/IT-Infrastrucure.jpeg'
import img8 from '../../assets/Audio-System.jpeg'
import img9 from '../../assets/Fire-Alarm-System.jpeg'
import img10 from '../../assets/Digital-Signage.jpeg'
import img11 from '../../assets/Biometric.jpeg'
import img12 from '../../assets/RFID-Inventory.jpeg'
import img13 from '../../assets/Face-Detection.jpeg'

import { Grid } from '@mui/material';
import ContactFields from '../ContactUs/ContactFields';

export default function SingleProduct() {
    const {id} = useParams()
  return (
    <>
    <div className=' pt-3 path'><Link className='text-xl text-gray-600' to='/Sensor-TS/'>Home</Link>&nbsp;&nbsp; <ArrowForwardIosIcon sx={{fontSize:'18px'}}/>&nbsp;&nbsp;<Link className='text-xl text-gray-600' to='/Sensor-TS/retail-projects'>Retail Projects</Link> &nbsp;&nbsp; <ArrowForwardIosIcon sx={{fontSize:'18px'}}/>&nbsp;&nbsp;<span className='text-xl text-gray-700'>{id}</span></div>
    <Grid container py={3}>
        <Grid item md={6}>
            <img src={img1} alt="" className='' />
        </Grid>
        <Grid item md={6} px={3}>
            <h1 className='about-product-heading'>{id}</h1>
            <div style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, et, pariatur laborum officia autem maiores quaerat aut eum commodi possimus nihil quisquam a deserunt, eaque incidunt culpa velit cum voluptatum vel labore? Eveniet impedit quasi maiores nisi dolore aliquid excepturi autem recusandae totam. Autem vitae, aperiam eaque voluptatem quae illum inventore, nulla perferendis dignissimos ipsum nostrum veniam maxime deleniti illo architecto, tempora assumenda mollitia. Saepe doloribus quaerat ad eos, atque vel molestias delectus vitae eum odit labore corporis esse ab!</div>
        </Grid>
        <Grid item md={12} pt={3}>
        <h1 className='about-product-heading1 text-center'>Suggested Products</h1>
        <Grid container py={2}>
            <Grid item md={2} sm={3} xs={6} px={2}><img src={img1} className='img' alt="" /></Grid>
            <Grid item md={2} sm={3} xs={6} px={2}><img src={img2} className='img' alt="" /></Grid>
            <Grid item md={2} sm={3} xs={6} px={2}><img src={img3} className='img' alt="" /></Grid>
            <Grid item md={2} sm={3} xs={6} px={2}><img src={img4} className='img' alt="" /></Grid>
            <Grid item md={2} sm={3} xs={6} px={2}><img src={img5} className='img' alt="" /></Grid>
            <Grid item md={2} sm={3} xs={6} px={2}><img src={img6} className='img' alt="" /></Grid>
        </Grid>
        </Grid>
    </Grid>
     <div className='contact_container'>
        <h1 className='about-product-heading text-center pb-5'>Contact Us For More Information</h1>
    <ContactFields/>
    </div>
    </>
  )
}
