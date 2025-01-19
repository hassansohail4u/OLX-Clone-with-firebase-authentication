import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { auth } from "./firebaseConfig.js"

var email = document.querySelector("#user-email")
var password = document.querySelector("#user-password")
var form = document.querySelector("#form")

form.addEventListener("submit" , (events) => {
    events.preventDefault()

    console.log(email.value);
    console.log(password.value);
    
    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {

    const user = userCredential.user;
    console.log(user);

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
