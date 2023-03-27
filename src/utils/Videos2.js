import youngsheldon from '../app/assets/vid/youngsheldon.mp4';
import { useRef,useEffect } from 'react';



const Video2 = () => {

    
    return (
      <video src={youngsheldon} muted autoPlay={"autoplay"} preLoad="auto" loop type="video/mp4" width="20%" />
       

    );
  };
  
  export default Video2;