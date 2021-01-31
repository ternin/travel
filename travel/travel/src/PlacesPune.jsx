import React from 'react'
import {Carousel} from 'react-bootstrap'

function PlacesPune() {
    const pune = {
        pune : 'Pune',
        imageUrl : 'images/pune.jpg',
        description: 'Pune is a cultural city of india',
        places: ['images/pune/agakhan.jpg','images/pune/chaturshrungi.jpg','images/pune/jejuri.jpg']
    }
    return (
        <div>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {pune.places[0]}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>AgaKhan Palace</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pune.places[1]}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Chaturshrungi Temple</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pune.places[2]}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Jejuri</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default PlacesPune
