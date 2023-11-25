import { useGlobalState } from '../context/GlobalState'

function Balance () {
  const data = useGlobalState()
  return (
    <>
      <div>Balance</div>
      <div>
        <h4>Your Balance</h4>
        {JSON.stringify(data)}
      </div>
    </>
  )
}
export default Balance
