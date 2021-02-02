import React from 'react'
import {Card} from 'react-bootstrap'

const pune = {
    pune : 'Pune',
    imageUrl : 'https://cdn.pixabay.com/photo/2018/05/28/09/54/pune-3435625__480.jpg',
    redirect : 'https://www.treebo.com/blog/places-to-visit-in-pune/',
    about: 'Pune is a sprawling city in the western Indian state of Maharashtra. It was once the base of the Peshwas (prime ministers) of the Maratha Empire  '
}
const raichur = {
    raichur: 'Raichur',
    imageUrl : 'https://cdn.pixabay.com/photo/2013/08/14/16/43/krishna-river-172534__480.jpg',
    redirect: 'https://www.nativeplanet.com/raichur/attractions/',
    about :'Raichur is also called the Town of Two Rivers bounded by the Krishna River on the north and the Tungabhadra River on the south '
}

const tirupati = {
    tirupati : 'Tirupati',
    imageUrl : 'https://cdn.pixabay.com/photo/2020/08/02/11/20/chennai-to-tirupati-package-5457397__480.jpg',
    redirect : 'https://www.tripadvisor.in/Attractions-g297587-Activities-Tirupati_Chittoor_District_Andhra_Pradesh.html',
    about: 'Tirupati is a city in the Indian state of Andhra Pradesh. Its Sri Venkateswara Temple sits atop one of the the 7 peaks of Tirumala Hills   '
} 

const warangal = {
    warangal : 'Warangal',
    imageUrl : 'https://media.istockphoto.com/photos/ramappa-temple-palampet-warangal-telangana-india-picture-id1007840372?k=6&m=1007840372&s=612x612&w=0&h=aiYAUrN98Vdrru4xlI3l8BeN3xJFRjC_DYZXEjA908M=',
    redirect : 'https://traveltriangle.com/blog/places-to-visit-in-warangal/',
    about: 'Warangal is a city in the south Indian state of Telangana. It was the capital of the Kakatiya dynasty from the 12th to 14th centuries   '
} 

const vizag = {
    vizag : 'Vishakapatnam',
    imageUrl : 'https://media.istockphoto.com/photos/vizag-andhra-pradesh-picture-id904650758?k=6&m=904650758&s=612x612&w=0&h=Yf-boHj1YjKhwKbY87O9U5HlnI3ICt2XL3jFDqouOKs=',
    redirect : 'https://www.holidify.com/places/visakhapatnam/sightseeing-and-things-to-do.html',
    about:      "Visakhapatnam's history stretches back to the 6th century BCE, when it was considered a part of the Kalinga Kingdom, and later ruled by the Vengi "
}



export function Pune() {
    
    const Pune =() => {
        
        return (
            <div  id='move' >  
            <Card style={{ width: '18rem' }} size="sm" responsive>
            <Card.Img variant="top" src={pune.imageUrl}  onClick={() => window.open(pune.redirect)}/>
            <Card.Body>
            <Card.Title>{pune.pune}</Card.Title>    
            <Card.Text>                
            {pune.about}
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


export function Raichur() {

    const Raichur =() =>{
        return (
         <div id='move'>
         <Card style={{ width: '18rem' }} size="sm" responsive>
         <Card.Img variant="top" src={raichur.imageUrl} onClick={()=> window.open(raichur.redirect)}/>
         <Card.Body>
         <Card.Title>{raichur.raichur}</Card.Title>
         <Card.Text>
             {raichur.about}
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


export function Tirupati() {

   const Tirupati = () => {
    
       return (
        <div id='move'>
        <Card style={{ width: '18rem' }}  size="sm" responsive>
        <Card.Img variant="top" src={tirupati.imageUrl} onClick={()=>window.open(tirupati.redirect)}/>
        <Card.Body>
        <Card.Title>{tirupati.tirupati}</Card.Title>
        <Card.Text>
            {tirupati.about}
            </Card.Text>   
            </Card.Body>
            </Card>
        </div>

       )
   }

    return (
<div>     
<Tirupati/>     
</div>
        
    )
}


export function Warangal() {

   const Warangal = () => {
    
       return (
        <div id='move'>
        <Card style={{ width: '18rem' }}  size="sm" responsive>
        <Card.Img variant="top" src={warangal.imageUrl} onClick={()=>window.open(warangal.redirect)}/>
        <Card.Body>
        <Card.Title>{warangal.warangal}</Card.Title>
        <Card.Text>
            {warangal.about}
            </Card.Text>   
            </Card.Body>
            </Card>
        </div>

       )
   }

    return (
<div>     
<Warangal/>     
</div>
        
    )
}

export function Vizag() {

    const Vizag = () => {
     
        return (
         <div id='move'>
         <Card style={{ width: '18rem' }}  size="sm" responsive>
         <Card.Img variant="top" src={vizag.imageUrl} onClick={()=>window.open(vizag.redirect)}/>
         <Card.Body>
         <Card.Title>{vizag.vizag}</Card.Title>
         <Card.Text>
             {vizag.about}
             </Card.Text>   
             </Card.Body>
             </Card>
         </div>
 
        )
    }
 
     return (
 <div>     
 <Vizag/>     
 </div>
         
     )
 }



