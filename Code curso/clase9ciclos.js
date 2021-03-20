//while
var contadorN1 = 5
var contadorN2 = 30





while(contadorN1 <11 &&  contadorN2 > 25){
    console.log("Contador N1: " + contadorN1 +
    "  Contador N2: "+ contadorN2);

contadorN1++;
contadorN2--;
};
var contN3 = 0;
var condicion="Hello"
//do while
do{
console.log("Estas en dowhile");
contN3++;
if(contN3 == 2){
    condicion= "Adios"
}
}
while(contN3 == "Hola");


//ejemplo 2
var condicionN2= 25;
do{
console.log("Valor es: " + condicionN2);
condicionN2 -= 5;
}while( condicionN2 >=5);


prompt();
//ejercicio

var recibeNumero= prompt("Digita numero");
while(recubeNumero !=0) {
   suma= suma+ parseInt(recibeNumero) ;
}

//Practicar prompt 