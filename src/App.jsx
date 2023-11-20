import { GlobalProvider } from './context/GlobalState'
import Header from './components/Header'

function App () {
  return (
    <GlobalProvider>
      <Header />
      <h1>React Context</h1>
    </GlobalProvider>
  )
}
export default App
