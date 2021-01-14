import axios from 'axios'
import { useState } from 'react'


export default async props => {
    async function obterPerson() {
        const resp = await axios.get(`https://rickandmortyapi.com/api/character/1`)
        return resp.data
    }
    window.alert( JSON.stringify(await obterPerson()));
    return await obterPerson();
}
        
  