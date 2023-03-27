import youngsheldon from '../app/assets/img/youngsheldon.jpg';
import raymond from '../app/assets/img/loves_raymond.jpg';
import {useSpring,animated} from 'react-spring';
import My_Modal from './My_Modal';

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
            <animated.div style={animatedStyle}>
                <img src={youngsheldon}></img>
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