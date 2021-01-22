import React from 'react'

import './Hello.css'

export default ({loc}) => {
    return(
        <div className='container'>
            <p>{loc.name}</p>
            <p>{loc.residents.length}</p>
            <p>{loc.type}</p>
            <a href={`localizacoes/${loc.id}`}>Veja Mais</a>
            <br/>
        </div>
    )
}