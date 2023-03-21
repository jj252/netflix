import {Card, CardImg, CardImgOverlay, CardTitle, Container, Col, Row} from 'reactstrap';
import youngsheldon from '../app/assets/img/youngsheldon.jpg';
import raymond from '../app/assets/img/loves_raymond.jpg';
import style from '../app/shared/StudentList.module.css';
import {createElement,useState,useEffect,useRef} from 'react';

const Logic = () => {
    const [choice,setChoice] = useState('youngsheldon');
    const [sendRequest, setSendRequest] = useState(false);

    useEffect(()=>{
        if(sendRequest){
            //send the request
            setChoice('raymond');
         }
		
	}, [sendRequest])
    if (choice === 'youngsheldon'){
        return(
            <button onClick={() => setSendRequest(true)}><img src={youngsheldon}></img></button>
        )
    }
    if(choice === 'raymond'){
        return(
            <button onClick={() => setSendRequest(true)}><img src={raymond}></img></button>
        )
    }
       
}

export default Logic;