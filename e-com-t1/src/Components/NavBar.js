import React from "react";
import './NavBar.css'
import Cart_image from './Images/shopping-cart.svg'
import User_image from './Images/user.svg'


function NavBarComponent(){

    return(
        <div className="NavBar">
          <a href="/">
          <p className="Title">ModaMall</p>
          </a>
          <div className='NavBar_Icons'>
          <img src={Cart_image} alt="not found" className='Cart_image'/>
          <img src={User_image} alt="not found" className='User_image'/>
          </div>
        </div>

    )
}

export default NavBarComponent