
import React from 'react'
import ContactFields from './ContactFields'
import { Grid } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

export default function ContactUs({setAlert,alert}) {

    return (
        <>
        
        <div className=' pt-3 path'><Link className='text-lg text-gray-600' to='/Sensor-TS/'>Home</Link>&nbsp;&nbsp; <ArrowForwardIosIcon sx={{fontSize:'16px'}}/>&nbsp;&nbsp; <span className='text-lg text-gray-700'>Contact Us</span></div>
            <Grid container>
                <Grid item md={6} px={5} py={3} sm={12} xs={12}>
                    <h2 className='c_heading'>Contact Us</h2>
                    <ContactFields setAlert={setAlert} alert={alert}/>
                </Grid>
                <Grid item md={6} px={5} py={3} sm={12} xs={12}>
                <img src='images/Group.png' style={{margin:'0 auto'}}/>
                </Grid>
            </Grid>
        </>
    )
}
