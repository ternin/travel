import React,{useState} from 'react'
import {Pune,Secundrabad,Vijaywada} from './Places/Places'
import {Button,CardDeck,Container} from 'react-bootstrap'
import {VijaywadaModal} from './Itenary/MainItenary'


function ToTirupati() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
            <h1>Onward</h1>  
            <div align='center'>
              <Container fluid ="sm">
              <CardDeck >
                <Pune />
                <Secundrabad/>
                <Vijaywada/>
                </CardDeck>
                </Container>
            </div>
     <h1>Return</h1>
            <div id="space">
              <Container fluid="sm">
                
              <CardDeck>
            <Vijaywada/>
            <Pune />
            </CardDeck>
            </Container>
            </div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Click For TRAVEL Itenary
      </Button>
      <VijaywadaModal
        show={modalShow}
        onHide={() => setModalShow(false)}
            />
            
        </div>
    )
}

export default ToTirupati
