
var oplN1 = 5;
var oplN2 = 50;
var oplN3 = 30;

//Operador && ("AND" o "Y")

var resultadoOperadorLY = ( oplN1 < oplN2 ) && ( oplN2 < oplN3 );
console.log( "El resultado del operador Y, es: " + resultadoOperadorLY );

//Operador || ("OR" o "O" )

var resultadoOperadorLO = ( oplN1 < oplN2 ) || ( oplN2 < oplN3 );
console.log( "El resultado del operador O, es: " + resultadoOperadorLO );

//Operador de negación !

var resultadoOperadorLN = !resultadoOperadorLO;
console.log( "El resultado del operador de Negación, es: " + resultadoOperadorLN );


//Condicional if, else if y else
var numero1 = 125;
var numero2 = 50;
var numero3 = 30;



//Condicional if - Dependiendo de la condición ejecutará las instrucciones dentro de las llaves {}.
if( (numero1 < numero2) && (numero2 < numero3) ){
    console.log( "Entraste al IF" );
}
//Condicional else if - Si no se ejecutaron las instrucciones dentro del IF, comprobará una nueva condición.
else if( numero1 < numero3 ){
    console.log( "Entraste al ELSE IF" );
}
//else -  Si no se ha cumplido ninguna condición, se ejecutarán estas instrucciones por defecto.
else{
    console.log( "Entraste al ELSE" );
}
// Entendi el if por primera vez estoy bastante feliz y el curso me esta gustando NOTAAAAA