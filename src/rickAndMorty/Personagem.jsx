import React from 'react'
import axios from 'axios'

export default props => {
    var personagem = axios.get(props.url)
    return (
        <div>
            <p>{personagem.name}</p>
        </div>
    )
}