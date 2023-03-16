/* let totalDelIntercambio = 0;
const valorDolar = 373;
const valorEuro = 212;
const valorPesoArg = 1;
function totalDeLaConversion (cantidadAIntercambiar){
    let monedaAIntercambiar = prompt("Ingrese la moneda por la cual quiere intercambiar sus divisas: ");
    if(monedaAIntercambiar == "Dolar" || monedaAIntercambiar == "dolar"){
        totalDelIntercambio = cantidadAIntercambiar / valorDolar
    }else if(monedaAIntercambiar == "Euro" || monedaAIntercambiar == "euro"){
        totalDelIntercambio = cantidadAIntercambiar / valorEuro
    }else if(monedaAIntercambiar == "peso arg" || monedaAIntercambiar == "Peso arg"){
        totalDelIntercambio = cantidadAIntercambiar * valorPesoArg
    }else{
        alert("Moneda aun no identificada ")
    }
    return alert("El total del intercambio es: "+ totalDelIntercambio)
}

totalDeLaConversion(parseFloat(prompt("ingrese cantidad a intercambiar:")))
 */

let totalHastaAhora = 0;
let mensajeUsuario = prompt("Ingrese cantidad a intercambiar o presione 0 para salir")
function sumoDeAUnoHastaLLegarACantidad(cantidadASumar){
    while(totalHastaAhora != cantidadASumar && mensajeUsuario != "0"){
        totalHastaAhora = totalHastaAhora + mensajeUsuario
        mensajeUsuario = prompt("Ingrese cantidad a intercambiar o presione 0 para salir")
    }
    return console.log("Tu total es: "+ totalHastaAhora)
}

sumoDeAUnoHastaLLegarACantidad(mensajeUsuario) 



