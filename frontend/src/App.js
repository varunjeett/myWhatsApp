import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chatwindow from './Chatwindow';


function App() {
  return (
    <div className="app">
    
      <div className="app_body">
        <Sidebar />
        <Chatwindow />
      </div>

    </div>
  );
}

export default App;
