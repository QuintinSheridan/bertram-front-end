import SessionVoteForm from "../components/SessionVoteForm"
import { useLoaderData } from 'react-router-dom';

const SessionPage = () => {
    const sessionData = useLoaderData()
    console.log('sessionData: ', sessionData)

    return (
        <div className="flex flex-col content-center">
            <h1>Session Page!!!</h1>
            <SessionVoteForm sessionId={sessionData.id}/>
        </div>
    )
}

export default SessionPage