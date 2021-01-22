import React from 'react'
import axios from 'axios'

import './Hello.css'

export default ({person}) => {
    
    return (
        <div className='space'>
            <img src={person.image}/>
            <p>{person.name}</p>
            <p>{person.location.name}</p>
            <p> {person.species}</p>
            <a href={`/personagens/${person.id}`}>Veja mais</a>
            <br/>
        </div>
    )
}