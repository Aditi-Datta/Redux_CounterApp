import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {decrementCounter, incrementCounter, resetCounter} from '../redux/actions/counterAction';

const Counter = () => {
 
  const count = useSelector(state => state.count );
  const dispatch = useDispatch();

  const handleIncrement = () => {
   dispatch(incrementCounter());
  };
  const handleDecrement = () => {
   dispatch(decrementCounter());
  };
  const handleReset = () => {
   dispatch(resetCounter());
  };

  return (
    <>
    <div>
    
    <h1>Counter APP</h1>

    
    <h3>Count: {count}</h3>

    <button onClick={handleIncrement}>Increment</button> <br></br> <br></br>
    <button onClick={handleReset}>Reset</button> <br></br> <br></br>
    <button onClick={handleDecrement}>Decrement</button> <br></br> <br></br>

    </div>
    </>
  )
}
export default Counter;
