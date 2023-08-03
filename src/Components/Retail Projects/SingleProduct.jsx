import React, { useEffect } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link, useNavigate, useParams } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import { Grid } from '@mui/material';
import ContactFields from '../ContactUs/ContactFields';
import { AllData } from '../../Data/data';
import { Cards } from './RetailProjects';

export default function SingleProduct({ setAlert }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [singleData] = AllData.filter((item) => item.name === id)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleData])

  return (
    <>
       <a href="tel:+919717689571" className="call"><CallIcon /></a>
      <a href="https://api.whatsapp.com/send?phone=919717689571&text=Hello Varun" className="whatsapp"><WhatsAppIcon id='whatsapp' /></a>
      <div className=' pt-3 path'><Link className='text-xl text-gray-600' to='/'>Home</Link>&nbsp;&nbsp; <ArrowForwardIosIcon sx={{ fontSize: '18px' }} />&nbsp;&nbsp;<Link className='text-xl text-gray-600' to='/retail-projects'>Retail Projects</Link> &nbsp;&nbsp; <ArrowForwardIosIcon sx={{ fontSize: '18px' }} />&nbsp;&nbsp;<span className='text-xl text-gray-700'>{id}</span></div>
      <Grid container py={3}>
        <Grid item md={6} className='px-4'>
          <img src={singleData?.poster} alt="" style={{ width: '100%', height: '450px' }} />
        </Grid>
        <Grid item md={6} px={3} pt={5}>
          <h1 className='about-product-heading'>{id}</h1>
          <div style={{ textAlign: 'justify' }}>{singleData?.infoAbout}</div>
          <button className='btn mt-5' onClick={()=>navigate('/contact')}>Click For Contact</button>
        </Grid>
        <Grid item md={12} mt={3} sx={{position:'relative'}}>
          <h1 className='about-product-heading1 text-center'>Suggested Products</h1>
          <Grid container py={2}>
            <div className='  flex  flex-wrap  gap-9 w-[90%]  mx-auto  my-7     justify-center '>

              {AllData.map((item) => {
                return <React.Fragment key={item.id}>
                  {item.id === 1 || item.id === 2 || item.id === 12 || item.id === 13 ? <di><Cards image={item.poster} name={item.name} infoAbout={item.infoAbout}></Cards> </di> : ''}
                </React.Fragment>
              })}
            </div>
          </Grid>
        </Grid>
      </Grid>
      <div className='contact_container'>
        <h1 className='about-product-heading text-center pb-5'>Contact Us</h1>
        <ContactFields setAlert={setAlert} />
      </div>
    </>
  )
}
