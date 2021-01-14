import axios from 'axios'

export default props => axios.get(props.url).then((response) => response.data)
