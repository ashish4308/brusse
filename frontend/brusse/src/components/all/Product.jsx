import React from 'react'
import "./all.css"
import { useDispatch } from 'react-redux';
import { add,remove } from '../../store/cartSlice';

function Product({title, price , image,rating, item , cart}) {
  const dispatch = useDispatch();
  const handleAdd = (product) => {
    alert('added to cart')
    dispatch(add(product));
    
};
const handleRemove = (productId) => {
  dispatch(remove(productId));
};
  return (
    <div className='product'>
        <div className='info'>
            <p>{title}</p>
            <p>rs {price}</p>
        </div>
        <div className='ratings'>
          {
            Array(rating)
            .fill()
            .map(()=>{
              return <p key={0}>⭐</p>
            })          
          }
        </div>
        <div className='yo'>
            <img src={image} alt="" />
            {
               !cart ? <button onClick={() => handleAdd(item)}  > Add to cart </button> : <button onClick={() => handleRemove(item.id)}  > remove  </button>
            }
            
        </div>
        
    </div>
  )
}

export default Product