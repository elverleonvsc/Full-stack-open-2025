import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'
const getAll = ()=> {
    const request = axios.get(baseUrl)
    return request
    .then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}


const deletePhone = id =>  axios.delete(`${baseUrl}/${id}`)
.then(response => console.log(`Deleted post with ID ${id}`)
)

const updatePhoneNumber = (id,newObject) => {
    const update = axios.put(`${baseUrl}/${id}`, newObject)
    return update.then(response => response.data)
}
export default {getAll, create,deletePhone,updatePhoneNumber}

