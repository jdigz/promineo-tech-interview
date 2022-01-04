import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';
import './App.css';

function App() {
  const [step, setStep] = useState(0);

  const getBody = () => {
    switch (step) {
      case 0:
        return (
          <React.Fragment>
            <h1 className='my-auto lesson-title'>
              Lets Learn React State!
            </h1>
          </React.Fragment>
        )
      case 1:
        return (
          <React.Fragment>
            <h1 className='lesson-title'>
              What is React State?
            </h1>
            <ul className='lesson-list'>
              <li className='lesson-item'>State fundamentally is data belonging to a component</li>
              <li className='lesson-item'>State is private to the component which it is defined</li>
              <li className='lesson-item'>State is managed within the component</li>
              <li className='lesson-item'>Normally updating the state is asynchronous</li>
              <li className='lesson-item'>Important! Updating the state causes the react component to re-render (Call the render method)</li>
              <li className='lesson-item'>Not all components have state. There are stateless components</li>
              <li className='lesson-item'>State exists in Class components or Functional components using the useState hook</li>
            </ul>
          </React.Fragment>
        );
      // case 2:
      //   return (
      //     <React.Fragment>
      //       <h1 className='lesson-title'>
      //         Prop vs State
      //       </h1>
      //       <div className='d-flex mx-5 justify-content-between'>
      //         <div>
      //           <h3 className='lesson-title'>Props</h3>
      //           <ul className='lesson-list d-flex flex-column justify-content-start'>
      //             <li className='lesson-item'>Props are passed into the component from parent component</li>
      //             <li className='lesson-item'>Props are managed in the parent component</li>
      //             <li className='lesson-item'>Props are immutable</li>
      //             <li className='lesson-item'>Accessed via props or this.props (Hook vs Class components resp.)</li>
      //           </ul>
      //         </div>
      //         <div>
      //           <h3 className='lesson-title'>State</h3>
      //           <ul className='lesson-list'>
      //             <li className='lesson-item'>State is defined within the component</li>
      //             <li className='lesson-item'>State is managed within the component</li>
      //             <li className='lesson-item'>State can be and should be changed</li>
      //             <li className='lesson-item'>Accessed via variable defined or this.state (Hook vs Class component resp.)</li>
      //           </ul>
      //         </div>
      //       </div>
      //     </React.Fragment>
      //   );
      case 2:
        return <Example1 />;
      case 3:
        return <Example2 />;
      case 4:
        return <Example3 />;
      default:
        return (<div><h1>End of Lesson</h1><h2>Questions?</h2></div>)
    }
  }
  return (
    <div className="App">
      <div className='lesson'>
        {getBody()}
      </div>
      <div className='lesson-button-container'>
        <Button
          disabled={step === 0}
          className='lesson-button'
          onClick={() => setStep(step - 1)}
        >
          Previous
        </Button>
        <Button
          disabled={step === 5}
          className='lesson-button'
          onClick={() => setStep(step + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default App;
