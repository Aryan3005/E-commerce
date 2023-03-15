import React from 'react' 
import './Items.css' 

function Item_view(props) 
{ 
    return( 
    
    <div className="Item_view"> 
        <img src={props.data.thumbnail_url} alt="Not Found" className='Item_Image'></img> 
        <a href={props.data.id}> <p className='Item_name'>{props.data.name}</p> </a>
            <div className='Price_view'> <p className='Item_price'>GBP 100</p> 
                <div className='Content_btns'> 
                <button className='Add_cart_btn hov'>Add to cart</button>
                <button className='Buy_btn hov'>Buy</button> 
                </div> 
            </div>
    </div> 
    )
 } 

export default Item_view