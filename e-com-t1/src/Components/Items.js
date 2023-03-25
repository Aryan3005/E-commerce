import React from 'react'
import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore"; 
import { doc, getDoc } from "firebase/firestore"; 
import { useState , useEffect } from 'react'; 
import {firebaseConfig} from "../Firebaseconfig"
import './Items.css' 
import "./Cart"

const app=initializeApp(firebaseConfig)
const db=getFirestore(app)

function Item_view(props) 
{     
    const [product_price , set_product_price] = useState() 
    const id = props.data.id

    useEffect(()=>{ const docRef = doc(db,"Print Full Products","p_"+id); 
    getDoc(docRef).then(docSnap => { set_product_price(docSnap.data().result.sync_variants[0].retail_price) }) },[id]) 

    if (!product_price) 
    { return <div>Loading...</div>; } 

    return( 
    <div className="Item_view"> 
        <img src={props.data.thumbnail_url} alt="Not Found" className='Item_Image'></img> 

        <a href={props.data.id}> 
            <p className='Item_name'>{props.data.name}</p> 
        </a>
        
            <div className='Price_view'> <p className='Item_price'>GBP {product_price}</p> 
                <div className='Content_btns'> 
                <button className='Add_cart_btn hov' onClick={props.add}>Add to cart</button>
                <button className='Buy_btn hov'>Buy</button> 
                </div> 
            </div>
    </div> 
    )
 } 

export default Item_view