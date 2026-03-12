
const modal=document.getElementById("loginModal");
const btn=document.getElementById("loginBtn");
const close=document.getElementById("closeModal");

btn.onclick=()=>modal.style.display="flex";
close.onclick=()=>modal.style.display="none";
window.onclick=(e)=>{
if(e.target==modal) modal.style.display="none";
};
