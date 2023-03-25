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
    const [product_variants , set_product_variants] = useState({name:"",price:""})
    const id = props.data.id
    const [Price , SetPrice]= useState(0)

    useEffect(()=>{ 
        const docRef = doc(db,"Print Full Products","p_"+id); 
    getDoc(docRef)
    .then(docSnap => { set_product_data(docSnap.data().result)
        SetPrice(docSnap.data().result.sync_variants[0].retail_price) 
        set_product_variants(prevVariants => {
            return docSnap.data().result.sync_variants.map(variant => {
              return { name: String(variant.name), price: String(variant.retail_price) }
            });
          });
    }) 

    },[id]) 
    
    
    const handleChangePrice = (event) => {
        const selectedValue = event.target.value;
        const selectedVariant = product_variants.find(variant => variant.name === selectedValue);
        SetPrice(selectedVariant.price);
     }

    if (!product_data) 
    { return <div>Loading...</div>; } 

    return(
    <div>
        <NavBarComponent/>
        <div className='indi_p_page'>
        <img
            src={props.data.thumbnail_url}
            alt="loading"
            className='p_Image'>
        </img>
        <div className='indi_p_details'>
        <h1 className='indi_p_price'>€{Price}</h1>
        <h1>{props.data.name}</h1>
        <select className='indin_p_drop_list' name="p_variants" onChange={handleChangePrice}> 
            {product_variants.map(i => <option key={i.name} value={i.name} >{i.name}</option>)} 
        </select>
        </div>
    </div>
    </div>
    )
}

export default Productmainpage;