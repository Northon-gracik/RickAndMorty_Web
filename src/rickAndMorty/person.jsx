import axios from 'axios'
import { useState } from 'react';


export default (props, {url}) => {
    const [person, setPerson] = useState([]) 

    axios.get(`${url}`)
        .then(resp => setPerson(resp.data))
        
    return (
        <div>
            <img src={person.image} height={150} />
            <p>{person.name}</p>
        </div>
        )
}
        
  