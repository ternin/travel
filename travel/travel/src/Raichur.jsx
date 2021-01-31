import React from 'react'
import {Card,Modal} from 'react-bootstrap'
//import PlacesRaichur from './PlacesRaichur' 

function Raichur() {

    const raichur = {
        raichur: 'Raichur',
        description :'Raichur is a cultural city of india excellent place to visit',
        imageUrl : 'https://cdn.pixabay.com/photo/2013/08/14/16/43/krishna-river-172534__480.jpg'
    }

    const Raichur =() =>{
        return (
         <div id='move'>
         <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src={raichur.imageUrl} />
         <Card.Body>
         <Card.Title>{raichur.raichur}</Card.Title>
         <Card.Text>
             {raichur.description}
             </Card.Text>
             </Card.Body>
             </Card>
         </div>
 
        )
    }
 

    return (
        <div>
            <Raichur/>
        </div>
    )
}

export default Raichur
