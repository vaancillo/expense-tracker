import { useGlobalState } from '../context/GlobalState'

const IncomeExpenses = () => {
  const { transactions } = useGlobalState()

  const amount = transactions.map(transaction => transaction.amount)

  const income = amount.filter(item => item > 0).reduce((acc, item) => (acc += item), 0)

  const expense = amount.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1

  return (
    <>
      <div>
        <h4>Income</h4>
        <p>{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p>{expense}</p>
      </div>
    </>
  )
}
export default IncomeExpenses
