const prompt = require('prompt-sync')();



//Ejercicio 1
//Cada vez que una persona ingrese una hora del día
//se mostrará un mensaje que diga el deporte que se
//está realizando en la cancha.

//Utilizamos la funcionalidad de "prompt"
//y el dato ingresado lo guardamos en una variable
var horaDia = prompt( "Dame la hora: " );



//Para representar el rango de horas, utilizamos un
//condicional if, así comparamos si la hora ingresada
//se encuentra en el rango horario de un deporte.
if( horaDia <= 3 ){
    console.log( "Está el equipo de Futbol entrenando" );
}

else if( (horaDia > 3) && (horaDia <= 6) ){
    console.log( "Está el equipo de Futbol Americano E" );
}
else if( (horaDia > 6) && (horaDia <= 9) ){
    console.log( "Está el equipo de Atletismo" );
}


switch( horaDia <= 3 ){
    case true:
        console.log( "Equipo de Futbol");
        break;
    case false:
        console.log( "Está otro equipo" );
        break;
}




var deporte = prompt( "Porfavor dime el nombre del deporte: " );

switch( deporte ){
    case "Futbol":
        console.log("Horario: 1 a 3 PM ");
        break;
    case "Americano":
        console.log("Horario: 3 a 6 PM" );
        break;
    case "Atletismo":
        console.log("Horario: 6 a 9 PM");
}



//Declaramos un arreglo con 5 elementos, todos ellos son números
var arregloNumerico = [ 1, 2, 3, 4, 5 ];
//Imprimimos todo el arreglo en pantalla
console.log( arregloNumerico );
//Declaramos un arreglo con 4 elementos, todos ellos son texto
var arregloNombres = [ "Ale", "Pedro", "Esteban", "Raul" ];
//Imprimimos todo el arreglo en pantalla
console.log( arregloNombres );
//Declaramos un arreglo con 8 elementos de distintos tipos de datos
var arregloMixto = [20, 16, , "Ale", , "Pedro", true, false];
//Imprimimos todo el arreglo en pantalla
console.log( arregloMixto );
//Accedemos a una posición del arreglo en específico
console.log( arregloNombres[0] );

//Concentrarse mas este codigo me base mucho en el profe intentar resolver mas por mi mismo NOTTAAAAA

//Ultima parte en github pq no entendi y ver video para entender NOTTTAAAA

//Actualizacion:
// vi el video y entiendo bien la siguiente clase mas concentracion