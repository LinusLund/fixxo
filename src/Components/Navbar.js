import React from 'react'
import Logo from '../assets/images/logo.svg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className ="__navbar">
        <div className ="container">
            <img src={Logo} alt="Logo"/>

            <div className='navCategories'>                
                <NavLink className='navCategory' to="/">Home</NavLink>
                <NavLink className='navCategory' to='/Categories'>Categories</NavLink>
                <NavLink className='navCategory' to='/Products'>Products</NavLink>
                <NavLink className='navCategory' to='/contacts'>Contacts</NavLink>
            </div>

            <div className ='menu-icons'>
                <NavLink class="menu-link" to="/Search"><i class="fa-regular fa-search"></i></NavLink>
                <NavLink class="menu-link" to="#"><i class="fa-regular fa-repeat"></i></NavLink>
                <NavLink class="menu-link" to="#"><i class="fa-regular fa-heart"></i></NavLink>
                <NavLink class="menu-link" to="#"><i class="fa-regular fa-bag-shopping"></i></NavLink>  
            </div>

        </div>
    </nav>
  )
}

export default Navbar