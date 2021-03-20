var nombreProducto = "Carro";
var precioProducto = 300;

function precioTotal( precio, nombreProducto ){
    //Declaramos una variables en 0 que contendrá al resultado 
    var resultado = 0;
    //Comparamos, si el valor del producto es igual o menor a 399,
    //se cobrará el costo de envio
    if( precio <= 399 ){
        
        console.log( "Factura" );
        console.log( "Costo del " + nombreProducto + " es: " + precio);
        console.log( "Costo envio: 100" );
        resultado = precio + 100;
        console.log( "El total a pagar es: " + resultado ); 
    }
    //Comparamos, si el valor del producto es mayor a 399, no se cobrará el costo de envio
    else if( precio > 399 ){
        resultado = precio;
        
        console.log( "El total a pagar es: " + resultado );
        //Implementar la impresión de la factura para este caso
    }
}
 
function ambitoVar(){
    //Bloque de instrucciones N1
    const i = 1;
    if ( i == 1 ){
        //Bloque de instrucciones N2
        var variableVar = "Ambito de variable";
    }
    console.log( variableVar );
}


//Ámbito de una variable para la declaración con let
function ambitoLet(){
    //Bloque de instrucciones N1
    const i = 1;
    if( i == 1 ){
        //Bloque de instrucciones N2
        let variableLet = "Ambito de variable - Let";
        console.log( variableLet );
    }   
}

var mensaje = "texto";
//Declaración de función de ejemplo
function mensajeFuncion(){
    //Variable Local
    var mensaje = "Texto 2";
    console.log( mensaje );
}
//Impresión de la variable "mensaje" antes y después de llamar a la función 
console.log( mensaje );
mensajeFuncion();
console.log( mensaje );