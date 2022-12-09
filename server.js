
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";




const firebaseConfig = {
    apiKey: "AIzaSyB7SVElfijrloBiE6kA6emfGTqPk2AFn2A",
    authDomain: "bt1-login-register-form.firebaseapp.com",
    projectId: "bt1-login-register-form",
    storageBucket: "bt1-login-register-form.appspot.com",
    messagingSenderId: "609056200023",
    appId: "1:609056200023:web:3a5d26aa6cb387fcf15a12",
    measurementId: "G-ZSEPQ5SR0W"
    };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

    
var reg = document.querySelector(".register-btn");
  

reg.addEventListener("click",(e)=>{
    
    var email = document.querySelector("#id-register").value;
    var psw = document.querySelector("#psw-register").value;  
    const db = getDatabase();
    e.preventDefault();        
    
    createUserWithEmailAndPassword(auth, email, psw)
    .then( (userInfo) => {
        const user= userInfo.user;
        console.log(user.uid);
        set(ref(db,'users/' + user.uid),{
            email: email,
            psw: psw
        })
        .then(()=>{
            console.log("đọc dữ liệu thành công");
        })
        .catch( (err) => {
            console.log(err);
        })
        console.log("Tạo tài khoản thành công!!!");
    })
    .catch((error) =>{
        console.log(error);
    })
})
