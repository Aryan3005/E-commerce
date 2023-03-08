import React from 'react'
import './Items.css'
import i from './Images/T-image.png'


console.log(i); // /logo.84287d09.png

function Item_view(props) {

    return(
        <div className="Item_view">
        <img src={i} alt="Not Found"></img>
        <p className='Item_name'>Letter And Bear Graphic Tee</p>
        </div>
    )

}

export default Item_view