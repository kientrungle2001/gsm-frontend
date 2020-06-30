import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Account from './app/code/Smart/Customer/Block/Account';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Account message="Start learning Reactjs" />
        <Account message="ReactJs is easy" type="danger" />
      </header>
    </div>
  );
}

export default App;
