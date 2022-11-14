const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD7E8DbMXGNwMJqsgUY2Jog3DMe083rb28",
    authDomain: "fir-learnings-b8739.firebaseapp.com",
    projectId: "fir-learnings-b8739",
    storageBucket: "fir-learnings-b8739.appspot.com",
    messagingSenderId: "1053835486671",
    appId: "1:1053835486671:web:d3801884791f4814ab1eba"
});

const db=firebaseApp.firestore();
const auth =firebaseApp.auth();


const register=()=>{
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    auth.createUserWithEmailAndPassword(email,password)
    .then( (res) => {
        console.log(res.user);
    })
    .catch((err)=>{
        alert(err.code);
        console.log(err.code);
        console.log(err.message);
    })
}

const login = () =>{
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    auth.signInWithEmailAndPassword(email,password)
    .then((res)=>{
        console.log(res.user);
    })
    .catch((err)=>{
        alert(err.code);
        console.log(err.code);
        console.log(err.message);
    })
}

const save = () =>{
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    db.collection('users')
    .add({
        email:email,
        password:password,
    })
    .then((res)=>{
        console.log("document written with ID", res.id);
    })
    .catch((err)=>{
        alert(err.message);
        console.log(err.message)
    })
}

const readData=()=>{
    db.collection('users')
    .get()
    .then((res)=>{
        console.log(res.docs.map((item)=>{
            return {...item.data(),id:item.id}
        }));
    })
    .catch((err)=>{
        alert(err.message);
        console.log(err.message)
    })
}

const updateData = () =>{
    db.collection('users').doc('5C7By9URr9ylyk6PhgVj')
    .update({
        email:'aman04.manwani00@gmail.com',
        password : '123456789'
    })
    .then(()=>{
        alert('data updated');
    })
    // .catch((err)={
    //     console.log(err.message);
    // })
}

const deleteData = () =>{
    db.collection('users').doc('5C7By9URr9ylyk6PhgVj').delete()
    .then(()=>{
        alert('data deleted');
    })
}