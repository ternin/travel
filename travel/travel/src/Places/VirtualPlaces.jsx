import React from 'react'
import {Carousel} from 'react-bootstrap'
import Speech from 'react-speech';

export function VirtualPlacesRaichur() {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2020/08/02/11/20/chennai-to-tirupati-package-5457397__480.jpg"
      alt="First slide"
    />
     <Carousel.Caption>
      <h3>Ek Minar ki Masjid</h3>
       <Speech text="Ek Minar ki Masjid is one of the famous mosques in Raichur city of Karnataka. The mosque was built using Persian style of architecture. One of the main attractions of the mosque is its two-storeyed, 20 m high minaret, which can be climbed using a winding staircase. The whole of the town can be viewed from above.
" />
    
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2020/08/02/11/20/chennai-to-tirupati-package-5457397__480.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Ek Minar ki Masjid</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2020/08/02/11/20/chennai-to-tirupati-package-5457397__480.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Tomb of Pir Sailani Shah</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            
        </div>
    )
}


