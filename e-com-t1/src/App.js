import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Item from './Components/Items';
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
  projectId: "e-com-ti",
  storageBucket: "e-com-ti.appspot.com",
  messagingSenderId: "740384603849",
  appId: "1:740384603849:web:9d471bb5c5fa115a55d718",
  measurementId: "G-6K2MNFTDHS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);



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

//eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6IjVlODk1ZWJmMGYyMzZkYTVlMmMzNDk5ZjQyYTlkYTcyY2ZhNWJjZDk2YmQ0MDU2MTFjMWEyN2UzY2VkZDZjMTk3MjY1YmFiNmY1YzU2NjZkIiwiaWF0IjoxNjc4NDg5NDQ2LjU1NjUxNCwibmJmIjoxNjc4NDg5NDQ2LjU1NjUxNywiZXhwIjoxNzEwMTExODQ2LjU1MjQ5LCJzdWIiOiIxMDQwNDU3NCIsInNjb3BlcyI6WyJzaG9wcy5tYW5hZ2UiLCJzaG9wcy5yZWFkIiwiY2F0YWxvZy5yZWFkIiwib3JkZXJzLnJlYWQiLCJvcmRlcnMud3JpdGUiLCJwcm9kdWN0cy5yZWFkIiwicHJvZHVjdHMud3JpdGUiLCJ3ZWJob29rcy5yZWFkIiwid2ViaG9va3Mud3JpdGUiLCJ1cGxvYWRzLnJlYWQiLCJ1cGxvYWRzLndyaXRlIiwicHJpbnRfcHJvdmlkZXJzLnJlYWQiXX0.AACc1ujbzOgNkXYy5ykKDyjEeOeyRImi-EF1C3TnCGIuqJcAPzL7d-rduS6vxw_QbqaHeK7xpyGtNCFGmz8
//https://api.printify.com/v1/shops/7798398/products.json

function LandingPage()
{
  const n = 15; 
  const items = Array.from({ length: n }, (_, index) => (
    <Item key={index} />
  ));

  const [data, editdata] = useState()

  const docRef = doc(db,"Products","8SRuRjYdyCeTkoUqRgQn");
  const docSnap =  getDoc(docRef).then(docSnap => {
    editdata(docSnap.data())
    console.log(data.glases)
  })

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