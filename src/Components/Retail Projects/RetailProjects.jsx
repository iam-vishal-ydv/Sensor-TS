import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import ContactFields from '../ContactUs/ContactFields';
// import img1 from '../../assets/rack1.jpeg'
// import img2 from '../../assets/POS-Billing-System.jpeg'
// import img3 from '../../assets/EAS-Antena.jpeg'
// import img4 from '../../assets/Electronics-surveillance.jpeg'
// import img5 from '../../assets/Air-Curtain.jpeg'
// import img6 from '../../assets/Billing-Software.jpeg'
// import img7 from '../../assets/IT-Infrastrucure.jpeg'
// import img8 from '../../assets/Audio-System.jpeg'
// import img9 from '../../assets/Fire-Alarm-System.jpeg'
// import img10 from '../../assets/Digital-Signage.jpeg'
// import img11 from '../../assets/Biometric.jpeg'
// import img12 from '../../assets/RFID-Inventory.jpeg'
// import img13 from '../../assets/Face-Detection.jpeg'


export default function SingleProject() {
    const { id } = useParams()
    const navigate = useNavigate()
    let data = [
        { name: 'Racks', img: 'img1' },
        { name: 'POS Billing System', img: 'img2' },
        { name: 'EAS antenna', img: 'img3' },
        { name: 'Electronics Surveillance', img: 'img4' },
        { name: 'Air Curtain', img: 'img5' },
        { name: 'Billing Software', img: 'img6' },
        { name: 'IT Infrastructure', img: 'img7' },
        { name: 'Audio System', img: 'img8' },
        { name: 'Fire Alarm System', img: 'img9' },
        { name: 'Digital Signage', img: 'img10' },
        { name: 'Biometric', img: 'img11' },
        { name: 'RFID Inventory and Asset Management', img: 'img12' },
        { name: 'Face Detection and Demography', img: 'img13' },
    ]
    return (
        <>
            <div className=' pt-3 path'><Link className='text-xl text-gray-600' to='/Sensor-TS/'>Home</Link>&nbsp;&nbsp; <ArrowForwardIosIcon sx={{ fontSize: '18px' }} />&nbsp;&nbsp;<Link className='text-xl text-gray-600' to='/Sensor-TS/retail-projects'>Retail Projects</Link> </div>
           {/* <div className='top-container'>
           <Grid container className='top-header'>
                <div className='rheading text-center mx-auto'>Check out some of our awesome<br/> projects with creative ideas.</div>
            </Grid>
           </div> */}
            <Grid container className='img-container' mt={2}>
                {data.map((item, index) => <Grid item md={3} sm={4} xs={12} px={2} pb={5} onClick={()=>navigate(`/Sensor-TS/retail-projects/singleproduct/${item.name}`)}>
                    <div className='img-con'>
                        <div className={item.img} >

                        </div>
                        <div className='inner-img'>
                            <div className='align-text-bottom font-bold text-lg text-white mx-2'>{item.name}</div>
                            <div className='mx-2 text-white mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, nemo.</div>
                        </div>
                    </div>
                </Grid>)}
            </Grid>
            <div className='contact_container'>
                <h1 className='about-product-heading text-center pb-5 text-gray-700'>Contact Us</h1>
                <ContactFields />
            </div>
        </>
    )
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
