
export function render(){

const view=document.getElementById("view")

view.innerHTML=`
<h1>Chat</h1>

<div class="card">
<p><b>João:</b> Olá</p>
<p><b>Maria:</b> Bom dia</p>
</div>

<input placeholder="mensagem">
<button>Enviar</button>
`
}
