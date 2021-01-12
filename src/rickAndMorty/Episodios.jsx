import React, { useState } from 'react'

import './episode.css'

import Episode from './Episode';

export default props => {
    const axios = require('axios');

    const [eps, setEps] = useState([]);

    const [page, setPage] = useState(1);

    (async () => {
        const teste = await axios.get(`https://rickandmortyapi.com/api/episode?page=${page}`)
        setEps(teste.data.results)
    })()

    return(
            <div className="s"> 
                <div >
                    {eps.map(ep => {
                        return <Episode key={ep.id} eps={ep}/>
                    })}
                    
                </div>
            </div>
    )
 }