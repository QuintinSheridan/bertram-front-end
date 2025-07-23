
import axios from 'axios';

export const register = async (userName: string, password: string) => {
    console.log("posting registration")
    return await axios.post('http://localhost:3000/register', {userName, password})
}