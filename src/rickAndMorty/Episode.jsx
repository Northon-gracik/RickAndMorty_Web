import React from 'react'

import './episode.css'

export default ({eps}) => {
    return(
        <div className="view">
            <h2>{eps.name}</h2>
            <h2>{eps.characters.length} Personagens</h2> 
            <h2>{eps.episode}</h2>
            <a href={`/episodio/${eps.id}`}><p>Veja Mais</p></a>
        </div>
    )
 }

