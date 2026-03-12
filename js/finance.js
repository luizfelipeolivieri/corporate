
document.querySelectorAll("tbody tr").forEach(row=>{

const cells=row.querySelectorAll("td[contenteditable]");
cells.forEach(cell=>{
cell.addEventListener("input",()=>{

let total=0;
cells.forEach(c=>{
let v=parseFloat(c.innerText.replace(",","."));
if(!isNaN(v)) total+=v;
});

row.querySelector(".total").innerText=total.toLocaleString("pt-BR",{minimumFractionDigits:2});

});
});

});
