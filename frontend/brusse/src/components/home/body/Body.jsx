import React from 'react'
import './body.css'
import Products from './products/Products'

import {useSelector } from 'react-redux';


function Body() {
    const {cart} = useSelector(state =>state.cart )
    console.log(cart)
    

  return (
    <div className='body'>
        
        
        <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" className='body-img' />

        {/* <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71CPAiQkRpL._SX3000_.jpg" alt="" className='body-img' /> */}


        <div className='all'>Best-Sellers</div>
        <div className='products-div'>
            <Products
                id='0'
                title='Famous poster used by ashish rawat'
                price='500 rs'
                rating = {2}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjt-XSgUwcz5DtdK1BJUfYg9MztZtKMb8D5w&usqp=CAU"
            />
            <Products 
                id='1'
                title='Noise Pulse Go Buzz Smart Watch Bluetooth Calling with 1.69" Display, 550 NITS, 150+ Cloud Watch Face, SPo2, Heart Rate Tracking, 100 Sports Mode with Auto Detection, Longer Battery (Jet Black)'
                price='1499 rs'
                rating = {4}
                image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61akt30bJsL._AC_UL480_FMwebp_QL65_.jpg"
            />


        </div>




        <div className='products-div'>
            <Products 
                id='12'
                title='Lenovo IdeaPad Slim 3 Intel Celeron N4020 4th Gen 15.6" (39.62cm) HD Thin & Light Laptop'
                price='25800 rs'
                rating = {5}
                image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61Dw5Z8LzJL._SX569_.jpg"
            />
            <Products 
                id='123'
                title='Lenovo Ideapad slim 2'
                price='20000 rs'
                rating = {3}
                image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/S/aplus-media/vc/815c8e0a-19aa-4cea-8054-cc5791e8405b.__CR0,0,300,300_PT0_SX300_V1___.jpg"
            />
            <Products 
                id='1234'
                title='Book by sage of six path'
                price='200 rs'
                rating = {3}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZRIvBcUOQorAMuTwp36Xa0U95_PbDEgUQVQ&usqp=CAU"
            />


        </div>


        
        <div className='products-div'>
            <Products 
                id='12345'
                title='Nicki Minaj Poster'
                price='50000 rs'
                rating = {5}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRucTOCD3_gt0UAklKbI88QFTPupRP5aysLYg&usqp=CAU"
            />
        </div>
        
        

    </div>
  )
}

export default Body