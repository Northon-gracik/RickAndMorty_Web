import React from 'react'

import './episode.css'

export default props => {
    return(
        <div className="container">
            <div className="view">
                <h2>{props.eps.name}</h2>
                <h2>Personagens: {props.eps.characters.length}</h2>
                <h2>{props.eps.episode}</h2>

            </div>
        </div>
    )
 }

