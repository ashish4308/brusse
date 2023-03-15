import React from 'react'
import { useNavigate } from 'react-router'
import './products.css'

function Products({id,title,price,rating,image}) {
  const navigate = useNavigate()
  const x=()=>{
    navigate('/all')
  }
  return (
    <div className='products'>
      <div className='info'>

        
        <p>{title}</p>
        <p className='price'>{price}</p>
        <div className='rating'>
          {
            Array(rating)
            .fill()
            .map(()=>{
              return <p>⭐</p>
            })          
          }
        </div>
      </div>
      <div className='yo'>
      <img src={image} alt="" />
      <button onClick={x}>View Products</button></div>
    </div>
  )
}

export default Products