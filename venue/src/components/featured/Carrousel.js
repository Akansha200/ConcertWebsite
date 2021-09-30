import React from 'react'
import Slider from "react-slick";
import slide_on from '../../resources/images/slide_on.jpg';
import slide_tw from '../../resources/images/slide_tw.jpg';
import slide_thre from '../../resources/images/slide_thre.jpg';

const Carrousel = ()  => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true.valueOf,
        speed: 500
    }

  return (
    <div className="carrousel_wrapper"
    style={{
        height:`${window.innerHeight}px`,
        overflow: 'hidden'
    }}
    >
     <Slider {...settings}>
         <div>
         <div className="carrousel_image"
         style={{
             background:`url(${slide_on})`,
             height:`${window.innerHeight}px`
         }}>
             </div>
             
         </div>
         <div>
         <div className="carrousel_image"
         style={{
             background:`url(${slide_tw})`,
             height:`${window.innerHeight}px`
         }}>
             </div>
         </div>
         <div>
         <div className="carrousel_image"
         style={{
             background:`url(${slide_thre})`,
             height:`${window.innerHeight}px`
         }}>
             </div>
         </div>
         </Slider> 
    </div>
  );
};

export default Carrousel;
