
body{
font-family: Arial, sans-serif;
margin:0;
display:flex;
}

.login-body{
display:flex;
justify-content:center;
align-items:center;
height:100vh;
background:#f5f5f5;
}

.login-card{
background:white;
padding:30px;
border-radius:8px;
box-shadow:0 0 10px rgba(0,0,0,0.1);
display:flex;
flex-direction:column;
gap:10px;
}

.sidebar{
width:200px;
background:#111827;
color:white;
height:100vh;
padding:20px;
}

.sidebar ul{
list-style:none;
padding:0;
}

.sidebar a{
color:white;
text-decoration:none;
display:block;
padding:8px 0;
}

.main{
flex:1;
padding:20px;
}

header{
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:20px;
}

.charts{
display:grid;
grid-template-columns:1fr 1fr;
gap:30px;
}

.table-container{
overflow-x:auto;
}

.finance-table{
border-collapse:collapse;
min-width:1200px;
}

.finance-table th,
.finance-table td{
border:1px solid #ddd;
padding:6px;
text-align:right;
min-width:100px;
}

.finance-table td:first-child,
.finance-table th:first-child{
position:sticky;
left:0;
background:white;
text-align:left;
font-weight:bold;
}
