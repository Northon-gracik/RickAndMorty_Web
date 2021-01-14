import React from 'react'
import axios from 'axios'

export default async props => {
    var personagem = await axios.get(props.url)
    window.alert((personagem.data.name))
    return (
        <div>
            <p>{(personagem.data.name)}</p>
        </div>
    )
}