//Objetos

var computadora = {
    color: "Rojo",
    peso: 90,
    procesador: "Intel core i5",
    Grafica:"Nvidia geforce 1600",
    sistemaOperativo:"Windows 10 pro"
}
console.log(computadora)

console.log(computadora["Grafica"])

class sandwich{
    constructor(tamaño,ingredientes,){
        this.tamaño= tamaño;
        this.ingredientes= ingredientes;
    }
}
let sandwichAtun =new sandwich ("15 cm","Atun")
var sandwichJamon = new sandwich("20 cm","Jamon y queso")

console.log(sandwichJamon)
console.log(sandwichAtun)

console.log(sandwichAtun.ingredientes)
console.log(sandwichJamon.ingredientes)