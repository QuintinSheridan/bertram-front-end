import { useState } from 'react';
import { createSession } from '../api/createSession';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';



const CreateSessionForm = () => {
  const [userCount, setUserCount] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try{
      console.log('userCount: ', userCount)
      const res = await createSession(parseInt(userCount))
      const sessionId = res.data.id
      navigate(`/session/${sessionId}`)
     } catch (err) {
      alert("User count must be an integer")
      throw new Error(err)
    }
  }

  return (
    <div className='container m-8 flex flex-col'>
      <div className='m-auto'>
        <h1 className='m-4 text-3xl'>Create Session</h1>
      </div>

      <form onSubmit={handleSubmit} method="post">
        <div className='flex flex-col content-center gap-4 w-1/2 m-auto'>
          <input type="userCount" className='border rounded-md p-2' value={userCount} onChange={(e) => setUserCount(e.target.value)} placeholder="User Count" />
          <button type="submit" className='bg-green-300 m-auto p-2 border rounded-md'>Create Session</button>
        </div>
      </form>

      <p className="mt-10 w-1/2 m-auto">Click the "Create Session" link to create a new session.
              Session numbers can then be shared with the group to cast votes and determine who will pay.
          </p>
    </div>
  );
};

export default CreateSessionForm;
