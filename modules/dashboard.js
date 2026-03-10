
export function render(){

const view=document.getElementById("view")

view.classList.add("fade-in")

view.innerHTML=`
<h1>Dashboard</h1>

<div class="grid">

<div class="card">
<h3>Total Chamados</h3>
<span>12</span>
</div>

<div class="card">
<h3>SLA</h3>
<span>92%</span>
</div>

<div class="card">
<h3>Tempo médio</h3>
<span>1h20</span>
</div>

</div>

<div class="card">
<canvas id="chart"></canvas>
</div>
`

const ctx=document.getElementById("chart")

new Chart(ctx,{
type:"bar",
data:{
labels:["Jan","Fev","Mar","Abr"],
datasets:[{
label:"Chamados",
data:[12,19,8,15]
}]
}
})

}
