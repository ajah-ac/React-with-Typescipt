export async function userdata(){
const res=await fetch('https://jsonplaceholder.typicode.com/users')
 return res.json()}