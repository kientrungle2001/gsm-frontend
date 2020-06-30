import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Account from './app/code/Smart/Customer/Block/Account';
import Grid from './app/code/Smart/Customer/Block/AccountGrid';

function App() {
  let rows = [

  ];
  let header = [
    {
      name: 'ID'
    },
    {
      name: 'Username'
    },
    {
      name: 'Name'
    }
  ];
  return (
    <div className="App">
      <Account message="Start learning Reactjs" />
      <Account message="ReactJs is easy" type="danger" />
      <Grid rows={rows} header={header} />
    </div>
  );
}

export default App;
