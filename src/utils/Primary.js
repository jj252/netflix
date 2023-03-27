import youngsheldon from '../app/assets/img/youngsheldon.jpg';
import raymond from '../app/assets/img/loves_raymond.jpg';
import {useSpring,animated} from 'react-spring';
import My_Modal from './My_Modal';
import Video2 from './Videos2';
import style from '../app/shared/StudentList.module.css';

const Primary = (choice) =>{
    console.log('CHOICE',choice.prop);
    const my_choice = choice.prop;

    const animatedStyle = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config:{ duration:1500 }
      })

    if (my_choice ==='youngsheldon'){
        return(
            <>
            <My_Modal />,
            <animated.div className={style.videoSize} style={animatedStyle}>
                <Video2 />
            </animated.div>
            </>
            )
    }
    if (my_choice === 'raymond'){
        return(
            <animated.div style={animatedStyle}>
                <img src={raymond}></img>
            </animated.div>
            )
    }

    
}

export default Primary