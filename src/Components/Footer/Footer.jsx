import { Grid, TextField } from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { AiFillInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BiCopyright } from 'react-icons/bi';

export default function Footer() {
  return (
    <>
    <div className='main bg-gray-900  '> 
    <Grid container className='text-white py-4'>
      <Grid item md={4} className='px-2'>
        <div className='main_heading py-3 text-green-700'>Sensor Tech Solution</div>
        <div className='py-3 address'>
        <span className='text-gray-400'><LocationOnIcon/> <span>Address</span></span>
        <span className='text-gray-400'><LocalPhoneIcon/> <span>+91 9310306603</span></span>
        <span className='text-gray-400'><EmailIcon/> <span> sales.sensortechsolution@gmail.com</span></span>
        </div>
      </Grid>
      <Grid item md={4} className='px-2'>
      <div className='main_heading2 py-3'>Products</div>
      <div className='py-3 address'>
        <span className='text-gray-400 pointer'><KeyboardDoubleArrowRightIcon/> Shirt</span>
        <span className='text-gray-400 pointer'><KeyboardDoubleArrowRightIcon/> T-Shirt</span>
        <span className='text-gray-400 pointer'><KeyboardDoubleArrowRightIcon/> Jeans</span>
        <span className='text-gray-400 pointer'><KeyboardDoubleArrowRightIcon/> Towel</span>
        <span className='text-gray-400 pointer'><KeyboardDoubleArrowRightIcon/> Shoes</span>
        <span className='text-gray-400 pointer'><KeyboardDoubleArrowRightIcon/> Belts</span>
        </div>
      </Grid>
      <Grid item md={4} className='px-2'>
      <div className='main_heading2 py-3'>Further Info</div>
      <div className='py-3 address'>
        <span className='text-gray-400 pointer'><KeyboardDoubleArrowRightIcon/> Home</span>
        <span className='text-gray-400 pointer'><KeyboardDoubleArrowRightIcon/> About Us</span>
        <span className='text-gray-400 pointer'><KeyboardDoubleArrowRightIcon/> Shop Location</span>
        <span className='text-gray-400 pointer'><KeyboardDoubleArrowRightIcon/> Contact</span>
        </div>
      </Grid>
      </Grid>
    <Grid container className='second'>
      <Grid item md={4} className='icons py-3'>
        <a href='#' className='border r-border p-2'><AiFillInstagram  className='fs_20'/></a>
        <a href='#' className='border r-border p-2 ms-4'><BsFacebook className='fs_20'/></a>
        <a href='#' className='border r-border p-2 ms-4'><BsTwitter className='fs_20'/></a>
      </Grid>
     
    </Grid>
    </div>
    <Grid container className='bg-gray-950 bottom'>
     <span className='text_gray'>Copyright &nbsp; <BiCopyright/> &nbsp;2023 Sensor Tech Solutions </span>
    </Grid>
    </>
  )
}
