import React , { useState } from 'react'
import {app} from '../firebaseConfig'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const SignIn = () => {

    const auth = getAuth();

    const [data,setData]=useState({})

    const handleInput=(event)=>{
let newInput={[event.target.name]:event.target.value}
setData({...data,...newInput})
}

const handleSubmit=()=>{
    signInWithEmailAndPassword(auth,data.email,data.password).then((response)=>{
        console.log(response.user)
    }).catch((err)=>{
alert(err.message)
    })

}
  return (
    <div>
        <div>
      <input type="email" 
      name="email"
      placeholder='email'
      onChange={(event)=>handleInput(event)}>
      </input>

      <input type="password" 
      name="password"
      placeholder='password'
      onChange={(event)=>handleInput(event)}>
      </input>

      <button type="submit"
      onClick={handleSubmit}
      >login</button>
    </div>
    </div>
  )
}

export default SignIn