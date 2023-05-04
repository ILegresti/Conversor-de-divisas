
let divisas = [];
obtenerDolarYEuro()
// funcion constructora
class moneda{
    constructor(nombre,valorVenta,valorCompra){
        this.nombre = nombre;
        this.valorVenta = valorVenta;
        this.valorCompra = valorCompra;
    }
}


/* Inserto desde la API los objetos Dolar y Euro. Creo las funciones para obtener sus valores. */
function obtenerDolarYEuro(){
    const URLDOLARYEURO = "https://api.bluelytics.com.ar/v2/latest";
    fetch(URLDOLARYEURO)
    .then ((respuesta) => respuesta.json())
    .then((datos) => {
        divisas.push(datos.blue);
        divisas.push(datos.blue_euro);
    })
    
}
console.log(divisas);


const pesoArg = new moneda("Pesos argentinos",1,1);

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

function seleccionDeDivisas(){
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
                        total.innerText = (monto * (divisas[0].value_sell / divisas[1].value_sell)).toFixed(2);
                        break;
                    case "PesosArg":
                        total.innerText = (monto * (divisas[0].value_sell)).toFixed(2);
                        break;
                    default:
                        total.innerText = monto;
                        break;     
                }
                break;
            case "Euro": // conversion de euro a dolar y a pesos
                switch(seleccionDeDivisa2){
                    case "Dolar":
                        total.innerText = (monto * (divisas[1].value_sell / divisas[0].value_sell)).toFixed(2);
                        break;
                    case "PesosArg":
                        total.innerText = (monto * (divisas[1].value_sell)).toFixed(2);
                        break;
                    default:
                        total.innerText = monto;
                        break;
                }
                break;
            case "PesosArg": // conversion de pesos a dolar y euro
                switch(seleccionDeDivisa2){
                    case "Dolar":
                        total.innerText = (monto / divisas[0].value_sell).toFixed(2);
                        break;
                    case "Euro":
                        total.innerText = (monto / divisas[1].value_sell).toFixed(2);
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
    console.log(seleccionDeDivisa2);
    console.log(monto);
} 



dropdown1.addEventListener("change", () => {
    console.log("Cambiaste de moneda");
    seleccionDeDivisas();
    const ultimaDivisa1 = dropdown1.value;
  
    localStorage.setItem('ultimaDivisa1', ultimaDivisa1);
});
dropdown2.addEventListener("change",() => {
    console.log("Cambiaste de moneda");
    seleccionDeDivisas();
    const ultimaDivisa2 = dropdown2.value;
  
    localStorage.setItem('ultimaDivisa2', ultimaDivisa2);
} );
inputCambio.addEventListener("input",() => {
    console.log("monto a intercambiar");
    seleccionDeDivisas();

   /*  const ultimoMonto = inputCambio.value;
    localStorage.setItem("ultimoMontoACambiar",ultimoMonto); */
} );

