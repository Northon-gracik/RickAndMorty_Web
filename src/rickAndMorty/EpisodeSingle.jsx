import React from 'react'
import axios from './data/axios'
import episodios from './data/episodios'
import Person from './data/person.js'

import './Hello.css'

export default props =>{
    // props.match.params.id
    var episodio = episodios.filter(episodio => episodio.id == props.match.params.id)[0]
    
    
    return (
        <div>
            <h1>Episodio: {episodio.name}</h1>
            <h2>{episodio.air_date}</h2>
            <div className='album'>
                {episodio.character.map(character => (
                    <ul>
                        <Person url={character}/>
                    </ul>
                ))} 
            </div>
        </div>
        )
    } 