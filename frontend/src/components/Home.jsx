import Test from './Test';
import { useCounterStore } from '../store/CounterStore';

function Home() {
  let newCounter = useCounterStore(state => state.newCounter)
  let newCounterSet = useCounterStore(state => state.newCounterSet)

  return (
    <div>
      <p>Counter sharing across components::</p>
      <h1>Counter: {newCounter}</h1>
      <button onClick={newCounterSet} className='bg-black text-white p-2 m-1'>Increment</button>
      <Test/>
    </div>
  )
}

export default Home