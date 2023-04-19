import axios from 'axios';
const url = 'http://localhost:6060/api/v1/'

export const registerUser = async(obj) =>{
    console.log(obj);
    let response  = await axios.post(url + "users", obj)
    console.log(response);
    return response;
}