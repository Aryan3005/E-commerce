import React from 'react'
import './Items.css'
import i from './Images/T-image.png'


console.log(i); // /logo.84287d09.png

function Item_view(props) {

    return(
        <div className="Item_view">

            <img src={i} alt="Not Found" className='Item_Image'></img>
            <a href="Item_id_main_page">
            <p className='Item_name'>Letter And Bear Graphic Tee</p>
            </a>
            <div className='Price_view'>
                <p className='Item_price'>GBP 10</p>
                <div className='Content_btns'>
                    <button className='Add_cart_btn hov'>Add to cart</button>
                    <button className='Buy_btn hov'>Buy</button>
                </div>
            </div>

        </div>
    )

}

export default Item_view