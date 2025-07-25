import { useState } from 'react';
import { vote} from '../api/session';
import type { Vote} from '../api/session';
import type { FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';


interface SessionVoteFormProps {
  sessionId: number
}

const SessionVoteForm = ({sessionId}: SessionVoteFormProps) => {
  const [amount, setAmount] = useState('')
  const [voteChoice, setVoteChoice] = useState('')
  const [selectedOption, setSelectedOption] = useState('')
  const navigate = useNavigate()

  console.log("sessionId: ", sessionId)

  const options = [
    { id: 'random', label: 'Random' },
    { id: 'highestOrder', label: 'Highest Order' },
    { id: 'lowestOrder', label: 'Lowest Order' },
    { id: 'squareUp', label: 'Square Up' },
  ];

  const handleSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
    setVoteChoice(e.target.value)
  };

  const buttonDisabled = () => {
    console.log('derp')
    const disabled = (amount && voteChoice) ? false : true
    console.log('disabled: ', disabled)
    return disabled
  }


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    // e.preventDefault()

    try{
      const userId = await parseInt(sessionStorage.getItem('userId') as string)
      console.log("wtf: userId: ", userId)
      const voteBody = {
        userId,
        sessionId,
        amount: parseFloat(amount),
        vote: voteChoice
      }

      console.log("vote submission")
      console.log('amount: ', amount)
      console.log('vote: ', voteChoice)
      console.log('userId: ', userId)
      console.log('sessionId: ', sessionId)
      const res = await vote(voteBody)
      console.log('res: ', res)
      window.location.reload()

     } catch (err) {
      alert("Error: Error casting vote.  Please try again.")
      throw new Error("Error: Error casting vote")
    }
  }

  return (
    <div className='m-8 flex flex-col'>
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