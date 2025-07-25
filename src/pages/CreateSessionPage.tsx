import { createSession } from "react-router-dom"
import CreateSessionForm from "../components/CreateSessionForm"



const CreateSessionPage = () => {
    return (
        <div className="container flex flex-col justify-center m-auto text-center">
          <div>
            <CreateSessionForm />
          </div>
        </div>
    )
}

export default CreateSessionPage