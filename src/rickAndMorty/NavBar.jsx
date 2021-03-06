import React from 'react'

import './Hello.css'

export default props => {
    return (
        <div className="nav">
            <a className="nav-img" href="/"><img src="https://res.cloudinary.com/bambam/image/upload/v1526900336/logo-2.png" width="150" /></a>
            <div>
                <a className="nav-link" href="/episodios/1">Episodios</a>
                <a className="nav-link" href="/localizacoes/1">localizacoes</a>
                <a className="nav-link" href="/personagens/1">personagens</a>
            </div>
        </div>
    )
    
}