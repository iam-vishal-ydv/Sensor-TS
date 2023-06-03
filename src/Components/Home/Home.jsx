import { Grid } from '@mui/material'
import React from 'react'

export default function Home() {
  return (
    <>
    <div className='pt-12 header'>
        <Grid container className='pt-12'>
             {/* <Grid item md={6}></Grid> */}
             <Grid item md={12} className='px-3 text-center'>
                <h2 className='text-white mt-5 pt-12 text_style'>Welcome to <br/> <span className='text-green-800'>Sensor Tech Solutions</span></h2>
                <div className='text-div'>
                <span className='description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, maxime inventore a aspernatur animi mollitia? Animi sunt magni amet in.
                </span>
                </div>
                
             </Grid>
        </Grid>
    </div>
    </>
  )
}
