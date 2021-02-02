import React,{useState} from 'react'
//import Raichur from './Raichur'
import ToVishakapatnam from './ToVishakapatnam'
import ToTirupati from './ToTirupati'


function Router() {
    const[state,setState] = useState('')

   
    
    const handleSelect=(e)=>{
    const selection = e.target.value
    document.title = selection
    switch(selection){
        case 'tirupati':
            return  setState(<ToTirupati/>)
        case 'vishakapatnam':
            return  setState(<ToVishakapatnam/>)

            
    }   
        
}

    
    return (

        <div>
        <div align='center'>
            <select id='spread'>
            <option value='from' placeholder='from'>From </option>
            <option value='Pune'>Pune</option>
            </select>
        </div>
        <p></p>
        <div align='center'>
            <select id='spread' onChange={handleSelect}>
                <option  value='to'>To</option>
                <option  value='tirupati'>Tirupati</option>
                <option value='vishakapatnam'>Vishakapatnam</option>
            </select>
                {state}
         
        </div>
        </div>
    )
}

export default Router
