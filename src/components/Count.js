import { useState } from 'react';
const Counter = () => {
    const [count, setCount] = useState(0);
  
    const Increment = () => {
      setCount(count + 1);
    };
  
    const Decrement = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };
  
    const Reset = () => {
      setCount(0);
    };
  
    return (
      <div>
        <span> <h2>Counter: {count}</h2> </span>
        <button onClick={Increment}>+</button>
        <button onClick={Reset}>0</button>
        <button onClick={Decrement}>-</button>
      </div>
    );
  };
export default Counter;   