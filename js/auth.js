
import { auth } from "./firebase.js";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

window.login = function(){

const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

signInWithEmailAndPassword(auth,email,password)
.then(()=>{
window.location="dashboard.html";
});

}

window.logout=function(){
signOut(auth).then(()=>{
window.location="index.html";
});
}

onAuthStateChanged(auth,(user)=>{
if(user && document.getElementById("welcome")){
document.getElementById("welcome").innerText="Olá, "+user.email;
}
});
