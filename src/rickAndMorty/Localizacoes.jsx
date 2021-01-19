import React, { useState } from 'react'

export default props => {const axios = require('axios');

    const [eps, setEps] = useState([]);


    (async () => {
        const teste = await axios.get(`https://rickandmortyapi.com/api/location?page=${1}`)
        setEps(teste.data.results)
    })()

    return(
            <div className="s"> 
                <div >
                    {eps.map(ep => <div>{ep.name}</div>)}
                    
                </div>
            </div>
)
}