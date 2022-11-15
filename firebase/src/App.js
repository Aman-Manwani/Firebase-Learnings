import {useState} from 'react';
import {app,database} from './firebaseConfig';
import {getAuth,signInWithEmailAndPassword, createUserWithEmailAndPassword } from'firebase/auth';
import {collection,addDoc,getDocs, doc} from 'firebase/firestore'
import { Firestore } from 'firebase/firestore';

function App() {

  const [data,setdata]=useState({
    email: '',
    password: '',
  })

  const auth = getAuth();
  const dbInstance = collection(database,'users');

  const handleinputs = (event) => {
    let inputs = {[event.target.name] : event.target.value}
    setdata({...data,...inputs});
  }

  const handlesignup = () => {
    createUserWithEmailAndPassword(auth,data.email,data.password)
    .then((res)=>{
      alert('data sent');
    })
    .catch((err)=>{
      alert(err.message);
    })
  }
  
  const handlesignin = ()=>{
    signInWithEmailAndPassword(auth,data.email,data.password)
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      alert(err.message);
    })
  }

  const handleadddata = () =>{
    addDoc(dbInstance,data)
    .then((res)=>{
      console.log(res.user);
    })
    .catch(err=>{
      alert(err.message);
    })
  }

  const getData = async() =>{
    const data = await getDocs(dbInstance)
    console.log(data.docs.map((item)=>{
      return {...item.data(),id:item.id}
    }));
  }

  const [array,setarray]= useState([]);

  const updateData= () =>{
    let datatoupdate=doc(database,'users',id);
  }
  return (
    <div className="App">
      <input placeholder="Email" onChange={handleinputs} name="email" type="email" />
      <input placeholder="Password" onChange={handleinputs} name="password" type="password" />
      <button className='signup_btn' onClick={handlesignup}>Sign Up</button>
      <button className='signin_btn' onClick={handlesignin}>Sign In</button>
      <button className='adddata_btn' onClick={handleadddata}>Add Data</button>
      <button className='getdata_btn' onClick={getData}>Get Data</button>
    </div>
  );
}

export default App;
