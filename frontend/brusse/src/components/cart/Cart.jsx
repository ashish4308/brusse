import React from 'react'
import Product from '../all/Product'
import { useSelector } from 'react-redux';
import NavBar from '../navbar/NavBar';

function Cart() {
    
    const products = useSelector((state) => state.cart);
    const user = useSelector((state) => state.user);
  return (
    <div>
        <NavBar />
        <div className='all'>{user.name}'s Cart</div>
        <div className='wrapper'>
            {
                 products.map((item)=>(
                    // <Products id= {item.id} title={item.title} price={item.price} image={item.image} rating={item.rating.rate} />
                    <div><Product title={item.title} price={item.price} image={item.image} rating={5} item={item} cart={true} /> </div>

                 ))  
            }
            
        </div>
        
    </div>
  )
}

export default Cart