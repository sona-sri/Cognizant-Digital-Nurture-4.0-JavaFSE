import React from 'react';
import Counter from '../../eventexamplesapp/src/Components/Counter';
import CurrencyConvertor from '../../eventexamplesapp/src/Components/CurrencyConvertor';

function App() {
  return (
    <div className="App">
      <h1>Event Examples App</h1>
      <Counter />
      <hr />
      <CurrencyConvertor />
    </div>
  );
}

export default App;