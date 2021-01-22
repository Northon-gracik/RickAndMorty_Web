import React from 'react'

export default ({loc}) => {
    return(
        <div>
            <p>{loc.name}</p>
            <p>{loc.residents.length}</p>
            <p>{loc.type}</p>
            <a href={`localizacoes/${loc.id}`}>Veja Mais</a>
            <br/>
        </div>
    )
}