import './App.css';

import Counter from './Counter';
import CounterValue from './CounterValue';
import React, { useContext } from 'react'
import { CountContext } from './Context'

const App = () => {

  const [value, setValue] = useContext(CountContext);

  return (
      <div className="App">
        <h1>Counter App</h1>
        <Counter max={10}/>
        <CounterValue count={+value.count} />
      </div>
  );
}

export default App;
