import React from 'react'
import Logo from '../assets/images/logo.svg'

const Navbar = () => {
  return (
    <nav className ="__navbar">
        <div className ="container">
            <img src={Logo} alt="Logo"/>

            <div className='navLinks'>                
                <a className='navLink' href="#">Home</a>
                <a className='navLink' href="#">Categories</a>
                <a className='navLink' href="#">Products</a>
                <a className='navLink' href="#">Contacts</a>
            </div>

            <div className ='menu-icons'>
                <a class="menu-link" href="#"><i class="fa-regular fa-search"></i></a>
                <a class="menu-link" href="#"><i class="fa-regular fa-repeat"></i></a>
                <a class="menu-link" href="#"><i class="fa-regular fa-heart"></i></a>
                <a class="menu-link" href="#"><i class="fa-regular fa-bag-shopping"></i></a>  
            </div>

        </div>
    </nav>
  )
}

export default Navbar