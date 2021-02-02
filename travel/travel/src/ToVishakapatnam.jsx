import React from 'react'
import {Pune,Warangal} from './Places/Places'
import {Modal,Button,CardDeck, Container,Row} from 'react-bootstrap'


function ToVishakapatnam() {
    return (
        <div>
           <h1>Onward</h1>  
           <div align='center'>
              <Container fluid ="sm">
              <CardDeck >
                <Pune/>
                <Warangal/>
                </CardDeck>
                </Container>
            </div>
        </div>
    )
}

export default ToVishakapatnam
