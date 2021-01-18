import axios from 'axios'
import { useState } from 'react';


export default (props) => {
    const [img, setImg] = useState('') 
    axios.get(`${props.url}`)
        .then(resp => setImg(resp.data.image))
    return <div><img src={img} height={150} /></div>;
}
        
  