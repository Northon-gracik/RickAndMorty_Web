import React from 'react'
import axios from 'axios'

export default async url => {
    var personagem = await axios.get(url)
    window.alert((personagem.data.name))
    return (
        <div>
            <p>{JSON.stringify(await personagem.data.name)}</p>
        </div>
    )
}