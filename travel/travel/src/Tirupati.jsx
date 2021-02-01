import React,{useState} from 'react'
import {Card} from 'react-bootstrap'
import Pune from './Pune'
import Raichur from './Raichur'
import {Modal,Button,CardDeck, Container,Row} from 'react-bootstrap'
import TirupatiItenary from './TirupatiItenary'
//import Live from './Live'


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


function Tirupati() {
    const [modalShow, setModalShow] = useState(false);

    const tirupati = {
        tirupati : 'Tirupati',
        imageUrl : 'https://cdn.pixabay.com/photo/2020/08/02/11/20/chennai-to-tirupati-package-5457397__480.jpg',
        description: 'Tirupati is a cultural city of india  '
    }
    

   

   const Tirupati = () => {
    
       return (
        <div id='move'>
        <Card style={{ width: '18rem' }}  size="sm" responsive>
        <Card.Img variant="top" src={tirupati.imageUrl} onClick={()=>window.open("https://www.tripadvisor.in/Attractions-g297587-Activities-Tirupati_Chittoor_District_Andhra_Pradesh.html")}/>
        <Card.Body>
        <Card.Title>{tirupati.tirupati}</Card.Title>
        <Card.Text>
            {tirupati.description}
            </Card.Text>   
            </Card.Body>
            </Card>
        </div>

       )
   }

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

export default Tirupati
