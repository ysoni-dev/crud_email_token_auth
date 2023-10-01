import React from "react";
import Popper from 'popper.js';
import Form from './Form.jsx'
import { Button,Modal } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";


function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{border:'none'}}/>
       
        <Modal.Body>
          <Form/>
        </Modal.Body>
        
      </Modal>
    );
  }
  
  const  ModalForm=()=> {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="outline-warning" size="lg" onClick={() => setModalShow(true)}>
          Enroll Now
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  
  export default ModalForm