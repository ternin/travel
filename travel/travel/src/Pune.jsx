import React,{useState} from 'react'
import {Card,Modal} from 'react-bootstrap'



function Pune() {

    const pune = {
        pune : 'Pune',
        imageUrl : 'https://cdn.pixabay.com/photo/2018/05/28/09/54/pune-3435625__480.jpg',
        description: 'Pune is a cultural city of india  '
    }
    
    const Pune =() => {
        
        return (
            <div  id='move' >  
            <Card style={{ width: '18rem' }} size="sm" responsive>
            <Card.Img variant="top" src={pune.imageUrl}  onClick={() => window.open("https://www.treebo.com/blog/places-to-visit-in-pune/")}/>
            <Card.Body>
            <Card.Title>{pune.pune}</Card.Title>    
            <Card.Text>                
            {pune.description}
                </Card.Text>
                </Card.Body>
                </Card >
            </div>

        )
    }
            
    
    return (
        <>
        <Pune/>
         </>
    )
}

export default Pune
