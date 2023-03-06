import axios from 'axios'

export const getPersons = async(state) => {
    const request = await axios.get('http://localhost:8002/listar')
    state(request.data)
}