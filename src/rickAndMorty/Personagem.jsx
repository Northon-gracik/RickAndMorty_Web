import React from 'react'
import axios from 'axios'

export default  async props => {
    var personagem = await axios.get(props.url)
    return (
        <div>
            <p>teste</p>
        </div>
    )
}