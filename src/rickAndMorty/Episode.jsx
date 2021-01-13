import React from 'react'

import './episode.css'

export default props => {
    return(
        <div className="container">
            <div className="view">
                <h2>{props.eps.name}</h2>
                <h2>Personagens: {props.eps.character.length}</h2> 
                <h2>{props.eps.episode}</h2>
                <button className="">Ver Mais</button>
            </div>
        </div>
    )
 }

