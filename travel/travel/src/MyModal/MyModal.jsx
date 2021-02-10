import React from 'react'
import {Modal} from 'react-bootstrap'
import {RaichurPlaces,WarangalPlaces,SecundrabadPlaces} from '../BufferPlaces/BufferPlaces'
import {VirtualTour} from '../VirtualTour/VirtualTour'



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
          <VirtualTour/>
        </Modal.Body>
       
      </Modal>
        );
    }

export function WarangalModal (props) {
      return (
  <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
             Welcome To Warangal 
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Places You Can See In Buffer Time</h4>
            <p>
             <WarangalPlaces/>
            </p>
            <VirtualTour/>
          </Modal.Body>
         
        </Modal>
          );
      }

  export function SecundrabadModal (props) {
        return (
    <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
               Welcome To Secundrabad 
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Places You Can See In Buffer Time</h4>
              <p>
               <SecundrabadPlaces/>
              </p>
              <VirtualTour/>
            </Modal.Body>
          </Modal>
            );
        }