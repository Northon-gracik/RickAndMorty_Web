import React, { useState } from 'react'
import axios from 'axios'

import './episode.css'

import Episode from './Episode';
// import episodios from './data/episodios'

export default (props) => {
    const [episodios, setEpisodios] = useState([]);

    axios.get('https://rickandmortyapi.com/api/episode/?page=1')
        .then(resp => {
            alert(JSON.stringify(resp.data.results))
            setEpisodios(resp.data.results)
        })
    return(
            <div className="s">
                <div >
                    {episodios.map(ep => <Episode key={ep.id} eps={ep}/>)}
                </div>
            </div>
    )
 }