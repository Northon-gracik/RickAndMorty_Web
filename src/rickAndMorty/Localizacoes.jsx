import React, { useState } from 'react'

export default props => {const axios = require('axios');

    const [eps, setEps] = useState([]);


    (async () => {
        const teste = await axios.get(`https://rickandmortyapi.com/api/episode?page=${1}`)
        setEps(teste.data.results)
    })()

    return(
            <div className="s"> 
                <div >
                    {eps.map(ep => {
                        return <div>{ep.name}</div>
                    })}
                    
                </div>
            </div>
)
}