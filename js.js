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
} */

/* totalDeLaConversion(parseFloat(prompt("ingrese cantidad a intercambiar:")))


 */



/* let totalHastaAhora = 0;
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

 */


// funcion constructora
class moneda{
    constructor(nombre,valorVenta,valorCompra){
        this.nombre = nombre;
        this.valorVenta = valorVenta;
        this.valorCompra = valorCompra;
    }
}

// algunos objetos creados
const dolar = new moneda("Dolar", 395,391);
const euro = new moneda("Euro", 427,422);
const pesoArg = new moneda("Pesos argentinos", 300,233);

/* // metodo filter
const monedasVarias = [dolar,euro,pesoArg];
const filtroPorPrecio = monedasVarias.filter((el) => el.valorVenta < 400);
console.log(filtroPorPrecio);


//metodo some()
const hayMoneda = monedasVarias.find((el) => el.nombre == "Dolar");
console.log(hayMoneda);
 */



const dropdown1 = document.getElementById("monedaInicial");
const dropdown2 = document.getElementById("monedaFinal");
const inputCambio = document.getElementById("inputMonto");
const total = document.getElementById("labelFinal");

function seleccionDeDivisa1(){
    const seleccionDeDivisa1 = dropdown1.value;
    const seleccionDeDivisa2 = dropdown2.value;
    const monto = inputCambio.value;

    // tomo las divisas seleccionadas en los dropdowns y el valor a cambiar
 // establezco el resultado del label hasta ahora


    if (seleccionDeDivisa1 == seleccionDeDivisa2){
        total.innerText = monto;

    }else{ // conversion de dolar a euro y a pesos
        switch (seleccionDeDivisa1){
            case "Dolar":
                switch (seleccionDeDivisa2){
                    case "Euro":
                        total.innerText = (monto * 0.92).toFixed(2); // 0.92 es la tasa de conversion (395 / 427)
                        break;
                    case "PesoArg":
                        total.innerText = (monto * pesoArg.valorVenta).toFixed(2);
                        break;
                    default:
                        total.innerText = monto;
                        break;     
                }
                break;
            case "Euro": // conversion de euro a dolar y a pesos
                switch(seleccionDeDivisa2){
                    case "Dolar":
                        total.innerText = (monto * 1.08).toFixed(2);// 1.08 es la tasa de conversion (427 / 395)
                        break;
                    case "PesoArg":
                        total.innerText = (monto * pesoArg.valorVenta).toFixed(2);
                        break;
                    default:
                        total.innerText = monto;
                        break;
                }
                break;
            case "PesoArg": // conversion de pesos a dolar y euro
                switch(seleccionDeDivisa2){
                    case "Dolar":
                        total.innerText = (monto / dolar.valorVenta).toFixed(2);
                        break;
                    case "Euro":
                        total.innerText = (monto / euro.valorVenta).toFixed(2);
                        break;
                    default:
                        total.innerText = monto;
                        break;
                }
                break;
            default:
                
                break;    
                   
        }
    }


} 



dropdown1.addEventListener("change", () => {
    console.log("Cambiaste de moneda");
    seleccionDeDivisa1();
    const ultimaDivisa1 = dropdown1.value;
  
    localStorage.setItem('ultimaDivisa1', ultimaDivisa1);
});
dropdown2.addEventListener("change",() => {
    console.log("Cambiaste de moneda");
    seleccionDeDivisa1();
    const ultimaDivisa2 = dropdown2.value;
  
    localStorage.setItem('ultimaDivisa2', ultimaDivisa2);
} );
inputCambio.addEventListener("input",() => {
    console.log("monto a intercambiar");
    seleccionDeDivisa1();

   /*  const ultimoMonto = inputCambio.value;
    localStorage.setItem("ultimoMontoACambiar",ultimoMonto); */
} );

total.addEventListener("change",() => {
    const adada = monto.value;
    localStorage.setItem("ultimoMontoCambiado",adada);
});


