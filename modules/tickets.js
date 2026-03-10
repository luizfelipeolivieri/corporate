
export function render(){

const view=document.getElementById("view")

view.innerHTML=`
<h1>Kanban Chamados</h1>

<div class="kanban">

<div class="column">
<h3>To Do</h3>
<div class="ticket">Erro sistema</div>
</div>

<div class="column">
<h3>Doing</h3>
<div class="ticket">Atualizar servidor</div>
</div>

<div class="column">
<h3>Done</h3>
<div class="ticket">Bug login</div>
</div>

</div>
`
}
