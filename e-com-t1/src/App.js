import './App.css';
import Item from './Components/Items';
import React from 'react';

function App() {
  const n = 15; 
  const items = Array.from({ length: n }, (_, index) => (
    <Item key={index} />
  ));

  return (
    <div className="Body">
        <div className="NavBar">
          <p className="Title">Name</p>
        </div>
        <div className="Item-types">
          Trending
        </div>
        <div className="Item-container">{items}</div>
    </div>
  );
}

export default App;

