function promedio(array){
    const size = array.length;
    let total = 0;
    for (let i=0; i<size;i++){
        total+=array[i];
    }
    return total/size;
}

function escribir(str){
    const file_system=require('fs');
    file_system.writeFileSync('Lab8.txt', str);
}

function fizzbuzz(){

    for (let i = 1; i<=100; i++){
        if (i%3==0){
            if(i%5==0){
                console.log("fizzbuzz")
            }
            else{
                console.log("fizz");
            }
        }
        else if (i%5==0){
            console.log("buzz");
        }
        else{
            console.log(i);
        }
    }
}
var array1= new Array(4,2,7,4,1,2,1,9,8,11);
const file_system=require('fs');
file_system.writeFileSync('hola.txt', 'Hola desde node');//Este es syncronico
var pagina = file_system.readFileSync('index.html');
escribir("Prueba de problema 2");
setTimeout(()=>{console.log("UwU")},10000);
fizzbuzz();

const http = require('http');
const server = http.createServer((request, response)=>{
    console.log(promedio(array1));
    response.write(pagina);
    response.end();
});
server.listen(3000);
