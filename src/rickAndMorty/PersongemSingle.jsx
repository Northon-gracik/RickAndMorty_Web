import React, { useState } from 'react'

import Eps from './eps'

export default props => {
    const axios = require('axios');

    const [personagem, setPersonagem] = useState([])

    axios.get(`https://rickandmortyapi.com/api/character/${props.match.params.id}`)
        .then(resp => setPersonagem(resp.data))

    alert(JSON.stringify(personagem.episode))


    return (
        <div>
            <h1>Personagem: {personagem.name}</h1>
            <img src={personagem.image} />
            <p>{personagem.species} - {personagem.status} - {personagem.gender} {personagem.type}</p>
            {/* {personagem.episode.map(eps => <Eps eps={eps}/>)}  */}
            <p>{personagem.episode[0]}</p>
        </div>
    )
}