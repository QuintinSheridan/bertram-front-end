import { useState } from 'react';
import { createSession } from '../api/createSession';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';



const JoinSessionForm = () => {
  const [sessionId, setSessionId] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try{
      navigate(`/session/${sessionId}`)
     } catch (err) {
      alert("Error: Invalid session id")
      throw new Error(err)
    }
  }

  return (
    <div className='m-8 flex flex-col'>
      <div className='m-auto'>
        <h1 className='m-4 text-3xl'>
            Join Session
        </h1>
      </div>

      <form onSubmit={handleSubmit} method="post">
        <div className='flex flex-col content-center gap-4 w-1/2 m-auto'>
          <input type="sessionId" className='border rounded-md p-2' value={sessionId} onChange={(e) => setSessionId(e.target.value)} placeholder="Session ID" />
          <button type="submit" className='bg-green-300 m-auto p-2 border rounded-md'>Join Session</button>
          <p>
            Enter a session id for a session greated by your party to join your group and decide who will pay for coffee!
          </p>
        </div>
      </form>
    </div>
  );
};

export default JoinSessionForm;
