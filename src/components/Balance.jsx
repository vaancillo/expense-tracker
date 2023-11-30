import { useGlobalState } from '../context/GlobalState'

function Balance () {
  const { transactions } = useGlobalState()

  const amoutns = transactions.map(transaction => transaction.amount)
  const total = amoutns.reduce((acc, item) => (acc += item), 0)

  return (
    <>
      <div>Balance</div>
      <div>
        <h4>Your Balance</h4>
        <h1>${total}</h1>
      </div>
    </>
  )
}
export default Balance
