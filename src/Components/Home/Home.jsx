import { Grid } from "@mui/material";
import React from "react";
import ContactFields from "../ContactUs/ContactFields";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Home({setAlert}) {
  return (
    <>
    <a href="https://api.whatsapp.com/send?phone=916398474181&text=Hello Varun" className="whatsapp"><WhatsAppIcon/></a>
      <div className="header">
        <Grid container className="pt-12 bg-white">
          <Grid item md={12} className="px-3 text-center ">
            <h2 className=" mt-5 pt-12 text_style">
              Welcome to <br />
              <div className="w-[380px] h-11 m-auto ">
                <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white  text-center text-4xl font-bold text-orange-500">
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

      <div className="contact_container bg">
        <span className="c_heading">Contact Us For More Details</span>
        <ContactFields setAlert={setAlert} />
      </div>
    </>
  );
}
