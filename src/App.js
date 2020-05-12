import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Thread from './components/Thread';

function App() {
  return (
    <div>
        <Sidebar />
        <Thread />
        <Main />
    </div>
  );
}

export default App;
