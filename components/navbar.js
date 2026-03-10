
export function renderNavbar(){

const el=document.getElementById("navbar")

el.innerHTML=`
<button id="toggleSidebar">☰</button>
<div style="flex:1"></div>
<button id="toggleTheme">🌙</button>
`

document.getElementById("toggleSidebar").onclick=()=>{
document.body.classList.toggle("sidebar-collapsed")
}

document.getElementById("toggleTheme").onclick=()=>{
document.body.classList.toggle("dark")
}

}
