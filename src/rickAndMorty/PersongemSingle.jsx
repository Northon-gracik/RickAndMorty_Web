import React, { useState } from 'react'

export default props => {
    const axios = require('axios');

    const [personagem, setPersonagem] = useState([])

    axios.get(`https://rickandmortyapi.com/api/character/${props.match.params.id}`)
        .then(resp => setPersonagem(resp.data))


    return (
        <div>
            <h1>Personagem: {personagem.name}</h1>
            <p>{personagem.species} - {personagem.status} - {personagem.gender} {personagem.type}</p>
            
        </div>
    )
}