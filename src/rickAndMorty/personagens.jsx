import React, { useEffect, useState } from 'react'

import Personagem from './Personagem'

import './Hello.css'

export default props =>{
    const axios = require('axios');

    const [personagem, setPersonagem] = useState([]);
    const [info, setInfo] = useState([])

    var key = [];

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/?page=${props.match.params.id}`)
            .then(resp => setPersonagem(resp.data.results))

        axios.get(`https://rickandmortyapi.com/api/character`)
            .then(resp => resp.data.info.pages)
            .then(resp => setInfo(resp))
    },[])

    for(var i = 0; i < info; i++){
        key.push(i + 1)
    }

    return(
        <div style={{display: 'flex', flex: 1 , flexDirection: 'column'}}>
            <div className="album">
                <div className="album"> {personagem.map(person => <Personagem key={person.id} person={person}/>)} </div>
            </div>
            <div className="album">
                {key.map(key => <a href={`/personagens/${key}`} className="space" >{key}</a>)}
            </div>
        </div>

    )
    
}