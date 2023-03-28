import youngsheldon from '../app/assets/vid/youngsheldon.mp4';
import { useRef,useEffect } from 'react';
import style from '../app/shared/StudentList.module.css';



const Video2 = () => {

    
    return (
      <div >
        <video src={youngsheldon} className={style.myVid} autoPlay={"autoplay"} preLoad="auto" loop type="video/mp4" width="20%" >
        <p className={style.videoBanner}>YOUNG SHELDON</p></video>
      </div>

    );
  };
  
  export default Video2;