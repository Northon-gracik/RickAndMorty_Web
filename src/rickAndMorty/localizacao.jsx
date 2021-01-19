import React from 'react'

export default ({loc}) => {
    return(
        <div>
            <p>{loc.name}</p>
            <p>{loc.residents.length}</p>
            <br/>
        </div>
    )
}