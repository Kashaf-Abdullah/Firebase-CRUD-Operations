
import React from 'react'
import CreateUser from './component/CreateUser'
import DatabaseFirebase from './FirebaseDatabase/DatabaseFirebase'
import GoogleSignIn from './component/GoogleSignIn'
import SignIn from './component/SignIn'
import GetData from './FirebaseDatabase/GetData'
import Updatedata from './FirebaseDatabase/Updatadata'
import DeleteData from './FirebaseDatabase/DeleteData'
import StorageFirebase from './FirebaseStorage/StorageFirebase'
import RealTimeUpdate from './FirebaseRealTimeUpdate/RealTimeUpdate'

const App = () => {

  return (
    <div>
   {/* <CreateUser/>
   <SignIn/>
 <GoogleSignIn/>


 <h1>FIREBASE DATABSE</h1>
 <DatabaseFirebase/>
 <GetData/>
 <Updatedata/>
 <DeleteData/>

 <h1>FIREBASE STORAGE</h1>
<StorageFirebase/> */}

<h1>FIREBASE REALTIME UPDATES</h1>
<RealTimeUpdate/>
    </div>
  )
}

export default App
