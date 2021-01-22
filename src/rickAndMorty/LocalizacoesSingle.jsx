import React, { useEffect, useState } from 'react'

export default props => {
    const axios = require('axios');

    const [loc, setLoc] = useState([])

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/${props.match.params.id}`)
            .then(resp => setLoc(resp.data))
    },[])

    return (
        <div>
            <p>{loc.name}</p>
        </div>
    )
}