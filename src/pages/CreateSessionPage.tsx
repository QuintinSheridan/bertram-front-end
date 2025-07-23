import { createSession } from "react-router-dom"
import CreateSessionForm from "../components/CreateSessionForm"



const CreateSessionPage = () => {
    return (
        <div className="container flex flex-col justify-center">
          <div>
            <h1 className="text-3xl">Create Session</h1>
            <p>Click the "Create Session" link to create a new session.
              Session numbers can then be shared with the group to cast votes and determine who will pay.
            </p>
            <CreateSessionForm />
          </div>
        </div>
    )
}

export default CreateSessionPage