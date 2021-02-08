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
      <td><a href='#' onClick={()=> window.open("https://www.goibibo.com/hotels/find-hotels-in-Tirupati/18688368793823515/18688368793823515/%7B%22d%22:%7B%22k%22:10%7D%7D/?sec=dom&utm_source=google&utm_medium=cpc&utm_campaign=Hotel_Destination_Tirupati&utm_content=Book%20Hotels%20Tirupati&utm_keyword=Hotel%20booking%20tirupati&campaign=Hotel_Destination_Tirupati&gclid=Cj0KCQiA6t6ABhDMARIsAONIYyzbovayJFt5cw8Ow3eZv1cB9iOlUltmiSZuNwSxFYZQnrRPwbrn68oaAhmgEALw_wcB")}>Destination Book Hotel</a></td>
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
      <td><a href='#' onClick={()=> window.open("https://www.goibibo.com/hotels/find-hotels-in-Tirupati/18688368793823515/18688368793823515/%7B%22d%22:%7B%22k%22:10%7D%7D/?sec=dom&utm_source=google&utm_medium=cpc&utm_campaign=Hotel_Destination_Tirupati&utm_content=Book%20Hotels%20Tirupati&utm_keyword=Hotel%20booking%20tirupati&campaign=Hotel_Destination_Tirupati&gclid=Cj0KCQiA6t6ABhDMARIsAONIYyzbovayJFt5cw8Ow3eZv1cB9iOlUltmiSZuNwSxFYZQnrRPwbrn68oaAhmgEALw_wcB")}>Destination Book Hotel</a></td>
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
      <td><a href='#' onClick={()=> window.open("https://www.goibibo.com/hotels/find-hotels-in-Tirupati/18688368793823515/18688368793823515/%7B%22d%22:%7B%22k%22:10%7D%7D/?sec=dom&utm_source=google&utm_medium=cpc&utm_campaign=Hotel_Destination_Tirupati&utm_content=Book%20Hotels%20Tirupati&utm_keyword=Hotel%20booking%20tirupati&campaign=Hotel_Destination_Tirupati&gclid=Cj0KCQiA6t6ABhDMARIsAONIYyzbovayJFt5cw8Ow3eZv1cB9iOlUltmiSZuNwSxFYZQnrRPwbrn68oaAhmgEALw_wcB")}>Destination Book Hotel</a></td>
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


