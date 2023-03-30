import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../../store/user';
import './login.css'

function Login() {
    const [email,setEmail] = useState('')
    const [password , setPassword] = useState('')
    // const [user,setUser] = useState([])
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch()



    
    
    const sub = (e)=>{
        e.preventDefault()
            const config={
                headers: {
                    "Content-Type":"application/json"
                }
            }
            if(!email && !password){
              alert("fill the form")
            }else{

            
            
            axios.post("http://localhost:5000/login",{ email,password},config)
            .then(async (r)=>{
             
              console.log(r.data.cred[0].name)
              await dispatch(add(r.data.cred[0].name))

              console.log(user.name)
              // // setUser(r.data.cred)
              // console.log(user)
              
              alert(`welcome ${user.name}`)
                // console.log(r.data.cred)
                navigate('/home')
            })
            .catch((e)=>{
              alert(e.response.data.msg)
              
            })
          }
            
      }
  return (
    <div className='login'>
      <div className='loginc'>

      
        <h1 className='he'>Login</h1>
        
        <form className='f' action="" onSubmit={sub}>
            <input type="text" placeholder='Enter Email' value = { email}onChange={(e)=>{setEmail(e.target.value)}} />
            <input type="password" placeholder='Enter Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <button>Submit</button>
        </form>
        <div className='link-div'>

        
        <Link to='/signup' className='link'>Signup</Link>
        </div>
        </div>
    </div>
  )
}

export default Login