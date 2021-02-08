import React,{useState} from 'react'
import {Pune,Warangal,Vizag} from './Places/Places'
import {Button,CardDeck,Container} from 'react-bootstrap'
import {VizagModal} from './Itenary/MainItenary'


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
