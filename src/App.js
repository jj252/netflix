
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import './App.css';
//import NucampLogo from './app/assets/img/logo.png';
import CampsitesList from './features/campsites/CampsitesList';

import Header from './components/Header';
import Footer from './components/Footer';
import {createElement,useState} from 'react';
import {CreatedElement} from './components/Misc';
import {CreatedElement2} from './components/Misc';
import {New_Button} from './components/Misc';
import {New_Button2} from './components/Misc';
import  My_Form  from './components/My_Form';




const test2 = (name) =>{
  
  return name;
}

const test3 = 'this is a test';

function App() {
  const [test4, setTest4] = useState(0);
  return (
    <div className="App">
      
            <CreatedElement person={{ name: 'Lin Lanying', imageId: '1bX5QH6'}} test={test2('myName')} testx={test3}  />
            <CreatedElement2 props='Jeremy'  />
            <CreatedElement2 props='Janet'  />
            <New_Button buttonName='Jeremys Button'/>
            
            <New_Button2 />
            <Header />
            <CampsitesList />
            <My_Form />
            <Footer />
    </div>
  )
}

export default App;
