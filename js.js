let totalDelIntercambio = 0;
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

/* totalDeLaConversion(parseFloat(prompt("ingrese cantidad a intercambiar:")))


 */



let totalHastaAhora = 0;
function convertir(cantidad, divisa){
    if(divisa == "Dolar" || divisa == "dolar"){
        totalHastaAhora = cantidad / valorDolar
    }else if(divisa == "Euro" || divisa == "euro"){
        totalHastaAhora = cantidad / valorEuro
    }else if(divisa == "peso arg" || divisa == "Peso arg"){
        totalHastaAhora = cantidad * valorPesoArg
    }else{
        alert("Moneda aun no identificada ")
    }
    return(totalHastaAhora)
}


let totalDeIntercambio = 0;
let mensajeUsuario = prompt("Ingrese cantidad a intercambiar o presione 0 para salir")
function sumoDeAUnoHastaLLegarACantidad(){
    while(mensajeUsuario != "0"){
        const divisa = prompt("Ingrese la moneda por la cual quiere intercambiar sus divisas: ");
        const conversion = convertir(mensajeUsuario, divisa);
        alert("Resultado de conversion: "+ conversion);
        mensajeUsuario = prompt("Ingrese cantidad a intercambiar o presione 0 para salir")
        totalDeIntercambio = totalDeIntercambio + conversion; 
    }
    return(alert("Total convertido: "+ totalDeIntercambio))
}


sumoDeAUnoHastaLLegarACantidad()

