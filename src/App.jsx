
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { increment , decrement , reset , incrementByAmount} from './features/counter/counterSlice';
import { useState } from 'react';

function App() {
  const [amount , setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick(){
    dispatch(increment());
  }

  function handledecrementClick(){
    dispatch(decrement());
  }
  function handleResetClick(){
    dispatch(reset());
  }

  function handleIncrementByAmount(){
    dispatch(incrementByAmount(amount));  // payload is our amount
  }
  

  return (
    <div className='container'>
      <button onClick={handleIncrementClick}> + </button>
      <p>Count :{count} </p>
      <button onClick={handledecrementClick}> - </button>
      <br/>
      <br/>
      <button onClick={handleResetClick}> Reset</button>
      <br/>
      <br/>
      <input 
      type='Number'
      value={amount}
      placeholder='Enter amount'
      onChange={(e) => setAmount(e.target.value)}
      />
      <br/>
      
      <br/>
      <button onClick={handleIncrementByAmount}> Increment By Click</button>
    </div>
  )
}

export default App
