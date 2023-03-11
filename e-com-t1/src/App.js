import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Item from './Components/Items';
import NavBarComponent from './Components/NavBar'


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="Item_id_main_page" element={<NavBarComponent />} />
        <Route path="*" element={<NavBarComponent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;


function LandingPage()
{
  const n = 15; 
  const items = Array.from({ length: n }, (_, index) => (
    <Item key={index} />
  ));

  return (
    <div className="Body">
      <NavBarComponent/>
        <div className="Item-types">
          Trending
        </div>
        <div className="Item-container">{items}</div>
    </div>
  );

}