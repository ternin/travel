import React,{useState} from 'react'
import {Table,Modal} from 'react-bootstrap'
import Pune from './Pune'

const BookCab =()=>{
    return (
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      
      <th>Name</th>
      <th>Phone</th>
      </tr>
    </thead>
    <tbody>
    <tr>
      <td>Salim</td>
      <td>9098909890</td>
      </tr>
      </tbody>
    </Table>

    )
}
function MyVerticallyCenteredModal(props) {
    return (
<Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Raichur Travel
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Book Cab</h4>
          <p>
           <BookCab/>
          </p>
        </Modal.Body>
       
      </Modal>
        );
    }

function TirupatiItenary() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      
      <th>Onward</th>
      <th>TrainNo</th>
      <th>From</th>
      <th>To</th>
      <th>Start</th>
      <th>Arrival</th>
      <th>Buffer Time</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Book</td>
      <td>16381</td>
      <td>pune</td>
      <td>Raichur</td>
      <td>07:15PM</td>
      <td>6:20AM</td>
      <td><a href='#'  onClick={()=> setModalShow(true)}>15hrs Click To Book Cab</a><MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
            /></td>
    </tr>
    
    <tr>
      <td>Book</td>
      <td>12794</td>
      <td>raichur</td>
      <td>10:35PM</td>
      <td>Tirupati</td>
      <td>06:15AM</td>
      <td>Destination</td>
    </tr>
    <tr>
      <th>Return</th>
      <th>TrainNo</th>
      <th>From</th>
      <th>To</th>
      <th>Start</th>
      <th>Arrival</th>
    </tr>
    <tr>
      <td>Book</td>
      <td>11074</td>
      <td>tirupati</td>
      <td>Pune</td>
      <td>03:00PM</td>
      <td>9:30AM</td>
      <td>Home</td>
    </tr>
  </tbody>
</Table>
        </div>
    )
}

export default TirupatiItenary
