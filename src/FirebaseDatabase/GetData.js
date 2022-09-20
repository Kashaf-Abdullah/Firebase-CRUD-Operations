import React , { useState } from 'react'
import {app,database} from './firbaseDatabase'
import { collection,addDoc,getDocs } from 'firebase/firestore'

const GetData = () => {

    const collectionRef=collection(database,"users")



//getData

const getData=()=>{
    getDocs(collectionRef).
    then((response)=>{
        console.log(response.docs.map((item)=>{
            return {...item.data(),id:item.id}
        }))
    })
}
  return (
    <div>
        <div>


      <button type="submit"
      onClick={getData}
      >Get  Data</button>
    </div>
    </div>
  )
}

export default GetData