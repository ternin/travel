import React,{useState} from 'react'
import {Pune,Raichur,Tirupati} from './Places/Places'
import {Button,CardDeck,Container} from 'react-bootstrap'
import {TirupatiModal} from './Itenary/MainItenary'


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
      <TirupatiModal
        show={modalShow}
        onHide={() => setModalShow(false)}
            />
            
        </div>
    )
}

export default ToTirupati
