import React, { useEffect, useState } from 'react'

import Personagem from './Personagem'

import './Hello.css'

export default props =>{
    const axios = require('axios');

    const [personagem, setPersonagem] = useState([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character/?page=1')
            .then(resp => setPersonagem(resp.data.results))
    },[])

    return(
        <div className="album"> {personagem.map(person => <Personagem key={person.id} person={person}/>)} </div>
    )
    
}