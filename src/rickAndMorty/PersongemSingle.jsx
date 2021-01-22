import React, { useEffect, useState } from 'react'

import Eps from './eps'

export default props => {
    const axios = require('axios');

    const [personagem, setPersonagem] = useState([])

    const [episodio, setEpisodio] = useState([])

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${props.match.params.id}`)
            .then(resp => setPersonagem(resp.data))

        axios.get(`https://rickandmortyapi.com/api/character/${props.match.params.id}`)
            .then(resp => setEpisodio(resp.data.episode))
    },[])
    var ke = 0
    return (
        <div>
            <h1>Personagem: {personagem.name}</h1>
            <img src={personagem.image} />
            <p>{personagem.species} - {personagem.status} - {personagem.gender} {personagem.type}</p>
            {episodio.map(eps => <Eps key={ke++} eps={eps}/>)}
        </div>
    )
}


