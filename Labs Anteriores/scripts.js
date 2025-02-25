function contador(arreglo){
    var n =0;
    var tamaño = arreglo.length;
    console.log(tamaño)
    for (let i=0;i<=tamaño;i++){
        if (arreglo[i]<0){
            n+=1;
        }
    }
    return n;
}

function inverso(numero){
    let n = numero.toString();
    let tamaño = n.length;
    let aux="";
    for (let i=tamaño-1;i>=0;i--){
        aux+=n[i];
    }
    return Number(aux);
}




console.log("Problema 1");
var pregunta1 = prompt("Dame un número:");
var numeros = "";
var arreglo1 = new Array(-1, 5,2,-6,22,2,1,-1);
var arreglo2= new Array(4,2,7,4,1,2,1,9,8,11);
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
var respuesta3=contador(arreglo1);
document.write("Respuesta 3: "+respuesta3+", ");

console.log("Problema 5");
let num = prompt("Dame un número de minimo dos digitos:")
let respuesta5=inverso(num);
document.write("Respuesta 5: "+respuesta5+", ");


