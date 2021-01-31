import React,{useState} from 'react'
import {Card,Modal} from 'react-bootstrap'
import PlacesPune from './PlacesPune'


function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Places To Visit In Pune
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
           <PlacesPune/>
          </p>
        </Modal.Body>
       
      </Modal>
    );
  }


function Pune() {
    const [modalShow, setModalShow] = useState(false);

    const pune = {
        pune : 'Pune',
        imageUrl : 'https://cdn.pixabay.com/photo/2018/05/28/09/54/pune-3435625__480.jpg',
        description: 'Pune is a cultural city of india  '
    }
    
    const Pune =() => {
        
        return (
            <div  id='move' >  
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pune.imageUrl} variant="primary" onClick={() => setModalShow(true)}/>
            <Card.Body>
            <Card.Title>{pune.pune}</Card.Title>    
            <Card.Text>                
            {pune.description}
                </Card.Text>
                </Card.Body>
                </Card >
            </div>

        )
    }
            
    
    return (
        <>
        <Pune/>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
            />
     
         </>
    )
}

export default Pune
