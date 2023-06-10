import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link, useParams } from 'react-router-dom';
import { Grid } from '@mui/material';
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


export default function SingleProject() {
    const {id} = useParams()
    let data = [
        {name:'Racks',img:img1},
        {name:'POS Billing System',img:img2},
        {name:'EAS antenna',img:img3},
        {name:'Electronics Surveillance',img:img4},
        {name:'Air Curtain',img:img5},
        {name:'Billing Software',img:img6},
        {name:'IT Infrastructure',img:img7},
        {name:'Audio System',img:img8},
        {name:'Fire Alarm System',img:img9},
        {name:'Digital Signage',img:img10},
        {name:'Biometric',img:img11},
        {name:'RFID Inventory and Asset Management',img:img12},
        {name:'Face Detection and Demography',img:img13},
    ]
  return (
    <>
    <div className=' pt-3 path'><Link className='text-xl text-gray-600' to='/Sensor-TS/'>Home</Link>&nbsp;&nbsp; <ArrowForwardIosIcon sx={{fontSize:'18px'}}/>&nbsp;&nbsp;<Link className='text-xl text-gray-600' to='/Sensor-TS/retail-projects'>Retail Projects</Link> &nbsp;&nbsp; <ArrowForwardIosIcon sx={{fontSize:'18px'}}/>&nbsp;&nbsp;<span className='text-xl text-gray-700'>{id}</span></div>
    <Grid container className='img-container'>
      {data.map((item,index)=> <Grid item md={2} sm={3} xs={6} px={2} pb={5}>
        <img src={item.img} className='img' alt="" />
        <span className='text-center'>{item.name}</span>
        </Grid>)}
    </Grid>
    </>
  )
}
