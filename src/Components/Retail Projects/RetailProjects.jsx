import { Grid } from '@mui/material'
import React from 'react'
import ContactFields from '../ContactUs/ContactFields'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link, useNavigate } from 'react-router-dom';

export default function RetailProjects() {
    const navigate = useNavigate()
  return (
    <>
    <div className=' pt-3 path'><Link className='text-xl text-gray-600' to='/Sensor-TS/'>Home</Link>&nbsp;&nbsp; <ArrowForwardIosIcon sx={{fontSize:'18px'}}/>&nbsp;&nbsp; <span className='text-xl text-gray-700'>Retail Projects</span></div>
    <div className='ps-11 text-center pt-3' style={{fontSize:'30px',fontWeight:'600'}}>Click to See</div>
    <Grid container py={5} px={2} className='retail-container'>
        <Grid item md={4} sm={4} xs={12} pb={2} className='box-container'>
         <div className='project_box' onClick={()=>navigate('/Sensor-TS/retail-projects/singleproject/Racks')}>Racks</div>
        </Grid>
        <Grid item md={4} sm={4} xs={12} pb={2} className='box-container'>
        <div className='project_box' onClick={()=>navigate('/Sensor-TS/retail-projects/singleproject/POS')}>POS</div>
        </Grid>
        <Grid item md={4} sm={4} xs={12} pb={2} className='box-container'>
        <div className='project_box' onClick={()=>navigate('/Sensor-TS/retail-projects/singleproject/EAS')}>EAS</div>
        </Grid>
    </Grid>
    {/* <div className='contact_container'>
    <ContactFields/>
    </div> */}
    </>
  )
}
