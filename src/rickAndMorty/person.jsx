import axios from 'axios'
import { useEffect, useState } from 'react';

import './episode.css'

export default (props) => {
    const [person, setPerson] = useState([]) 

    useEffect(() => {
        axios.get(`${props.url}`)
            .then(resp => setPerson(resp.data))
    },[])
    
        
    return (
        <div className="fotos">
            <img src={person.image} height={150} width={150}  />
            <p>{person.name}</p>
        </div>
        )
}
        
  