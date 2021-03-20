var concatenaN1 = [ "Hola", "Buenas", "Tardes"];
var concatenaN2 = [ "Adios", "Buenas", "Noches" ];
//Imprimimos el arreglo
console.log( concatenaN2.concat( concatenaN1 ) );

//Método sort 

var frutasN1 = ["Mandarina", "Piña", "Sandia", "Durazno"];
var frutasN2 = ["Mandarina", "Piña", "Pera", "Durazno"];
//Utilizamos el método "sort" para ordenar el arreglo
frutasN1.sort();
console.log( frutasN1 );
frutasN2.sort();
console.log( frutasN2 );
//Ordenar un arreglo con números
var arregloNumeros = [ 5000, 10, 200, 1000, 400 ];
//arregloNumeros.sort();
console.log( arregloNumeros );

//Tema -------->  Ciclos - For



//Forma Manual - Escribir 3 veces hola
console.log( "Hola - Forma manual" );
console.log( "Hola - Forma manual" );
console.log( "Hola - Forma manual" );

//Forma Automática - Escribe dependiendo del  valor de la variable "i"
for( var i = 10; i >= 2; i-- ){
    console.log( "Hola - Forma automatica," + "i: " + i );
}



//Obtener todos los valores de un arreglo
for( var j = 0; j < arregloNumeros.length; j++ ){
    //Usando concatenación podremos dividir el mensaje a imprimir en pantalla
    console.log("El valor del arreglo en la " + 
    "posición: " + j + " es: " + arregloNumeros[j])