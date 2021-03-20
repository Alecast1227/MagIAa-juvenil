//declaracion de funciones
function multiplica(primerOperando){
    var resultado = primerOperando *2;
    console.log("El resultado es:  " + resultado);

}
multiplica(12);
var resultado=function multiplicaN2(primerOperando){
    return  2 * primerOperando;

}
console.log(resultado(25,6) );

function multiplicaN3(){
   var resultado2 = 12*12
   console.log ("Su resultado es "+resultado2);
}
multiplica(12*12)



//saludar
const saludo = (nombre) => console.log("Hola, como estás " +nombre+"?")
saludo("Pedro");


function deterNum(numero){
    if((numero%2 == 1)){
        console.log("El numero es impar");

    } 
    else if((numero % 2) == 0){
        console.log("El numero es par");
    }

}
deterNum(56);

//ejercicio 2

function detTexto(texto){
    if(texto == texto.toUpperCase()){
        console.log("El texto está en mayuscula")
    }
    else if(texto == texto.toLowerCase()){
        console.log("El texto esta en minuscula")
    }
}
detTexto("HOLA");
