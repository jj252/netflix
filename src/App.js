
import { useDispatch } from 'react-redux';
import { fetchCampsites } from './features/campsites/campsitesSlice';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {createElement,useState,useEffect,useRef} from 'react';
import Primary from './utils/Primary';
import CampsiteCard from './utils/CampsiteCard';
import { CAMPSITES } from './app/shared/CAMPSITES';
import {Card, CardImg, CardImgOverlay, CardTitle, Container, Col, Row} from 'reactstrap';
import style from '../src/app/shared/StudentList.module.css';




function App() {
  const [choice,setChoice] = useState('youngsheldon');
  const [sendRequest, setSendRequest] = useState(false);

  

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
              <Primary prop={choice}/>
              
              <Container>
                <Row>
                    <Col sm='3'>
                        <div onClick={() => setSendRequest('youngsheldon')} className={style.card}>
                            <img src={CAMPSITES[0].image}  />    
                        </div>
                    </Col>
                    <Col sm='1'>
                        <div onClick={() => setSendRequest('raymond')} className={style.card2}>
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
