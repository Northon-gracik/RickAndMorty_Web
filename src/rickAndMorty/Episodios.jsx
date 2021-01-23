import React, { useEffect, useState } from 'react'

import './Hello.css'

import Episode from './Episode';

export default props => {
    const axios = require('axios');

    const [episodios, setEpisodios] = useState([])

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/episode/?page=1')
            .then(resp => setEpisodios(resp.data.results))    
    },[])



    return(
            <div className="album">
                {episodios.map(ep => <Episode key={ep.id} eps={ep}/>)}
            </div>
    )
 }