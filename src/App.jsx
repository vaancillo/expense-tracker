import { GlobalProvider } from './context/GlobalState'
import Header from './components/Header'
import Balance from './components/Balance'
import TransactionForm from './components/TransactionForm'

function App () {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <TransactionForm />
      <h1>React Context</h1>
    </GlobalProvider>
  )
}
export default App
