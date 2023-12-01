import { VictoryPie, VictoryLabel } from 'victory'
import { useGlobalState } from '../context/GlobalState'

const ExpenseChart = () => {
  const { transactions } = useGlobalState()
  const totalIncome = transactions.filter(transaction => transaction.amount > 0).reduce(
    (acc, transaction) => (acc += transaction.amount), 0
  )
  const totalExpense = transactions.filter(transaction => transaction.amount < 0).reduce(
    (acc, transaction) => (acc += transaction.amount), 0
  ) * -1

  const totalExpensePercentage = Math.round((totalExpense / totalIncome) * 100)

  const totalIncomePercentage = 100 - totalExpensePercentage

  return (
    <div>
      <VictoryPie
        colorScale={['#e74c3c', '#2ecc71']}
        data={[
          { x: 'Expenses', y: totalExpensePercentage },
          { x: 'Incomes', y: totalIncomePercentage }

        ]}
        animate={{
          duration: 2000
        }}
        labels={({ datum }) => `${datum.y}%`}
        labelComponent={<VictoryLabel
          angle={45}
          style={{
            fill: 'white'
          }}
                        />}
      />
    </div>
  )
}
export default ExpenseChart
