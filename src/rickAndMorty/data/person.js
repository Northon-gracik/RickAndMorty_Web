import axios from 'axios'
import { useState } from 'react'


export default props => {
    axios.get(`https://rickandmortyapi.com/api/character/1`)
        .then(resp => resp)
}
        
  