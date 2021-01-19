import React from 'react'
import axios from 'axios'

export default ({person}) => {
    
    return (
        <div>
            <p>{person.name}</p>
            <p>{person.location}</p>
        </div>
    )
}