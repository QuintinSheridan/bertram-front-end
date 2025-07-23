
import axios from 'axios';

interface Vote {
    userId: number
    sessionId: number
    amount: number
    method: string
}

export const addUser = async (userId: number, sessionId: number) => {
    console.log("adding user to session")
    return await axios.post('http://localhost:3000/session/addUser', {userId, sessionId})
}

export const vote = async ({userId, sessionId, amount, method}: Vote ) => {
    console.log("posting vote")
    return await axios.post('http://localhost:3000/session/vote', {userId, sessionId, amount, method})
}

export const getVoteStatus = async (userId: number, sessionId: number ) => {
    console.log("checking vote status")
    return await axios.post('http://localhost:3000/session/status', {userId, sessionId})
}

export const getSessionResult = async (sessionId: number ) => {
    console.log("checking session result")
    return await axios.post('http://localhost:3000/session/result', {sessionId})
}
