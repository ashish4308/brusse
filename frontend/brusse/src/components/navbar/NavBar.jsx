import React from 'react'
import "./navbar.css"
import {Link} from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useSelector ,useDispatch} from 'react-redux';
import { remove} from '../../store/user'

import { useNavigate } from "react-router-dom";

function NavBar() {
  
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const products = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  
  const x= (e)=>{
    e.preventDefault()
    
    dispatch(remove());
    navigate('/')
    // console.log(user)
  }
  

  return (
    
 
    <header className='header'>

        
        <Link to='/home'>
          <img src="img/logo3.jpg" alt="logo" className='logo'/>
        </Link>
        
        
        <div className='search'>
          <input type="text" className='input' placeholder='Search ...'/>
          <div>
            <SearchIcon className='icon-search' />
          </div>
          
        </div>

        <div className='links'>

        <Link to='/' className='linkss'>
          <div className='option'>
            <span className='upper'>Hello, {user.name}</span>
            
            <span className='lower'> <button className='sign-bt' onClick={x}> signout</button> </span>
          </div>
        </Link>

        <Link to='/all' className='linkss'>
          <div className='option'>
            <span className='upper'>View</span>
            <span className='lower'>All Products</span>
          </div>
        </Link>

        <Link to='/home' className='linkss'>
          <div className='option'>
            <span className='upper'>Your</span>
            <span className='lower'>Prime</span>
          </div>
        </Link>


        <Link to='/cart'>
          <div className='div-basket'>
            <ShoppingBasketIcon className='basket'/>
            <span className='number' >{products.length}</span>
          </div>
        </Link>

        </div> 

     </header> 

   
  )
}

export default NavBar