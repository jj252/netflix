
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
import Logic from './utils/Logic';




function App() {
  

  return (
            <>
            <Header />
              <Logic />
        
            <Footer />
            </>
            
  )
}

export default App;
