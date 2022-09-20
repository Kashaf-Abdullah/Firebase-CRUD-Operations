import React, { useState } from "react"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut

} from 'firebase/auth'
import {auth} from './firebaseConfig'
function App() {
const [regsiterEmail,setRegisterEmail]=useState("")
const [regsiterPassword,setRegisterPassword]=useState("")
const [loginEmail,setLoginEmail]=useState("")
const [loginPassword,setLoginPassword]=useState("")


//for login user
const [user,setUser]=useState({})
onAuthStateChanged(auth,(currentUser)=>{
  setUser(currentUser)
})

const register=async()=>{
  try{
  const user= await createUserWithEmailAndPassword(auth,regsiterEmail,regsiterPassword);
  console.log(user);
  
  }
  catch(err){
    console.log(err.message)
  }
}

const login=async()=>{
  try{
    const user= await signInWithEmailAndPassword(auth,loginEmail,loginPassword)
    console.log(user);
    
    }
    catch(err){
      console.log(err.message)
    }
}
const logout=async()=>{
await signOut(auth)
}


  return (
    <>
{/* <div className="register">
  <h1>Register user</h1>
<input placeholder="Email" onChange={(event)=>{setRegisterEmail(event.target.value)}}></input>
<input placeholder="password" onChange={(event)=>{setRegisterPassword(event.target.value)}}></input>
<button onClick={register}>Create user</button>
</div>




<div className="login">
  <h1>login user</h1>
<input placeholder="Email" onChange={(event)=>{setLoginEmail(event.target.value)}}></input>
<input placeholder="password" onChange={(event)=>{setLoginPassword(event.target.value)}}></input>
<button onClick={login}>Login</button>
</div>



<div className="signout">
  <h1>User Logged In</h1> */}
{/* {auth.currentUser.email} */}
{/* {user?.email}
<button onClick={logout}>sign out</button>
</div> */}









    </>
  );
}

export default App;
