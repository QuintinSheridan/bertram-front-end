import { getSessionResult } from "../api/session"
import { getVoteStatus } from "../api/session"

const sessionLoader = async ({params}) => {
    const {id} = params
    console.log('session id: ', id)

    // // try to get the session result, if exists result will be displayed
    const result =  await getSessionResult(id)
    console.log('session result: ', result)


    // // check to see if a user has voted, if they have, then waiting for results will be displayed
    const userId = sessionStorage.getItem('userId')
    console.log('userId: ', userId)

    const vote = await getVoteStatus(userId, id)

    return {
        id,
        result: result.data,
        voteStatus: vote.data
    }
}

export default sessionLoader