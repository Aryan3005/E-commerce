import React, { useEffect } from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './App.css'; import Item from './Components/Items'; 
import { useState } from 'react'; 
import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore"; 
import { getAnalytics } from "firebase/analytics"; 
import NavBarComponent from './Components/NavBar' 
import { doc, getDoc } from "firebase/firestore"; 

const firebaseConfig = { 
  apiKey: "AIzaSyDFNgbvMK16101ygeQksKe7YTw8Wc78bng", 
  authDomain: "e-com-ti.firebaseapp.com", 
  databaseURL: "https://e-com-ti-default-rtdb.europe-west1.firebasedatabase.app", 
  projectId: "e-com-ti", storageBucket: "e-com-ti.appspot.com", 
  messagingSenderId: "740384603849", 
  appId: "1:740384603849:web:9d471bb5c5fa115a55d718", 
  measurementId: "G-6K2MNFTDHS" 
}; 
  
  const app = initializeApp(firebaseConfig); 
  const analytics = getAnalytics(app); 
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
         <Route path="Item_id_main_page" element={<NavBarComponent />} /> 
         <Route path="*" element={<NavBarComponent />} /> 
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