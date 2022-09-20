import React , { useState } from 'react'
import {app,database} from './firbaseDatabase'
import { collection,addDoc,getDocs,doc,updateDoc ,deleteDoc} from 'firebase/firestore'

const DeleteData = () => {

    //collection name user
    const collectionRef=collection(database,"users")




//updateData
const deleteData=()=>{
const docToDelete=doc(database,"users",'bW4Sn9LAkWuqnR5vHKbt');
deleteDoc(docToDelete).then
(()=>{
    alert('data deleted')
}).catch((err)=>{
alert(err.message)
})
}
  return (
    <div>
  
   
      <button type="submit"
      onClick={deleteData}
      >Delete Data</button>
    
    

    </div>
  )
}

export default DeleteData