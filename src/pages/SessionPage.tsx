import { useEffect, useState, useRef } from "react";
import SessionVoteForm from "../components/SessionVoteForm"
import { useLoaderData } from 'react-router-dom';
import { getSessionResult } from "../api/session";

const SessionPage = () => {
    const sessionData = useLoaderData()
    const {voteStatus, result, id} = sessionData
    console.log('sessionData: ', sessionData)
    console.log("voteStatus: ", voteStatus)
    const [currentResult, setCurrentResult] = useState(result)
    // const resultRef = useRef(result)

    const renderResult = () => {
        return (
            <div className="flex flex-col w-1/1 content-center mt-10 gap-5" >
                <h1 className="text-3xl bold m-auto"><u>Result</u></h1>
                <h2 className="text-2xl bold m-auto">Pay up {currentResult.userName}. ${currentResult.amount}</h2>
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
                <SessionVoteForm sessionId={parseInt(sessionData.id)}/>
            </div>
        )
    }


    const renderContent = () => {
        if(currentResult?.userId) {
            return renderResult()
        } else if(voteStatus?.vote) {
            return renderVote()
        } else {
            return renderForm()
        }
    }


    useEffect(()=> {
        const interval = setInterval(async () => {
            const fetchedResult = await getSessionResult(id)
            console.log('fetched result: ', fetchedResult)
            console.log('currentResult: ', currentResult)
            if(fetchedResult.data!=currentResult){
                setCurrentResult(fetchedResult.data)
            }
          },5*1000);
          return () => clearInterval(interval);
    })

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