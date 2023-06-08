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
  ]




  return (
   <>

     <div className='w-full h-6'>



    {racks.map((item)=>{

       return(
        
        <React.Fragment key={item.id}>
      <div className='h-20 w-full'>   <HomeSliderImage image={item.data}></HomeSliderImage></div>   
        </React.Fragment>
        
        )
    
    })}


     </div>
 
   </>
  
  )
}



 const HomeSliderImage=({image})=>{


   
  return(
    
    <>
    
      <div className='w-full h-28 ' >


        <img src={image} alt="pic"></img>

      </div>
    
    </>
    
    
    )


}




export  default  HomeSlider