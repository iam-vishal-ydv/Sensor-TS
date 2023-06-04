import { Grid } from '@mui/material'
import React from 'react'
import ContactFields from '../ContactUs/ContactFields'

export default function Home() {
  return (
    <>
    <div className='header'>
        <Grid container className='pt-12'>
             <Grid item md={12} className='px-3 text-center'>
                <h2 className='text-white mt-5 pt-12 text_style'>Welcome to <br/> <span className='text-green-800'>Sensor Tech Solutions</span></h2>
                <div className='text-div'>
                <span className='description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, maxime inventore a aspernatur animi mollitia? 
                </span>
                </div>
             </Grid>
        </Grid>
    </div>
    <div className='contact_container'>
      <span className='c_heading'>Contact Us For More Details</span>
      <ContactFields/>
    </div>
    </>
  )
}
