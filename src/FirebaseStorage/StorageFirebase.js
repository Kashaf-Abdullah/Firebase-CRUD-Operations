//go to docs -->build--> storage--<web-->uploadfiles
//build-->storage-->rules-->changing in rules-->remove :if false -->publish

import React , { useState } from 'react'
import {app,storage} from './firebaseStorage'
import {  ref ,uploadBytesResumable,getDownloadURL} from "firebase/storage";
const StorageFirebase = () => {

    const [data,setData]=useState({})
 
 

const handleSubmit=()=>{
   
    // const storageRef = ref(storage, data.name);
    
    //if you want to upload it in folder
    const storageRef = ref(storage,`images/{data.name}`)

    const uploadTask = uploadBytesResumable(storageRef, data);
    uploadTask.on('state_changed',(snapshot)=>{
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');

    },
    (error) => {
      // Handle unsuccessful uploads
      console.log(error.message)
    }, 
    () => {
      
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
      });
    }
    
    )
}
  return (
    <div>
        <div>
      <input type="file" 
   
      onChange={(event)=>setData(event.target.files[0])}>
      </input>

    

      <button type="submit"
      onClick={handleSubmit}
      >Submit</button>
    </div>
    </div>
  )
}

export default StorageFirebase