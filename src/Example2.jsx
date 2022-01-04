import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Example2 = () => {
  const [counter, setCounter] = useState(0);

  return (
      <div className='example'>
        {console.log(`I just Rendered! ${new Date().toTimeString()}`)}
        {console.log(`counter: ${counter}`)}
        <h1 className='example-title'>Example 2: useState Hook</h1>
        <div className='section'>
          <h4>setState</h4>
          <div className='button-container'>
            <Button onClick={() => setCounter(counter + 1)}>+</Button>
            <Button onClick={() => setCounter(counter - 1)}>-</Button>
          </div>
        </div>
        <div className='section'>
          <h5>Counter: {counter}</h5>
        </div>
      </div>
  )
}

export default Example2;