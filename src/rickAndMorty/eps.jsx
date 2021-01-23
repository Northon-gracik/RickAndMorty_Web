import React, { useEffect, useState } from 'react'

import './Hello.css'

export default props => {
    const axios = require('axios');

    const [nome, setNome] = useState('')



    useEffect(() => {
        axios.get(`${props.url}`)
            .then(resp => setNome(resp.data))
            .catch(err => alert(err))
    },[])

    return (
        <div className="album">
            <div className='space'>
                <a href={`/episodios/${nome.id}`}> {nome.name} </a>
            </div>
            
        </div>
    )
}