import React from 'react'
import {Navbar} from 'react-bootstrap'

function Header() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="https://cdn.pixabay.com/photo/2021/01/19/09/42/arctic-tern-5930635__480.jpg"
        width="40"
        height="40"
        className="d-inline-block align-top"
      />{' '}
      Welcome to Tern
    </Navbar.Brand>
  </Navbar>

    </div>
  )
}

export default Header
