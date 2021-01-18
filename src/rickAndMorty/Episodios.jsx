import React, { useState } from 'react'
import axios from 'axios'

import './episode.css'

import Episode from './Episode';
// import episodios from './data/episodios'

export default props => {
    const [episodios, setEpisodios] = useState([{}]);

    axios.get(`https://rickandmortyapi.com/api/episode`)
        .then(resp => setEpisodios(resp.data))

    return(
            <div className="s"> 
                <div >
                    {episodios.map(ep => {
                        return <Episode key={ep.id} eps={ep}/>
                    })}
                    
                </div>
            </div>
    )
 }