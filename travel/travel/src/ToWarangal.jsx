import React,{useState} from 'react'
import {Pune,Secundrabad,Warangal} from './Places/Places'
import {Button,CardDeck,Container} from 'react-bootstrap'
import {WarangalModal} from './Itenary/MainItenary'


function ToWarangal() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
            <h1>Onward</h1>  
            <div align='center'>
              <Container fluid ="sm">
              <CardDeck >
                <Pune />
                <Secundrabad/>
                <Warangal/>
                </CardDeck>
                </Container>
            </div>
     <h1>Return</h1>
            <div id="space">
              <Container fluid="sm">
              <CardDeck>
            <Warangal/>
            <Pune />
            </CardDeck>
            </Container>
            </div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Click For TRAVEL Itenary
      </Button>
      <WarangalModal
        show={modalShow}
        onHide={() => setModalShow(false)}
            />
            
        </div>
    )
}

export default ToWarangal
