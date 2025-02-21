function promedio(array){
    const size = array.length;
    let total = 0;
    for (let i=0; i<size;i++){
        total+=array[i];
    }
    return total/size;
}

var array1= new Array(4,2,7,4,1,2,1,9,8,11);
const file_system=require('fs');
file_system.writeFileSync('hola.txt', 'Hola desde node');//Este es syncronico
setTimeout(()=>{console.log("UwU")},10000);

const http = require('http');
const server = http.createServer((request, response)=>{
    console.log(promedio(array1));
    response.setHeader('Contemt-Type', 'text.html');
    response.write("<h1> Laboratorio </h1>");
    response.end();
});
server.listen(3000);
