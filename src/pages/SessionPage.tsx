import SessionVoteForm from "../components/SessionVoteForm"
import { useLoaderData } from 'react-router-dom';

const SessionPage = () => {
    const sessionData = useLoaderData()
    const {voteStatus, result, id} = sessionData
    console.log('sessionData: ', sessionData)
    console.log("voteStatus: ", voteStatus)

    const renderResult = () => {
        return (
            <div className="flex flex-col container w-1/1 content-center" >
                <h1 className="text-3xl bold m-auto">Result</h1>
                <h2 className="text-2xl bold m-auto">Pay up {result.userName}. ${result.amount}</h2>
            </div>
        )
    }

    const renderVote = () => {
        return (
            <div className="flex flex-col p-10">
                <p className="m-auto text-xl text-red-400">Waiting for all users to cast a vote to determine the payer. </p>
                <div className = "flex flex-col gap-4 content-center m-20 p-10 border-3 border-gray-300 rounded-xl bg-green-200">
                    <h1 className="text-3xl m-auto"><u>Your Vote</u></h1>
                    <h2 className="text-2xl m-auto">Amount: ${voteStatus.amount}</h2>
                    <h2 className="text-2xl m-auto">Vote: {voteStatus.vote}</h2>
                </div>
            </div>
        )
    }

    const renderForm = () => {
        return (
            <div>
                <SessionVoteForm sessionId={sessionData.id}/>
            </div>
        )
    }


    const renderContent = () => {
        if(result?.userId) {
            return renderResult(result)
        } else if(voteStatus?.vote) {
            return renderVote(voteStatus)
        } else {
            return renderForm()
        }
    }


    return (
        <div className="flex flex-col content-center">
            <div className="flex flex-col justify-center p-5 mt-10 bg-gray-200  text-">
                <h1 className="text-4xl m-auto">Session ID: <b>{id}</b></h1>
            </div>
            {renderContent()}
        </div>
    )
}

export default SessionPage