import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import ContactFields from "../ContactUs/ContactFields";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { AllData } from "../../Data/data";
import { Cards } from "../Retail Projects/RetailProjects";
import img10 from '../../assets/Digital-Signage.jpeg'
import Oval1 from '../../assets/Oval (3).png'
import Oval2 from '../../assets/Oval (4).png'
import { useNavigate } from "react-router";
 import '../../index.css'
export default function Home({ setAlert }) {
  const navigate = useNavigate()

  useEffect(() => {

  }, [])

  return (
    <>
      <a href="https://api.whatsapp.com/send?phone=916398474181&text=Hello Varun" className="whatsapp"><WhatsAppIcon id='whatsapp' /></a>
      <div className="header   ">

      <div className="absolute w-full h-full   homeImages   bg-gradient-to-t from-black   ">
        {" "}
      </div>
        <Grid container className="pt-12 ">
          <Grid item md={12} className="px-3 text-center ">
            <h2 className=" mt-5 pt-12 text_style">
              Welcome to <br />
              <div className=" w-[335px] h-11 m-auto">
                <h1 className="animate-typing overflow-hidden m-auto whitespace-nowrap border-r-4 border-r-white  text-3xl font-bold " style={{ color: 'crimson' }}>
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
      <Grid container py={10} sx={{ background: '#f1f1f1' }} >
        <Grid item md={4} sm={12} xs={12} className="text-center" px={3}>
          <div className="border py-2 mb-2" style={{ borderRadius: '30px' }}>
            <div style={{ fontSize: '3em', fontWeight: '600' }}>Clients</div>
            <div style={{ fontSize: '2em' }}>500+</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, nesciunt.</div>
          </div>
        </Grid>
        <Grid item md={4} sm={12} xs={12} className="text-center" px={3}>
          <div className="border py-2 mb-2" style={{ borderRadius: '30px' }}>
            <div style={{ fontSize: '3em', fontWeight: '600' }}>Completed Projects</div>
            <div style={{ fontSize: '2em' }}>100+</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, nesciunt.</div>
          </div>
        </Grid>
        <Grid item md={4} sm={12} xs={12} className="text-center" px={3}>
          <div className="border py-2 mb-2" style={{ borderRadius: '30px' }}>
            <div style={{ fontSize: '3em', fontWeight: '600' }}>Clients</div>
            <div style={{ fontSize: '2em' }}>500+</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, nesciunt.</div>
          </div>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item md={6} sm={12} xs={12} className="container_img">
          <img src={img10} className="home_img"/>
          <div className="upper"></div>
          <div className="right"></div>
          <div className="bottom1"></div>
        </Grid>
        <Grid item md={6} sm={12} xs={12} className="pt-28" style={{position:'relative',padding:'8% 5%'}}>
          <div className="container_text_heading">Start Bussines With <br/>Us</div>
          <div className="container_text text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate a, <br/> deleniti perspiciatis doloribus quaerat rem consequatur quam,<br/><br/> eveniet, numquam cumque necessitatibus neque non sapiente voluptatum libero<br/> iure aspernatur laboriosam.</div>
          <button className="btn5" onClick={()=>navigate('/Sensor-TS/contact')}>Contact us</button>
          <img src={Oval1} className="oval1"/>
          <img src={Oval2} className="oval2"/>
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
              <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q= Marg 155, Vikas Marg, Veer Savarkar Block, Block U, Shakarpur Khas, New Delhi, Delhi 110092&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0"></iframe>
            </div>
          </div>
        </Grid>
      </Grid>

    </>
  );
}
