import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Example5 = () => {
  const [show, setShow] = useState(false);
  return (
    <div className='example'>
      <h1 className='example-title'>Example 3: Follow Along!</h1>
        <Modal show={show}>
          <Modal.Header>
            <Modal.Title>
              Modal Title Here!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Test
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setShow(false)}>OK</Button>
            <Button onClick={() => false} variant='danger'>Close</Button>
          </Modal.Footer>
        </Modal>
        <Button onClick={() => setShow(true)}>Click Me!</Button>
    </div>
  );
}

export default Example5
