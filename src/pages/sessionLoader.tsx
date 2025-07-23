import { getSessionResult } from "../api/session"
import { getVoteStatus } from "../api/session"

const sessionLoader = async ({params}) => {
    const {id} = params
    console.log('session id: ', id)

    // // try to get the session result, if exists result will be displayed
    // const result =  getSessionResult(id)
    // console.log('session result: ', result)


    // // check to see if a user has voted, if they have, then waiting for results will be displayed
    // const userId = sessionStorage.getItem('userId')
    // console.log('userId: ', userId)

    // const voteStatus =  result ? true : getVoteStatus(userId, id)
    // console.log('voteStatus: ', voteStatus)


    return {
        id,
        result: false,
        voteStatus: false
    }
}

export default sessionLoader