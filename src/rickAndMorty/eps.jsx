import React, { useEffect, useState } from 'react'

export default props => {
    const axios = require('axios');

    const [nome, setNome] = useState('')



    useEffect(() => {
        axios.get(`${props.url}`)
            .then(resp => setNome(resp.data.name))
            .catch(err => alert(err))
    },[])

    return (
        <div>
            <p>{nome}</p>
        </div>
    )
}