import React, { useState } from 'react'

import Personagem from './Personagem'

export default props =>{
    const axios = require('axios');

    const [personagem, setPersonagem] = useState([]);

    axios.get('https://rickandmortyapi.com/api/character/?page=1')
        .then(resp => setPersonagem(resp.data.results))

    return(
        <div> {personagem.map(person => <Personagem key={person.id} person={person}/>)} </div>
    )
    
}