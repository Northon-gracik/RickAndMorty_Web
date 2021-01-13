import React from 'react'

import './Hello.css'

export default props => {
    return (
        <div className="nav">
            <a className="nav-img" href="/"><img src="https://res.cloudinary.com/bambam/image/upload/v1526900336/logo-2.png" width="150" height="60"/></a>
            <div>
                <a className="nav-link" href="/episodios">Episodios</a>
                <a href="/localizacoes">localizacoes</a> 
            </div>
        </div>
    )
    
}