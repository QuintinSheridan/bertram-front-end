import { useState } from 'react';
import { vote } from '../api/session';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';




const SessionVoteForm = ({sessionId}: number) => {
  const [amount, setAmount] = useState('')
  const [method, setMethod] = useState('')
  const [selectedOption, setSelectedOption] = useState(null)

  console.log("sessionId: ", sessionId)

  const options = [
    { id: 'random', label: 'Random' },
    { id: 'highestOrder', label: 'Highest Order' },
    { id: 'lowestOrder', label: 'Lowest Order' },
    { id: 'squareUp', label: 'Square Up' },
  ];

  const handleSelection = (e) => {
    setSelectedOption(e.target.value);
    setMethod(e.target.value)
  };

  const buttonDisabled = () => {
    console.log('derp')
    const disabled = (amount && method) ? false : true
    console.log('disabled: ', disabled)
    return disabled
  }

//   TODO implement modals to notify a user that inputs need to be changed

     const userId = localStorage.getItem('userId')
//   const sessionId =

//   const vote = {
//     userId,
//     sessionId,
//     amount,
//     method
//   }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try{
      console.log("vote submission")
      console.log('amount: ', amount)
      console.log('method: ', method)
      console.log('userId: ', userId)
      console.log('sessionId: ', sessionId)

     } catch (err) {
      alert("Error: Invalid session id")
      throw new Error(err)
    }
  }

  return (
    <div className='container m-8 flex flex-col'>
      <div className='m-auto'>
        <h1 className='m-4 text-3xl'>
            Enter Amount
        </h1>
      </div>

      <form onSubmit={handleSubmit} method="post">
        <div className='flex flex-col content-center gap-4 w-1/2 m-auto'>
          <p>
            Enter your order information and make your selection for who should pay for the drink.
          </p>
          <input type="amount" className='border rounded-md p-2' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
          <h2>Select One Payment Method:</h2>
            {options.map((option) => (
                <div key={option.id}>
                <input
                    type="radio"
                    id={option.id}
                    name="singleSelection" // All radio buttons in a group share the same 'name'
                    value={option.id}
                    checked={selectedOption === option.id}
                    onChange={handleSelection}
                />
                <label htmlFor={option.id}>{option.label}</label>
            </div>))}

          <button type="submit" disabled={buttonDisabled()} className={'m-auto p-2 border rounded-md bg-green-300'}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SessionVoteForm;