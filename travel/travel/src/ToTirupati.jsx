import React,{useState} from 'react'
//import Tirupati from './Places/Tirupati'
import {Pune,Raichur,Tirupati} from './Places/Places'
//import Raichur from './Places/Raichur'
import {Modal,Button,CardDeck, Container,Row} from 'react-bootstrap'
import TirupatiItenary from './Itenary/TirupatiItenary'

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Travel Itenary (Note# This route requires at least 5 days of holiday)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>How to Travel</h4>
          <p>
           <TirupatiItenary/>
          </p>
        </Modal.Body>
       
      </Modal>
    );
  }

function ToTirupati() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
            <h1>Onward</h1>  
            <div align='center'>
              <Container fluid ="sm">
              <CardDeck >
                <Pune />
                <Raichur/>
                <Tirupati/>
                </CardDeck>
                </Container>
            </div>
     <h1>Return</h1>
            <div id="space">
              <Container fluid="sm">
                
              <CardDeck>
            <Tirupati/>
            <Pune />
            </CardDeck>
            </Container>
            </div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Click For TRAVEL Itenary
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
            />
            
        </div>
    )
}

export default ToTirupati
