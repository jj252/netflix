import {Modal, ModalHeader,ModalBody} from 'reactstrap';
import {useState} from 'react';
import style from '../app/shared/StudentList.module.css';


const My_Modal = () =>{
    console.log('im in the modal');
    const setTop = '700px';
    const [modalOpen,setModalOpen] = useState(true);
    return(
        <>
            <Modal className={style.modal1} isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false) } style={{background: 'blue'}}>
                    <div style={{background: 'blue', color:'orange',top:{setTop} }}>HELLO WORLD</div>
                </ModalHeader>
                <ModalBody>
                    CURRENT FUNDS:$
                    
                </ModalBody>
            </Modal>
        </>
    )
}

export default My_Modal;