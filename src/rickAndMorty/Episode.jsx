import React from 'react'

import './episode.css'

export default ({eps}) => {
    return(
        <div className="container">
            <div className="view">
                <h2>{eps.name}</h2>
                <h2>Personagens: {eps.characters.length}</h2> 
                <h2>{eps.episode}</h2>
                <a href={`/episodios/${eps.id}`}><p>Veja Mais</p></a>
            </div>
        </div>
    )
 }

