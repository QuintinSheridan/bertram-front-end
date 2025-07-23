import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'

const HomePage = () => {
    const [loggedInUserId, setloggedInUserId] = useState('')

    useEffect(() => {
        const userId = sessionStorage.getItem('loggedInUserId');
        console.log('session user id: ', userId)
        if(userId) {
            setloggedInUserId(userId)
        }
    })

    return (
        <div className="container w-1/1 content-center flex flex-col flex-grow">
            <h1 className="text-3xl m-auto pb-5">Home</h1>
            <div className="flex flew-col gap-4">
                <div className="flex flex-col m-auto text-center text-blue-500">
                    {!loggedInUserId &&
                        <div className="flex flex-col">
                            <Link to="/register">Register</Link>
                            <Link to="/login">Log In</Link>
                        </div>
                    }
                    {loggedInUserId &&
                        <div className="flex flex-col">
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