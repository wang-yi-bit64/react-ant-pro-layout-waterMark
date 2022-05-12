import * as React from 'react';
import './style.css';
import Test from './demos/test';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <div style={{ backgroundColor: 'red', height: '20px' }}></div>
      <Test />
      <div style={{ backgroundColor: 'red', height: '20px' }}></div>
    </div>
  );
}
