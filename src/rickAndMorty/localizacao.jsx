import React from 'react'

import './Hello.css'
import './episode.css'

export default ({loc}) => {
    return(
        <div className='view2'>
            <p>{loc.name}</p>
            <p>{loc.residents.length}</p>
            <p>{loc.type}</p>
            <a href={`localizacoes/${loc.id}`}>Veja Mais</a>
            <br/>
        </div>
    )
}