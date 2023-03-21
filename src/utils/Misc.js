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
// <Container>
//   <Row>
//       <Col sm='2'>
//           <div onClick={selectChoice('youngsheldon')} className={style.card}>
//               <img width='5%' src={CAMPSITES[0].image}  />
              
//           </div>
//       </Col>
//       <Col sm='2'>
//           <Card  className={style.card}>
//               <CardImg width='5%' src={CAMPSITES[1].image}  />
//               <CardImgOverlay>
                  
//               </CardImgOverlay>
//           </Card>
//       </Col>
//   </Row>
 
  