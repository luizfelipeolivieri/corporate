
const routes={
dashboard:()=>import("../modules/dashboard.js"),
tickets:()=>import("../modules/tickets.js"),
chat:()=>import("../modules/chat.js"),
users:()=>import("../modules/users.js"),
login:()=>import("../modules/login.js")
}

export async function navigate(route){
const module=await routes[route]()
module.render()
}

export function router(){
navigate("dashboard")
}
