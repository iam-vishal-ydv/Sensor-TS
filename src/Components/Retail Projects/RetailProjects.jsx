import React, { useEffect } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link, useNavigate, useParams } from 'react-router-dom';
// import { Grid } from '@mui/material';
import ContactFields from '../ContactUs/ContactFields';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';




export default function SingleProject({ data }) {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])

    return (
        <>
            <a href="https://api.whatsapp.com/send?phone=916398474181&text=Hello Varun" className="whatsapp"><WhatsAppIcon id='whatsapp' /></a>
            <div className=' pt-3 path'><Link className='text-xl text-gray-600' to='/Sensor-TS/'>Home</Link>&nbsp;&nbsp; <ArrowForwardIosIcon sx={{ fontSize: '18px' }} />&nbsp;&nbsp;<Link className='text-xl text-gray-600' to='/Sensor-TS/retail-projects'>Retail Projects</Link> </div>







            <div className='  flex  flex-wrap  gap-9 w-[90%]  mx-auto  mt-7     justify-center '>

                {data.map((item) => {



                    return <React.Fragment key={item.id}>


                        <di ><Cards image={item.poster} name={item.name} infoAbout={item.infoAbout} id={item.id}></Cards> </di>
                    </React.Fragment>

                })}




            </div>



            <div className='contact_container'>
                <h1 className='about-product-heading text-center pb-5 text-gray-700'>Contact Us</h1>
                <ContactFields />
            </div>
        </>
    )
}



export const Cards = ({ image, name, infoAbout }) => {

   const navigate = useNavigate()
    return <>


        <div data-aos="fade-up"
            data-aos-anchor-placement="center-bottom" class="max-w-sm bg-white  lg:w-72  shadow-md   cursor-pointer     border border-gray-200 rounded-md ">
            <a href="#">
                <img class="rounded-t-lg  h-60 w-full " src={image} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-xl font-bold text-black ">{name}</h5>
                </a>
                <p className="mb-3 font-normal  text-base  ">{infoAbout}</p>
                {/* <a href="#" className="inline-flex items-center capitalize   hover:transform hover:transition hover:duration-500 hover:scale-110  px-3 py-2 text-sm font-medium text-center text-white bg-red-700   rounded-lg hover:bg-red-500 ">
    Read more..
 
  </a> */}

                <span  class="relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group" onClick={()=>navigate(`/Sensor-TS/retail-projects/singleproduct/${name}`)}>
                    <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-red-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                    <span class="relative"> Read More..</span>
                </span>
            </div>

        </div>




    </>

}







// import { Grid } from '@mui/material'
// import React from 'react'
// import ContactFields from '../ContactUs/ContactFields'
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import { Link, useNavigate } from 'react-router-dom';

// export default function RetailProjects() {
//     const navigate = useNavigate()
//   return (
//     <>
//     <div className=' pt-3 path'><Link className='text-xl text-gray-600' to='/Sensor-TS/'>Home</Link>&nbsp;&nbsp; <ArrowForwardIosIcon sx={{fontSize:'18px'}}/>&nbsp;&nbsp; <span className='text-xl text-gray-700'>Retail Projects</span></div>
//     <div className='ps-11 text-center pt-3' style={{fontSize:'30px',fontWeight:'600'}}>Click to See</div>
//     <Grid container py={5} px={2} className='retail-container'>
//         <Grid item md={4} sm={4} xs={12} pb={2} className='box-container'>
//          <div className='project_box' onClick={()=>navigate('/Sensor-TS/retail-projects/singleproject/Racks')}>Racks</div>
//         </Grid>
//         <Grid item md={4} sm={4} xs={12} pb={2} className='box-container'>
//         <div className='project_box' onClick={()=>navigate('/Sensor-TS/retail-projects/singleproject/POS')}>POS</div>
//         </Grid>
//         <Grid item md={4} sm={4} xs={12} pb={2} className='box-container'>
//         <div className='project_box' onClick={()=>navigate('/Sensor-TS/retail-projects/singleproject/EAS')}>EAS</div>
//         </Grid>
//     </Grid>
//     <div className='contact_container'>
//     <ContactFields/>
//     </div>
//     </>
//   )
// }
