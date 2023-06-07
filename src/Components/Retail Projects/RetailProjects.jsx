import { Grid } from '@mui/material'
import React from 'react'
import ContactFields from '../ContactUs/ContactFields'

export default function RetailProjects() {
  return (
    <>
    <Grid container py={2}>
        <Grid item md={4} className=''>
         <div className='project_box'>Rates</div>
        </Grid>
        <Grid item md={4} className='text-center'>
        <div className='project_box'>POS</div>
        </Grid>
        <Grid item md={4} className='text-center'>
        <div className='project_box'>EAS</div>
        </Grid>
    </Grid>
    <div className='contact_container'>
    <ContactFields/>
    </div>
    </>
  )
}