import React,{useState} from 'react'
import {Button,Modal} from 'react-bootstrap'
import {VirtualModalRaichur} from '../MyModal/MyVirtualModal'




export function VirtualTour() {
    const [State,setState] = useState(false)
    return (
        <div>
            <Button variant="primary" onClick={() => setState(true)}>
            Click For Virtual Tour
      </Button>
      <VirtualModalRaichur
        show={State}
        onHide={() => setState(false)}
            />
        </div>
    )
}


