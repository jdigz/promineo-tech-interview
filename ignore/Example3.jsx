import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Example3 = () => {
  const [counter, setCounter] = useState(0);

  const handleMinusTwo = () => {
    console.log(`1. handleMinusTwo - counter: ${counter}`)

    setCounter(counter - 1);
    setCounter(counter - 1);

    console.log(`2. handleMinusTwo - counter: ${counter}`)
  };

  const handlePlusTwo = () => {
    console.log(`1. handlePlusTwo - counter: ${counter}`)

    setCounter(counter + 1);
    setCounter(counter + 1);

    console.log(`2. handlePlusTwo - counter: ${counter}`)
  }

  return (
      <div className='example'>
        <h1 className='example-title'>Example 3: State is Async</h1>
        <div className='section'>
          <div className='button-container'>
            <Button onClick={handlePlusTwo}>+</Button>
            <Button onClick={handleMinusTwo}>-</Button>
          </div>
        </div>
        <div className='section'>
          <h5>Counter: {counter}</h5>
        </div>
      </div>
  )
}

export default Example3;