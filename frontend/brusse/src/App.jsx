
import './App.css';
import {BrowserRouter as Router,Routes,Route}from "react-router-dom";
import Home from './components/home/Home';
import All from './components/all/All';

import Login from './components/Login/Login';
import Signup from './components/signup/Signup';
import Cart from './components/cart/Cart';
import { useSelector } from 'react-redux';

function App() {
  
  // const products = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  // console.log(user.length)

  
  

  return (
    <div>
      
        
      {/* <Router>
        <Routes> */}
          
          {/* <Route path='/' element={<Login/>}/> */}
          

          {user.name ?<Router>  <Routes> <Route path="/home" element={<Home/>} />
            <Route path="/all" element={<All/>}/>
            <Route path='/cart' element={<Cart/>} />
            <Route path='/' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            </Routes>  </Router> 
            : <Router><Routes> <Route path='/signup' element={<Signup/>}/> 
                                                                        <Route path='/' element={<Login/>}  />  
                                                                </Routes></Router>  }

          {/* <Route path="/home" element={<Home/>} />
          <Route path="/all" element={<All/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/cart' element={<Cart/>}/> */}
        {/* </Routes>
      </Router>
   */}
      
    </div>
  );
}

export default App;
