import React, { useEffect, useState } from 'react'

import Localizacao from './localizacao'

import './Hello.css'

export default props => {
    const axios = require('axios');

    const [eps, setEps] = useState([]);
    const [info, setInfo] = useState([])

    var key = [];
 
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location?page=${props.match.params.id}`)
            .then(resp => setEps(resp.data.results))

        axios.get(`https://rickandmortyapi.com/api/location`)
            .then(resp => resp.data.info.pages)
            .then(resp => setInfo(resp))
    },[])
    
    for(var i = 0; i < info; i++){
        key.push(i + 1)
    }
    
    return(
            <div style={{display: 'flex', flex: 1 , flexDirection: 'column'}}> 
                <div  className="album">
                    {eps.map(ep => <Localizacao key={ep.id} loc={ep}/>)}
                </div>
                <div className="album">
                    {key.map(key => <a href={`/localizacoes/${key}`} className="space" >{key}</a>)}
                </div>
            </div>
)
}