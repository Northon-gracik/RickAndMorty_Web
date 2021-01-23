import React, { useEffect, useState } from 'react'

import Localizacao from './localizacao'

import './Hello.css'

export default props => {
    const axios = require('axios');

    const [eps, setEps] = useState([]);
 
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location?page=${1}`)
            .then(resp => setEps(resp.data.results))
    },[])
    
    
    return(
            <div> 
                <div  className="album">
                    {eps.map(ep => <Localizacao key={ep.id} loc={ep}/>)}
                </div>
            </div>
)
}