import React, { useState } from 'react'

import Localizacao from './localizacao'

export default props => {const axios = require('axios');

    const [eps, setEps] = useState([]);
 
    axios.get(`https://rickandmortyapi.com/api/location?page=${1}`)
    .then(resp => setEps(resp.data.results))
    
    return(
            <div className="s"> 
                <div >
                    {eps.map(ep => <Localizacao key={ep.id} loc={ep}/>)}
                    
                </div>
            </div>
)
}