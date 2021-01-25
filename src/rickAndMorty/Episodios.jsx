import React, { useEffect, useState } from 'react'

import './Hello.css'

import Episode from './Episode';

export default props => {
    const axios = require('axios');

    const [episodios, setEpisodios] = useState([])
    const [info, setInfo] = useState([])
    
    var pag = props.match.params.id || 1
    

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/episode?page=${props.match.params.id}`)
            .then(resp => setEpisodios(resp.data.results))    

        axios.get(`https://rickandmortyapi.com/api/episode`)
            .then(resp => resp.data.info.pages)
            .then(resp => alert(resp))
        
        
    },[])
    
    


    return(
            <div className="album">
                {episodios.map(ep => <Episode key={ep.id} eps={ep}/>)}
            </div>
    )
 }