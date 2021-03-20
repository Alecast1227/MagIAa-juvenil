const prompt = require('prompt-sync')();
var nombre=prompt("Ingrese su nombre  ");
var nota1=prompt("Ingrece su primera nota " );
var nota2=prompt("Introduzca su segunda nota ");
var nota3=prompt("Ingrese su tercer nota ");
var promedio= (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3))/3;
var asist=prompt("Cumplio con su asistencia 1 para si o 2 para no ");
var com=prompt("Participaste en la comunidad 1 para si o 2 para no " )

    if(promedio>=8){
        console.log("Sus examenes son los correctos ")
        
    if(asist==1){
        console.log("Buena asistencia")
    }
    if(com==1)
    console.log("Buena participacion")

    console.log("Usted aprovó")
}


if(promedio<8){
    console.log("Esta reprovado ")
    
if(asist==1){
    console.log("Esta reprovado")
}
if(com==1)
console.log("Esta reprovado")

console.log("Reprobado")
}

console.log(nombre);
console.log(promedio);
console.log(asist);
console.log(com);