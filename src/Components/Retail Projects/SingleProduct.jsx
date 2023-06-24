import React, { useEffect } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link, useParams } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import img1 from '../../assets/rack1.jpeg'
import img2 from '../../assets/POS-Billing-System.jpeg'
import img3 from '../../assets/EAS-Antena.jpeg'
import img4 from '../../assets/Electronics-surveillance.jpeg'
import img5 from '../../assets/Air-Curtain.jpeg'
import img6 from '../../assets/Billing-Software.jpeg'
import { Grid } from '@mui/material';
import ContactFields from '../ContactUs/ContactFields';
import { AllData } from '../../Data/data';
import { Cards } from './RetailProjects';

export default function SingleProduct({setAlert}) {
    const {id} = useParams()
    const [singleData] = AllData.filter((item)=>item.name === id )

    useEffect(()=>{
        window.scrollTo(0, 0);
      },[singleData])

  return (
    <>
    <a href="https://api.whatsapp.com/send?phone=916398474181&text=Hello Varun" className="whatsapp"><WhatsAppIcon id='whatsapp'/></a>
    <div className=' pt-3 path'><Link className='text-xl text-gray-600' to='/Sensor-TS/'>Home</Link>&nbsp;&nbsp; <ArrowForwardIosIcon sx={{fontSize:'18px'}}/>&nbsp;&nbsp;<Link className='text-xl text-gray-600' to='/Sensor-TS/retail-projects'>Retail Projects</Link> &nbsp;&nbsp; <ArrowForwardIosIcon sx={{fontSize:'18px'}}/>&nbsp;&nbsp;<span className='text-xl text-gray-700'>{id}</span></div>
    <Grid container py={3}>
        <Grid item md={6} className='px-4'>
            <img src={singleData?.poster} alt="" style={{width:'100%',height:'450px'}} />
        </Grid>
        <Grid item md={6} px={3}>
            <h1 className='about-product-heading'>{id}</h1>
            <div style={{textAlign:'justify'}}>{singleData?.infoAbout}</div>
        </Grid>
        <Grid item md={12} pt={3}>
        <h1 className='about-product-heading1 text-center'>Suggested Products</h1>
        <Grid container py={2}>
        <div className='  flex  flex-wrap  gap-9 w-[90%]  mx-auto  my-7     justify-center '>

{AllData.map((item) => {
  return <React.Fragment key={item.id}>
    {item.id === 1 || item.id === 2 || item.id === 12 || item.id === 13 ? <di><Cards image={item.poster} name={item.name} infoAbout={item.infoAbout}></Cards> </di> : ''}
  </React.Fragment>
})}
</div>
            {/* <Grid item md={2} sm={3} xs={6} px={2}><div className='img'><img src={img1}  alt="" /></div></Grid>
            <Grid item md={2} sm={3} xs={6} px={2}><img src={img2} className='img' alt="" /></Grid>
            <Grid item md={2} sm={3} xs={6} px={2}><img src={img3} className='img' alt="" /></Grid>
            <Grid item md={2} sm={3} xs={6} px={2}><img src={img4} className='img' alt="" /></Grid>
            <Grid item md={2} sm={3} xs={6} px={2}><img src={img5} className='img' alt="" /></Grid>
            <Grid item md={2} sm={3} xs={6} px={2}><img src={img6} className='img' alt="" /></Grid> */}
        </Grid>
        </Grid>
    </Grid>
     <div className='contact_container'>
        <h1 className='about-product-heading text-center pb-5'>Contact Us</h1>
    <ContactFields setAlert={setAlert}/>
    </div>
    </>
  )
}
