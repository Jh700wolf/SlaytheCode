const file_system=require('fs');
file_system.writeFileSync('hola.txt', 'Hola desde node');//Este es syncronico
setTimeout(()=>{console.log("UwU")},10000);

const http = require('http');
const server = http.createServer((request, response)=>{
    response.setHeader('Contemt-Type', 'text.html');
    response.write("<h1> Ligoleie </h1>");
    response.end();
});
server.listen(3000);
