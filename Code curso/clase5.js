var numeroCompleto = 867;
//Centenas --> 7
//Decenas  --> 3
//Unidades --> 8

//Condicional if que controla que el número ingresado esté entre 100 y 999
if( numeroCompleto <= 999 && numeroCompleto > 99){
    
  
  var centenas = parseInt( numeroCompleto / 100 );

  var decenas = parseInt( (numeroCompleto % 100) / 10 );
  
  var unidades = (numeroCompleto % 100) - (decenas*10);
  
  
  console.log( "El valor final es: " + unidades + decenas + centenas );
}
 
else{
    console.log( "Ingresa un número de 3 cifras" );
}




var conSwitch = "ALE";

var edad = 18;


switch( conSwitch ){
    
    
    //SI SALE NOMBRE SE GUARDA UN VALORr
    case 2:
        console.log( "El valor ingresado es: 2" );
        
        break;
    case 6:
        console.log( "El valor ingresado es: 6" );
        
        break;
    
    case "ALE":
        console.log( "Hola Alejandro, Bienvenido a gollo :)" );
       
        if( edad >= 18 ){
           console.log( "Ya tiene 18, hora de des*****" );     
        }
        
        break;
    default:
       
        console.log( "El valor ingresado es distinto" );
        
        break;
}
