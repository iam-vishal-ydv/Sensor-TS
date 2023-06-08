import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CCTv from '../../assets/CCTV.jpeg'
import AirCurtain from '../../assets/Air-Curtain.jpeg'
import AudioSystem from '../../assets/Audio-System.jpeg'



const HomeSlider = () => {

   const racks=[

     {"id":1,
      data:AudioSystem},
      {"id":2,
      data:CCTv},
      {"id":3,
      data:AirCurtain},
      
  ]
  


  const responsive = {
    superLargeDesktop: {
      
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };


  return (
   <>

     <div className='w-full '>


     <Carousel responsive={responsive}
      >
    {racks.map((item)=>{

       return(
        
        <React.Fragment key={item.id}>
      <div className='h-80 w-full'>  <HomeSliderImage image={item.data}></HomeSliderImage></div>   

        </React.Fragment>
        
        )
    
    })}
    </Carousel>


     </div>
 
   </>
  
  )
}



 const HomeSliderImage=({image})=>{


   
  return(
    
    <>
    
      <div className='w-full' >


        <img  className='w-full h-96 overflow-hidden'  src={image} alt="pic "></img>
      

      </div>
    
    </>
    
    
    )


}




export  default  HomeSlider