import React, { useEffect, useState } from 'react'
import NavBar from '../navbar/NavBar'
// import Products from '../home/body/products/Products'
import './all.css'
import axios from 'axios'
import Product from './Product'
import Footer from '../Footer/Footer'

function All() {
    const [items, setItems] = useState([])
    

    useEffect(()=>{
        async function fetch(){
            await axios.get("https://fakestoreapi.com/products")
            .then((r)=>{
                console.log(r.data)
            setItems(
                r.data
            )
        
        })

        }

        fetch()
        
    })

        
        

  return (
    <>
        <NavBar />

        {/* <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71CPAiQkRpL._SX3000_.jpg" alt="" className='body-img' /> */}
        <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81D-sLpLnaL._SX3000_.jpg" alt="" className='body-img'/>


        <div className='all'>All Products</div>
        
        {/* <div className='products-div'>
            <Products 
                id='12345'
                title="{items[0].title}"
                price="{items[0].price}"
                rating = {5}
                // image={items[0].image}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZRIvBcUOQorAMuTwp36Xa0U95_PbDEgUQVQ&usqp=CAU"
            />
            <Products 
                id='12345'
                title='my work sample frfmnkfdnvfd dfsfs'
                price='500 rs'
                rating = {5}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZRIvBcUOQorAMuTwp36Xa0U95_PbDEgUQVQ&usqp=CAU"
            />


        </div> */}

        <div className='wrapper'>
            {
                 items.map((item)=>(
                    // <Products id= {item.id} title={item.title} price={item.price} image={item.image} rating={item.rating.rate} />
                    <div><Product key={item.id} title={item.title} price={item.price} image={item.image} rating={5} item={item} cart={false}/></div>

                 ))  
            }
        </div>
        <Footer />
    </>
  )
}

export default All