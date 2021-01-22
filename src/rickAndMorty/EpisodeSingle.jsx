import React, { useEffect, useState } from 'react'
import Person from './person'

import eps from './data/episodios'

import './Hello.css'

export default props => {
    // props.match.params.id
    const axios = require('axios');

    const [episodio, setEpisodio] = useState([])

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/episode/${props.match.params.id}`)
            .then(resp => setEpisodio(resp.data))

        axios.get(`https://rickandmortyapi.com/api/episode/${props.match.params.id}`)
            .then(resp => setCharacters(resp.data.characters))
    },[])




    return (
        <div>
            <h1>Episodio: {episodio.name}</h1>
            <h2>{episodio.air_date}</h2>
            <div className='album'>
                {characters.map(character => <Person url={character}/>)}
            </div> {/* album */}
        </div>
        )
    }