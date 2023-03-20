
import { useDispatch } from 'react-redux';
import { fetchCampsites } from './features/campsites/campsitesSlice';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import './App.css';
//import NucampLogo from './app/assets/img/logo.png';
import CampsitesList from './features/campsites/CampsitesList';
import { Container, Row, Col, Button } from 'reactstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import {createElement,useState,useEffect,useRef} from 'react';
import {CreatedElement} from './components/Misc';
import {CreatedElement2} from './components/Misc';
import {New_Button} from './components/Misc';
import {New_Button2} from './components/Misc';
import  My_Form  from './components/My_Form';
import CampsiteDirectoryPage from './pages/CampsitesDirectoryPage';
import {Routes, Route} from  'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';


const test2 = (name) =>{
  
  return name;
}

const basicBtn = {
  border:'solid 2px purple',
  color: 'blue',
  backgroundColor:'yellow'
}

const test3 = 'this is a test';

const peaceOnEarth = () =>{
  console.log("peace on earth")
}

function App() {
  const [name, setName] = useState('Jeremy');
  const divEl = useRef(null);

  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 2 ** 24).toString(16)}`;

  const test1 = (mytest) => {
    console.log(divEl.current);
    divEl.current.style.backgroundColor = getRandomColor();
  }

  const noSetName = () =>{
    console.log('I never set a name');
  }
  let x = 0;
  useEffect(() => {
    setTimeout(peaceOnEarth,2000);
  },[name]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampsites());
}, [dispatch]);

  return (
   

    <div ref={divEl} onClick={() => test1(true)} className="App">
            <Button onclick={() => setName('Marcus')} style={{color:'blue', backgroundColor:'red'}} >This is my New button</Button>
            <Button onClick={() => x+=2} style={basicBtn} >This is my New button</Button>
            <Button className='primary' color="info" onClick={() => setName('Jade') }>This is my New button</Button>
            <Button className='primary' color="info" >This is my New button</Button>
            <CreatedElement person={{ name: {name}, imageId: '1bX5QH6'}} test={test2({name})} testx={name}  />
            <CreatedElement2 props={name}  />
            <CreatedElement2 props={name}  />
            <New_Button buttonName='Jeremys Button'/>
         
            
            <New_Button2 />
            <Header />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='contact' element={<ContactPage />} />
              <Route path='directory' element={<CampsiteDirectoryPage />} />
              <Route path='about' element={<AboutPage />} />
              <Route 
                path='directory/:campsiteId'
                element={<CampsiteDetailPage />}
              />
            </Routes>
            <My_Form />
            <Footer />
            </div> 
    
  )
}

export default App;
