import React , { useState } from 'react'
import {app,database} from './firbaseDatabase'
import { collection,addDoc } from 'firebase/firestore'

const DatabaseFirebase = () => {

    const [data,setData]=useState({})
    //collection name user
    const collectionRef=collection(database,"users")

    const handleInput=(event)=>{
let newInput={[event.target.name]:event.target.value}
setData({...data,...newInput})
}

const getData=()=>{
    addDoc(collectionRef,{
        email:data.email,
        password:data.password
    }).then(()=>{
        alert('Data stored')

    }).catch((err)=>{
console.log(err.message)
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
      onClick={getData}
      >login</button>
    </div>
    </div>
  )
}

export default DatabaseFirebase