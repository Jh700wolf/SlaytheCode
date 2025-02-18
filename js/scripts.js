function contador(){

}




console.log("Problema 1");
var pregunta1 = prompt("Dame un número:");
var numeros = "";
for(let i=1; i<=pregunta1;i++){
    numeros+=String(i);
    numeros+=", ";
}
alert("La lista de numeros es: " + numeros);
document.write(numeros)
console.log("Problema 2");
var n1 = Math.floor(Math.random()*11);
var n2 = Math.floor(Math.random()*11);
var tiempoinicio= new Date();
var pregunta2 = prompt("Dame la suma de:"+n1+"+"+n2);
var tiempofinal=new Date();

var tiempoTotal=(tiempofinal.getSeconds()-tiempoinicio.getSeconds());
if (pregunta2=n1+n2){
    alert("Tu resultado fue correcto. Tardaste: "+tiempoTotal+" Segundos.");
}
else{
    alert("Tu resultado fue incorrecto. Tardaste: "+tiempoTotal+" Segundos.");
}

console.log("Problema 3");
