import React, { FC, createContext } from 'react';
import './App.css';
import { Board } from './components/Board';
import { Person } from './components/Person';


const App: FC = () => {

  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
