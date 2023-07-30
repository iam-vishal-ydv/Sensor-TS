import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ContactFields from "../ContactUs/ContactFields";
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { AllData } from "../../Data/data";
import { Cards } from "../Retail Projects/RetailProjects";
import img10 from '../../assets/Digital-Signage.jpeg'
import Oval1 from '../../assets/Oval (3).png'
import Oval2 from '../../assets/Oval (4).png'
import { useNavigate } from "react-router";
import '../../index.css'
import  CountUp from  'react-countup'
import ScrollTrigger from "react-scroll-trigger";

export default function Home({ setAlert }) {

    const [counter,setCounter]=useState(false)
   
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
       <a href="https://api.whatsapp.com/send?phone=919717689571&text=Hello Varun" className="whatsapp"><WhatsAppIcon id='whatsapp' /></a>
       <a href="tel:+919717689571" className="call"><CallIcon /></a>
      <div className="header  flex  justify-center items-center  ">

      <div className="absolute w-full h-full   homeImages  bg-black  bg-gradient-to-t from-black   ">
        {" "}
      </div>
        <Grid container className="  ">
          <Grid item md={12} className="px-3 text-center ">
            <h2 className=" mt-0 pt-0 text_style">
              Welcome to <br />
              <div className=" w-[335px] h-11 m-auto">
                <h1 className="animate-typing overflow-hidden m-auto whitespace-nowrap border-r-4 border-r-white  text-4xl font-bold " style={{ color: 'crimson' }}>
                  HYPER RETAIL
                </h1>
              </div>
            </h2>
            <div className="text-div">
              <span className="description ">
              We deals in Supermarket display racks, Apparels display racks, Vegetable racks, MDF shelves racks, Italian top cash counter, Nut bolts less slotted angle racks and may more in partner with Star Interior PVT LTD. 
              </span>
            </div>
          </Grid>
        </Grid>
      </div>

      <Grid conatiner style={{ position: 'relative' }}>
        <h1 className="text-center pb-5 text-gray-700 home-product-heading1">WHAT WE DO</h1>
        <Grid item md={12}>
          <div className='  flex  flex-wrap  gap-9 w-[90%]  mx-auto  my-7     justify-center '>

            {AllData.map((item) => {
              return <React.Fragment key={item.id}>
                {item.id === 1 || item.id === 2 || item.id === 12 || item.id === 13 ? <di><Cards image={item.poster} name={item.name} infoAbout={item.infoAbout}></Cards> </di> : ''}
              </React.Fragment>
            })}
          </div>
        </Grid>
      </Grid>
      <Grid container py={10} sx={{ background: '#f1f1f1' }}  data-aos="fade-up">
        <Grid item md={4} sm={12} xs={12} className="text-center" px={3}>
          <div className="border py-2 mb-2" style={{ borderRadius: '30px' }}>
            <div style={{ fontSize: '3em', fontWeight: '600' }}>Clients</div>
            <div style={{ fontSize: '2em' }}>
            
          <ScrollTrigger onEnter={()=> setCounter(true)} onExit={()=>setCounter(false)}>   {counter &&  <CountUp start={0}  end={500} duration={2} delay={0}></CountUp>  }+   </ScrollTrigger>  </div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, nesciunt.</div>
          </div>
        </Grid>
        <Grid item md={4} sm={12} xs={12} className="text-center" px={3}>
          <div className="border py-2 mb-2" style={{ borderRadius: '30px' }}>
            <div style={{ fontSize: '3em', fontWeight: '600' }}>Completed Projects</div>
            <div style={{ fontSize: '2em' }}>      <ScrollTrigger onEnter={()=> setCounter(true)} onExit={()=>setCounter(false)}>   {counter &&  <CountUp start={0}  end={100} duration={2} delay={0}></CountUp>  }+   </ScrollTrigger> </div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, nesciunt.</div>
          </div>
        </Grid>
        <Grid item md={4} sm={12} xs={12} className="text-center" px={3}>
          <div className="border py-2 mb-2" style={{ borderRadius: '30px' }}>
            <div style={{ fontSize: '3em', fontWeight: '600' }}>Clients</div>
            <div style={{ fontSize: '2em' }}>     <ScrollTrigger onEnter={()=> setCounter(true)} onExit={()=>setCounter(false)}>   {counter &&  <CountUp start={0}  end={500} duration={2} delay={0}></CountUp>  }+   </ScrollTrigger></div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, nesciunt.</div>
          </div>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item md={6} sm={12} xs={12} className="">
          <div className="container_img">
            <img src={img10} className="home_img" />
            <div className="upper"></div>
            <div className="right"></div>
            <div className="bottom1"></div>
          </div>
        </Grid>
        <Grid item md={6} sm={12} xs={12} className="pt-28" style={{ position: 'relative', padding: '8% 5%' }}>
          <div className="container_text_heading">Start Bussines With <br />Us</div>
          <div className="container_text text-gray-800">We deals in Supermarket display racks, Apparels display racks, Vegetable racks, MDF shelves racks, Italian top cash counter, Nut bolts less slotted angle racks and may more in partner with Star Interior PVT LTD. <br/><br/> We work and supply pan India and have office in Delhi/NCR, Patna, Durgapur, Raipur, Secundrabad, Hyderabad.</div>
          <button className="btn5" onClick={() => navigate('/Sensor-TS/contact')}>Contact us</button>
          <img src={Oval1} className="oval1" />
          <img src={Oval2} className="oval2" />
        </Grid>
      </Grid>

      <div className="mt-4" style={{ position: 'relative' }}>
        <h1 className='about-product-heading2 text-center pb-5 text-gray-700'>Contact Us</h1>
      </div>
      <Grid container>
        <Grid item md={6} xs={12} py={2} px={3}>
          <ContactFields setAlert={setAlert} />
        </Grid>
        <Grid item md={6} xs={12} p={2}>
          <div class="mapouter">
            <div class="gmap_canvas">
            <iframe width="100%" height="100%" id="gmap_canvas" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=H.No.8, Supermarket display rack, 2-213, Kummarguda Rd, opp. Regional Passport Office, Shivaji Nagar, Secunderabad, Telangana 500003&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
              {/* <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q= Marg 155, Vikas Marg, Veer Savarkar Block, Block U, Shakarpur Khas, New Delhi, Delhi 110092&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0"></iframe> */}
            </div>
          </div>
        </Grid>
      </Grid>

    </>
  );
}
