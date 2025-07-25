import { useState } from 'react';
import {login} from '../api/login';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';



const LoginForm = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try{
      console.log('userName: ', userName)
      console.log('password: ', password)
      const res = await login(userName, password)
      const userId = res.data.userId
      sessionStorage.setItem('userId', userId);
      navigate('/')
     } catch (err) {
        alert("Invalid user name or password.  Please try again.")
      throw new Error(err)
    }
  }

  return (
    <div className='m-8 flex flex-col'>
      <div className='m-auto'>
        <h1 className='m-4 text-3xl'>Log In</h1>
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

export default LoginForm;
