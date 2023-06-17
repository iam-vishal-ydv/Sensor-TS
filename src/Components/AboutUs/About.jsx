import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function About() {
  return (
    <>
    <a href="https://api.whatsapp.com/send?phone=916398474181&text=Hello Varun" className="whatsapp"><WhatsAppIcon id='whatsapp'/></a>
    <div className=' pt-3 path'><Link className='text-lg text-gray-600' to='/Sensor-TS/'>Home</Link>&nbsp;&nbsp; <ArrowForwardIosIcon sx={{fontSize:'16px'}}/>&nbsp;&nbsp; <span className='text-lg text-gray-700'>About Us</span></div>
    <Grid container>
      <Grid item md={6}  px={5} py={3} sm={12} xs={12}>
        <span className='c_heading'>About Us</span>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor accusamus vero, autem deserunt id alias delectus eum debitis molestiae voluptatem quisquam ad accusantium maiores fuga. Facere animi explicabo nostrum modi molestias, eligendi mollitia odio tempora porro earum vel beatae recusandae. At, consequatur suscipit! Iste dignissimos cumque unde quo possimus inventore vitae ipsa? Ut ratione illo non rem, sunt neque molestias delectus quo aspernatur, nemo error ipsam sit aliquam maxime aliquid iste quis hic consequatur? Omnis eligendi dolor nostrum nam autem, voluptate laborum numquam in ad ratione, doloribus architecto perferendis a, ipsa fugiat officiis tempore expedita? Sunt sit doloremque nobis voluptatum adipisci natus architecto reiciendis, hic neque iste, cupiditate itaque animi cumque odio qui, tempora quis saepe magni sequi? Cumque et quasi hic ipsam voluptatibus porro veniam placeat eligendi! Fuga, sint? Deserunt esse obcaecati sequi doloremque fugiat repellat eos nihil laborum nemo expedita voluptatibus eum tempore, maiores illo temporibus necessitatibus accusantium?</p>
      </Grid>
      <Grid item md={6}  px={5} py={3} sm={12} xs={12} sx={{display:'flex',alignItems:'center'}}>
        <img src='images/about.png' style={{margin:'0 auto'}}/>
      </Grid>
    </Grid>
    </>
  )
}
