import React from 'react'
import {Modal} from 'react-bootstrap'
import {RaichurPlaces} from '../BufferPlaces/BufferPlaces'


export function RaichurModal (props) {
    return (
<Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Welcome To Raichur 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Places You Can See In Buffer Time</h4>
          <p>
           <RaichurPlaces/>
          </p>
        </Modal.Body>
       
      </Modal>
        );
    }