import React, { useState } from 'react'

export default props => {
    const axios = require('axios');

    const [nome, setNome] = useState([])

    axios.get(`${props.url}`)
        .then(resp => setNome(resp.data.name))

    return (
        <div>
            <p>{nome}</p>
        </div>
    )
}