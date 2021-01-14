import axios from 'axios'


export default async props => {
    var per = (async function obterPerson() {
        const resp = await axios.get(`https://rickandmortyapi.com/api/character/1`)
        return resp.data
    })()   
    window.alert('') 
    setTimeout(() => {
        
    }, 1000);
    return <div><p>{per}</p></div>;
}
        
  