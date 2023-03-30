import React from 'react'
import NavBar from '../navbar/NavBar'
import './home.css'
import Body from './body/Body'
import Footer from '../Footer/Footer'


function Home() {
  return (
    <div>
        <NavBar />
        
        <Body/>
        <Footer />
    </div>
  )
}

export default Home