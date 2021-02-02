import React from 'react'
import {Table} from 'react-bootstrap'


export function RaichurPlaces() {
    return (
        <div>
<Table striped bordered hover variant="dark" size="sm" responsive>
  <thead>
    <tr>
      <th>Name</th>
      <th>Distance From Station</th>
      </tr>
    </thead>
    <tbody>
    <tr>
      <td>Raichur Fort</td>
      <td>4.2Km</td>
      </tr>
      <tr>
      <td>Ek Minar ki Masjid</td>
      <td>2Km</td>
      </tr>
      <tr>
      <td>Tomb of Pir Sailani Shah</td>
      <td>2Km</td>
      </tr>
      <tr>
      <td>Markandeshwara Temple</td>
      <td>7.5Km</td>
      </tr>
      <tr>
      <td>Jama Masjid</td>
      <td>2.6Km</td>
      </tr>
      <tr>
      <td>Manvi</td>
      <td>47Km</td>
      </tr>
      <tr>
      <td>Kallur</td>
      <td>23Km</td>
      </tr>
      <tr>
      <td>Gabbur</td>
      <td>37Km</td>
      </tr>
      </tbody>
    </Table>
    </div>
    )
}