import {signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js"
import { auth } from "./firebaseConfig.js"

var form = document.querySelector("#form")
var email = document.querySelector("#user-email")
var password = document.querySelector("#user-password")


form.addEventListener("submit" , (events) => {
    events.preventDefault()

    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {

      const user = userCredential.user;
      console.log(user);
      window.location = "./home.html"

    email.value = ""
    password.value = ""
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage)
    });
  
})