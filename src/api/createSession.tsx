import axios from 'axios';

export const createSession = async (userCount: number) => {
    console.log("creating session")
    return await axios.post('http://localhost:3000/session/create', {userCount})
}