import React , { useEffect, useState } from 'react'
import {app,database} from './firbaseRealTimeDatabase'
import { collection,addDoc, getDocs,onSnapshot } from 'firebase/firestore'

const RealTimeUpdate = () => {

    const [data,setData]=useState({})
    //collection name user
    const collectionRef=collection(database,"users")

    const handleInput=(event)=>{
let newInput={[event.target.name]:event.target.value}
setData({...data,...newInput})
}
const handleSubmit=()=>{
   addDoc(collectionRef,{
    name:data.name,
    email:data.email
   }).then(()=>{
    console.log('dataadded');
    
    }).catch((err)=>{
alert(err.message)
    })

}

//getData
const getData=()=>{
onSnapshot(collectionRef,(data)=>{
  console.log(
    data.docs.map((item)=>{
return item.data();
    })
  )

})
}

useEffect(()=>{
    getData();
},[])
  return (
    <div>
        <div>
      <input type="text"
      name="name"
      placeholder='name'
      onChange={(event)=>handleInput(event)}>
      </input>

      <input type="email" 
      name="email"
      placeholder='email'
      onChange={(event)=>handleInput(event)}>
      </input>

      <button type="submit"
      onClick={handleSubmit}
      >submit</button>
    </div>
    </div>
  )
}

export default RealTimeUpdate