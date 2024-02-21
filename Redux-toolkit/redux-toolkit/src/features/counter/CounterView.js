import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { decrement, increaseByAmount, increment, reset } from './counterSlice';

function CounterView() {

  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  return (
    <div>
    
    <h3>Counter Design Section</h3>
    <h1>Count: {count}</h1>
    <button onClick={() => {dispatch(increment()) }}>Increment</button> <br></br>
    
    <button onClick={() => {dispatch(decrement()) }}>Decrement</button> <br></br>

    <button onClick={() => {dispatch(reset()) }}>Reset</button><br></br>
    
    <button onClick={() => {dispatch(increaseByAmount(5)) }}>Increase By 5</button><br></br>


    


    </div>
  )
}

export default CounterView