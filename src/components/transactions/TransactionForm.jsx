import { useState } from 'react'
import { useGlobalState } from '../../context/GlobalState'
import { v4 as uuidv4 } from 'uuid'

function TransactionForm () {
  const { addTransaction } = useGlobalState()
  const [description, setDescription] = useState()
  const [amount, setAmount] = useState(0)

  const onSubmit = (e) => {
    e.preventDefault()
    addTransaction({
      id: uuidv4(),
      description,
      amount: +amount
    })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text' placeholder='Enter a description'
          onChange={(e) => setDescription(e.target.value)}
          className='bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full'
        />
        <input
          type='number' step='0.01' placeholder='Enter an amount'
          onChange={(e) => setAmount(e.target.value)}
          className='bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full'
        />
        <button className='bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full'>
          Add a Transaction
        </button>
      </form>
    </div>
  )
}
export default TransactionForm
