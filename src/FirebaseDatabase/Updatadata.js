import React , { useState } from 'react'
import {app,database} from './firbaseDatabase'
import { collection,addDoc,getDocs,doc,updateDoc } from 'firebase/firestore'

const Updatedata = () => {

    //collection name user
    const collectionRef=collection(database,"users")




//updateData
const updateData=()=>{
const docToUpdate=doc(database,"users",'Mby653m2JnHifAeWlZDb');
updateDoc(docToUpdate,{
    email:'ABC',
    password:1234
}).then
(()=>{
    alert('data updated')
}).catch((err)=>{
alert(err.message)
})
}
  return (
    <div>
  
   
      <button type="submit"
      onClick={updateData}
      >Update Data</button>
    
    

    </div>
  )
}

export default Updatedata