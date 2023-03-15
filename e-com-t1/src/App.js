import React, { useEffect } from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './App.css'; import Item from './Components/Items'; 
import { useState } from 'react'; 
import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore"; 
//import { getAnalytics } from "firebase/analytics"; 
import NavBarComponent from './Components/NavBar';
import Productmainpage from './Components/Product_main_page';
import { doc, getDoc } from "firebase/firestore"; 
import {firebaseConfig} from './Firebaseconfig'


const app = initializeApp(firebaseConfig); 
//const analytics = getAnalytics(app); 
const db = getFirestore(app); 

function App() { 

    const [firestore_data , set_firestor_data] = useState() 

    useEffect(()=>{ const docRef = doc(db,"Print Full Products","Product_list"); 
    getDoc(docRef).then(docSnap => { set_firestor_data(docSnap.data().result) }) },[]) 

    if (!firestore_data) 
    { return <div>Loading...</div>; } 

    return( 
    <BrowserRouter> 
      <Routes>
         <Route index element={<LandingPage data={firestore_data}/>} /> 
         {firestore_data.map(dta => <Route key={dta.id} path={`/${dta.id}`} element={<Productmainpage data={dta}/>}/>)}
         <Route path="*" element={<div>ERROR page not found</div>} /> 
      </Routes>
    </BrowserRouter> ) 
}

export default App; 


function LandingPage(props) 
{ 
  return ( 
  <div className="Body"> <NavBarComponent/> 
  <div className="Item-types"> Trending </div> 
  <div className="Item-container">
    {props.data.map(indi_product => <Item key={indi_product.id} data={indi_product}/>)}
  </div> 
  </div> ); 
}