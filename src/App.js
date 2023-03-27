import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {createElement,useState,useEffect,useRef} from 'react';
import Primary from './utils/Primary';
import { CAMPSITES } from './app/shared/CAMPSITES';
import {Container, Col, Row} from 'reactstrap';
import style from '../src/app/shared/StudentList.module.css';
import {useSpring,animated} from 'react-spring';
import My_Modal from './utils/My_Modal';


function App() {

  const animatedStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config:{ duration:1500 }
  })

  const [choice,setChoice] = useState('youngsheldon');
  const [sendRequest, setSendRequest] = useState(false);
  const [open_modal, setOpenModal] = useState(false);

  

  

  useEffect(()=>{
    if(sendRequest ==='youngsheldon'){
      //send the request
      setChoice('youngsheldon');
      
    }
    else if(sendRequest ==='raymond'){
      setChoice('raymond');
    }
   }, [sendRequest])

  return (
            <>
            <Header />
              <animated.div style={animatedStyle}>
                <Primary prop={choice}/>
              </animated.div>
              <Container>
                <Row>
                    <Col sm='3'>
                        <div onMouseEnter={() => {setSendRequest('youngsheldon')}} className={style.card}>
                            <img src={CAMPSITES[0].image}  />    
                        </div>
                    </Col>
                    <Col sm='3'>
                        <div onMouseEnter={() => setSendRequest('raymond') } className={style.card2}>
                            <img src={CAMPSITES[1].image} />
                        </div>
                    </Col>
                    <Col sm='3'>
                        <div onMouseEnter={() => setSendRequest('youngsheldon')} className={style.card}>
                            <img src={CAMPSITES[0].image}  />    
                        </div>
                    </Col>
                    <Col sm='3'>
                        <div onMouseEnter={() => setSendRequest('raymond')} className={style.card2}>
                            <img src={CAMPSITES[1].image} />
                        </div>
                    </Col>
                </Row>
        </Container>
            <Footer />
            </>
  )
}

export default App;
