import React, { useEffect, useState } from 'react'
import Person from './person';

import './Hello.css'


export default props => {
    const axios = require('axios');

    const [loc, setLoc] = useState([])
    const [residents, setResidents] = useState([])

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/${props.match.params.id}`)
            .then(resp => setLoc(resp.data))

        axios.get(`https://rickandmortyapi.com/api/location/${props.match.params.id}`)
            .then(resp => setResidents(resp.data.residents))
    },[])

    return (
        <div>
            <h1>{loc.name}</h1>
            <div className='album'>
                {residents.map(resi => <Person url={resi}/>)}
            </div>
        </div>
    )
}