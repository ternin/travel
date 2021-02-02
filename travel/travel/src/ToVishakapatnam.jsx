import React,{useState} from 'react'
import {Pune,Warangal,Vizag} from './Places/Places'
import {Modal,Button,CardDeck, Container,Row} from 'react-bootstrap'
import {VizagItenary} from './Itenary/Itenary'

function VizagModal(props) {
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
           <VizagItenary/>
          </p>
        </Modal.Body>
       
      </Modal>
    );
  }


function ToVishakapatnam() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
           <h1>Onward</h1>  
           <div align='center'>
              <Container fluid ="sm">
              <CardDeck >
                <Pune/>
                <Warangal/>
                <Vizag/>
                </CardDeck>
                </Container>
            </div>
            <h1>Return</h1>
            <div id="space">
              <Container fluid="sm">
                
              <CardDeck>
            <Vizag/>
            <Pune />
            </CardDeck>
            </Container>
            </div>
            <Button variant="primary" onClick={() => setModalShow(true)}>
        Click For TRAVEL Itenary
      </Button>
      <VizagModal
        show={modalShow}
        onHide={() => setModalShow(false)}
            />
        </div>
    )
}

export default ToVishakapatnam
