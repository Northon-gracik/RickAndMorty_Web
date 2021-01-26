import React, { useEffect, useState } from 'react'

import './Hello.css'

import Episode from './Episode';

export default props => {
    const axios = require('axios');

    const [episodios, setEpisodios] = useState([])
    const [info, setInfo] = useState([])

    var key = [];
    

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/episode?page=${props.match.params.id}`)
            .then(resp => setEpisodios(resp.data.results))    

        axios.get(`https://rickandmortyapi.com/api/episode`)
            .then(resp => resp.data.info.pages)
            .then(resp => setInfo(resp))

        
    },[])
    
    for(var i = 0; i < info; i++){
            key.push(i + 1)
        }


    return(
        <div style={{display: 'flex', flex: 1 , flexDirection: 'column'}}>
            <div className="album">
                {episodios.map(ep => <Episode key={ep.id} eps={ep}/>)}
            </div>
            <div className="album">
                {key.map(key => <a href={`/episodios/${key}`} className="space" >{key}</a>)}
            </div>
        </div>
            
    )
 }