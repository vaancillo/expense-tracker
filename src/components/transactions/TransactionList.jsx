import { useGlobalState } from '../../context/GlobalState'
import TransactionItem from './TransactionItem'

function TransactionList () {
  const { transactions } = useGlobalState()
  return (
    <>
      <h1 className='text-slate-300 font-bold block w-full'>Transactions</h1>
      <ul>
        {
        transactions.map((transaction) => (
          <TransactionItem transaction={transaction} key={transaction.id} />
        ))
      }
      </ul>
    </>
  )
}
export default TransactionList
