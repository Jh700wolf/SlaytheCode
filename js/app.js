const file_system=require('fs');
file_system.writeFileSync('hola.txt', 'Hola desde node');//Este es syncronico
setTimeout(()=>{console.log("UwU")},10000);

const http = require('http');
const server = http.createServer((request, response)=>{});
server.listen(3000);
