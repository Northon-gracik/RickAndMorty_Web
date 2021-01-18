import axios from 'axios'
import { useState } from 'react';


export default (props) => {
    const [person, setPerson] = useState([]) 
    axios.get(`${props.url}`)
        .then(resp => setPerson(resp.data))
    return (
        <div>
            <img src={person.image} height={150} />
            <p>{JSON.stringify(person.name)}</p>
        </div>
        )
}
        
  