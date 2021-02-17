import React,{useState} from 'react'
import {Table} from 'react-bootstrap'
import {RaichurModal,WarangalModal,SecundrabadModal} from '../MyModal/MyModal'


export function TirupatiItenary() {
  const [modalShow, setModalShow] = useState(false);
    return (
        <div>
          
<Table striped bordered hover variant="dark" size="sm" responsive>
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
      <td>Pune</td>
      <td>Raichur</td>
      <td>07:15PM</td>
      <td>6:20AM</td>
      <td><a href='#' onClick={()=> setModalShow(true)}>Approx 15hrs</a><RaichurModal
        show={modalShow}
        onHide={() => setModalShow(false)}
            /></td>
    </tr>
    
    <tr>
      <td>Book</td>
      <td>12794</td>
      <td>Raichur</td>
      <td>Tirupati</td>
      <td>10:35PM</td>
      <td>06:15AM</td>
      <td><a href='#'>Destination</a></td>
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
      <td>Tirupati</td>
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

export function VizagItenary() {
  const [modalShow, setModalShow] = useState(false);
  
    return (
        <div>
          
<Table striped bordered hover variant="dark" size="sm" responsive>
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
      <td>11019</td>
      <td>Pune</td>
      <td>Warangal</td>
      <td>7:00PM</td>
      <td>10:18AM</td>
      <td><a href='#' onClick={()=> setModalShow(true)}>Approx 12hrs</a><WarangalModal
        show={modalShow}
        onHide={() => setModalShow(false)}
            /></td>
    </tr>
    
    <tr>
      <td>Book</td>
      <td>12740</td>
      <td>Warangal</td>
      <td>Vishakapatnam</td>
      <td>10:00PM</td>
      <td>7:40AM</td>
      <td><a href='#' >Destination </a></td>
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
      <td>11020</td>
      <td>Visakapatanam</td>
      <td>Pune</td>
      <td>10:15PM</td>
      <td>11:00PM</td>
      <td>Home</td>
    </tr>
  </tbody>
</Table>

        </div>
    )
}

export function WarangalItenary() {
  const [modalShow, setModalShow] = useState(false);
  const [DModal, setDModal] = useState(false);
  
    return (
        <div>

<Table striped bordered hover variant="dark" size="sm" responsive>
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
      <td>11019</td>
      <td>Pune</td>
      <td>Secundrabad</td>
      <td>7:00PM</td>
      <td>7:45AM</td>
      <td><a href='#' onClick={()=> setModalShow(true)}>Approx 12hrs</a><SecundrabadModal
        show={modalShow}
        onHide={() => setModalShow(false)}
            /></td>
    </tr>
    
    <tr>
      <td>Book</td>
      <td>12740</td>
      <td>Secundrabad</td>
      <td>Warangal</td>
      <td>8:30PM</td>
      <td>10:00PM</td>
      <td><a href='#' onClick={()=> setDModal(true)}>Destination</a><WarangalModal
        show={DModal}
        onHide={() => setDModal(false)}
            /></td>
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
      <td>11020</td>
      <td>Warangal</td>
      <td>Pune</td>
      <td>8:00AM</td>
      <td>23:45PM</td>
      <td>Home</td>
    </tr>
  </tbody>
</Table>

        </div>
    )
}

export function VijaywadaItenary() {
  const [modalShow, setModalShow] = useState(false);
  const [DModal, setDModal] = useState(false);
  
    return (
        <div>
                 
<Table striped bordered hover variant="dark" size="sm" responsive>
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
      <td>11019</td>
      <td>Pune</td>
      <td>Secundrabad</td>
      <td>7:00PM</td>
      <td>7:45AM</td>
      <td><a href='#' onClick={()=> setModalShow(true)}>Approx 14hrs</a><SecundrabadModal
        show={modalShow}
        onHide={() => setModalShow(false)}
            /></td>
    </tr>
    
    <tr>
      <td>Book</td>
      <td>12710</td>
      <td>Secundrabad</td>
      <td>Vijaywada</td>
      <td>10:55PM</td>
      <td>4:25AM</td>
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
      <td>11020</td>
      <td>Vijaywada</td>
      <td>Pune</td>
      <td>6:35AM</td>
      <td>12:55AM</td>
      <td>Home</td>
    </tr>
  </tbody>
</Table>

        </div>
    )
}


