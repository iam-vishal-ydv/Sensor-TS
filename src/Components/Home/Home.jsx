import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import ContactFields from "../ContactUs/ContactFields";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Home({setAlert}) {
  

  useEffect(()=>{
   
  },[])

  return (
    <>
    <a href="https://api.whatsapp.com/send?phone=916398474181&text=Hello Varun" className="whatsapp"><WhatsAppIcon id='whatsapp'/></a>
      <div className="header">
        <Grid container className="pt-12 bg-white">
          <Grid item md={12} className="px-3 text-center ">
            <h2 className=" mt-5 pt-12 text_style">
              Welcome to <br />
              <div className=" w-[335px] h-11 m-auto">
                <h1 className="animate-typing overflow-hidden m-auto whitespace-nowrap border-r-4 border-r-white  text-3xl font-bold text-orange-500">
                   Cencertek Solutions
                </h1>
              </div>
            </h2>
            <div className="text-div">
              <span className="description ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                maxime inventore a aspernatur animi mollitia?
              </span>
            </div>
          </Grid>
        </Grid>
      </div>

      <div style={{position:'relative'}}>
        <h1 className='about-product-heading2 text-center pb-5 text-gray-700'>Contact Us</h1>
        </div>
      <Grid container>
        <Grid item md={6} xs={12} py={2} px={3}>
        <ContactFields setAlert={setAlert} />
        </Grid>
        <Grid item md={6} xs={12} p={2}>
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q= Marg 155, Vikas Marg, Veer Savarkar Block, Block U, Shakarpur Khas, New Delhi, Delhi 110092&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0"></iframe>
            </div>
        </div>
        </Grid>
      </Grid>

    </>
  );
}
