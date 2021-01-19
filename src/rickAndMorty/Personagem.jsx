import React from 'react'
import axios from 'axios'

export default ({person}) => {
    
    return (
        <div>
            <img src={person.image}/>
            <p>{person.name}</p>
            <p>{person.location.name}</p>
            <p> {person.species}</p>
            <br/>
        </div>
    )
}