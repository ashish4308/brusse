import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './signup.css'

function Signup() {
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const navigate = useNavigate();


    const sub =(e)=>{
        e.preventDefault()
        const config={
            headers: {
                "Content-Type":"application/json"
            }
        }
        
        axios.post("http://localhost:5000/signup",{name, email,password},config)
        .then((r)=>{
            console.log(r)
            navigate("/");
        })
        .catch((e)=>{
            console.log(e);
            if(e.response.data.msg === 'alredy exist'){
                alert('alredy exist')
                console.log("yo");
            }else{
                console.log("error in axios");
            }
           })
        
    }

  return (
    <div className='login'>
        <div className='loginc'>
        <h1 className='he'>Signup</h1>
        <form className='f' action="" onSubmit={sub}>
            <input type="text" placeholder='Enter name'  value={name} onChange={(e)=>{setName(e.target.value)}} />
            <input type="text" placeholder='Enter Email' value = { email}onChange={(e)=>{setEmail(e.target.value)}} />
            <input type="password" placeholder='Enter Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <button>Submit</button>
            
        </form>
        <div className='link-div'>
        <Link to="/" className='link'>Login</Link>
    </div>
    </div>
    </div>
  )
}

export default Signup