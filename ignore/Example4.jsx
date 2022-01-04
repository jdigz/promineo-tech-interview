import React from 'react';
import { Button, Form } from 'react-bootstrap'

const Example4 = props => {
  return (
    <div>
      <h1 className="example-title">Example 4: Follow Along!</h1>
     <ol>
        <li className='my-5'>
          <h4 className='ms-4'>Change My Color!</h4>
        </li>
        <li>
          <div className='d-flex ms-4'>
            <Button>Hide me!</Button>
            <Form.Check label='Hide' onChange={null}/>
          </div>
        </li>
      </ol>
    </div>
  )
}
export default Example4
