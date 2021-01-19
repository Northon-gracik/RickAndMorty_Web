import axios from 'axios'
import {useState} from 'react'

export default () => {
    const [episodios, setEpisodios] = useState([]);

    axios.get('https://rickandmortyapi.com/api/episode/?page=1')
        .then(resp => setEpisodios(resp.data.results))
    
    if(episodios.length() > 0) {return episodios}
}