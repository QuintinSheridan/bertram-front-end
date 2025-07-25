import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'

const HomePage = () => {
    const [loggedInUserId, setloggedInUserId] = useState('')

    useEffect(() => {
        const userId = sessionStorage.getItem('userId');
        console.log('session user id: ', userId)
        if(userId) {
            setloggedInUserId(userId)
        }
    })


    return (
        <div className="w-full content-center flex flex-col">
            <h1 className="text-4xl m-auto mt-10 pb-5">Coffee Payer</h1>
            <div className="flex flew-col gap-4">
                <div className="flex flex-col m-auto text-2xl text-center text-blue-500">
                    {!loggedInUserId &&
                        <div className="flex flex-col gap-2">
                            <Link to="/register">Register</Link>
                            <Link to="/login">Log In</Link>
                        </div>
                    }
                    {loggedInUserId &&
                        <div className="flex flex-col gap-2">
                            <Link to="/session/create">Create a session</Link>
                            <Link to="/session/join">Join a session</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default HomePage