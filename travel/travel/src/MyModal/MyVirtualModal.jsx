import React from 'react'
import {Modal} from 'react-bootstrap'
import {VirtualPlacesRaichur} from '../Places/VirtualPlaces'


export function VirtualModalRaichur (props) {
    return (
<Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Welcome To Raichur Virtual Tour
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4></h4>
          <p>
           <VirtualPlacesRaichur/>
          </p>
          
        </Modal.Body>
       
      </Modal>
        );
    }

    export function VirtualModalWarangal (props) {
      return (
  <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
             Welcome To Warangal Virtual Tour
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4></h4>
            <p>
             <VirtualPlacesRaichur/>
            </p>
            
          </Modal.Body>
         
        </Modal>
          );
      }


      export function VirtualModalSecundrabad (props) {
        return (
    <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
               Welcome To Secundrabad Virtual Tour
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4></h4>
              <p>
               <VirtualPlacesRaichur/>
              </p>
              
            </Modal.Body>
           
          </Modal>
            );
        }