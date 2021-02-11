import React from 'react'
import {Modal} from 'react-bootstrap'
import {TirupatiItenary,VizagItenary,WarangalItenary,VijaywadaItenary} from './Itenary'

export function TirupatiModal(props) {
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

 export function VizagModal(props) {
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
           <VizagItenary/>
          </p>
        </Modal.Body>
       
      </Modal>
    );
  }


export function WarangalModal(props) {
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
           <WarangalItenary/>
          </p>
        </Modal.Body>
       
      </Modal>
    );
  }


  export function VijaywadaModal(props) {
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
           <VijaywadaItenary/>
          </p>
        </Modal.Body>
       
      </Modal>
    );
  }