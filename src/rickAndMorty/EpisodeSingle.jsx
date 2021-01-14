import React from 'react'
import axios from './data/axios'
import episodios from './data/episodios'
import Personagem from './Personagem'
import person, {teste} from './data/person.js'

export default props =>{
    // props.match.params.id
    var episodio = episodios.filter(episodio => episodio.id == props.match.params.id)[0]
    window.alert(JSON.stringify(person()))
    return (
        <div>
            <h1>Episodio: {episodio.name}</h1>
            <h2>{episodio.air_date}</h2>
            <p>{person.name}</p>
            {/* <Personagem url={episodio.character[0]}/> */}
            {/* {episodio.character.map(character => (
                <li>
                    <Personagem url={character}/>
                </li>
            ))}  */}
        </div>
        )
    } 