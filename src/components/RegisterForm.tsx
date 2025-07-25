import { useState } from 'react';
import {register} from '../api/register'
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';



const RegisterForm = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try{
      console.log('userName: ', userName)
      console.log('password: ', password)
      const res = await register(userName, password)
      navigate('/login')
     } catch (err) {
      alert("Invalid user name or password.  Please try again.")
      throw new Error(err)
    }
  }

  return (
    <div className='m-8 flex flex-col'>
      <div className='m-auto'>
        <h1 className='m-4 text-3xl'>Register</h1>
      </div>

      <form onSubmit={handleSubmit} method="post">
        <div className='flex flex-col content-center gap-4 w-1/3 m-auto'>
          <input type="userName" className='border rounded-md p-2' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Username" />
          <input type="password" className='border rounded-md p-2' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />

          <button type="submit" className='bg-green-300 m-auto p-2 border rounded-md'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
