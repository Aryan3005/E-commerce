import React from 'react'
import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore"; 
import './Product_main_page.css'
import NavBarComponent from './NavBar'
import { doc, getDoc } from "firebase/firestore"; 
import { useState , useEffect } from 'react'; 
import {firebaseConfig} from "../Firebaseconfig"

const app=initializeApp(firebaseConfig)
const db=getFirestore(app)

function Productmainpage(props){

    const [product_data , set_product_data] = useState() 
    const id = props.data.id

    useEffect(()=>{ const docRef = doc(db,"Print Full Products","p_"+id); 
    getDoc(docRef).then(docSnap => { set_product_data(docSnap.data().result) }) },[id]) 

    if (!product_data) 
    { return <div>Loading...</div>; } 

    return(
    <div>
    <NavBarComponent/>
    <img src={props.data.thumbnail_url} alt="loading" className='p_Image'></img>
    <h1>{product_data.sync_variants[0].retail_price}</h1>
    </div>
    )
}

export default Productmainpage;