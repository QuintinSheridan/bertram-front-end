import axios from 'axios';

export const login = async (userName: string, password: string) => {
    console.log("posting login")
    return await axios.post('http://localhost:3000/login', {userName, password})
}