
import { navigate } from "../js/router.js"

export function renderSidebar(){

const el=document.getElementById("sidebar")

el.innerHTML=`
<h2>Portal</h2>
<ul class="menu">
<li data-link="dashboard">Dashboard</li>
<li data-link="tickets">Chamados</li>
<li data-link="chat">Chat</li>
<li data-link="users">Usuários</li>
</ul>
`

el.querySelectorAll("li").forEach(i=>{
i.onclick=()=>navigate(i.dataset.link)
})

}
