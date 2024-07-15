const divEjercicio1 = document.querySelector(".ejercicio1")

const carta1 = document.createElement("div")
carta1.classList.add("carta1")
divEjercicio1.appendChild(carta1)

const carta1contendor = document.querySelector(".carta1")

const subcontenedor = document.createElement("div")
subcontenedor.setAttribute("id","subContenedorColor")
carta1contendor.appendChild(subcontenedor)

const button1 = document.createElement("button")
button1.textContent = "Change"
button1.classList.add("button1")
carta1contendor.appendChild(button1)

const clases = ["bg-gray-500", "bg-blue-700", "bg-red-500"];
const colores = ["GRIS", "AZUL", "ROJO"]
let indiceClase = 0;
button1.addEventListener("click", () =>{
    // Aplicar la clase actual
    subcontenedor.className = clases[indiceClase];
    subcontenedor.textContent = colores[indiceClase]
    // Incrementar el índice, y volver a 0 si llega al final del array
    indiceClase++
    console.log(indiceClase)
    if (indiceClase == clases.length) {
        indiceClase = 0
    }
   
})

//------------------------------------Ejercicio 2-----------------------------------------------------------------

const buttonReset = document.querySelector("#buttonReset")
const cuadroDeTexto = document.querySelector("#cuadroDeTexto")
const inputTexto = document.querySelector("#inputTexto")
inputTexto.addEventListener("input", ()=>{
    console.log(inputTexto.value)
    cuadroDeTexto.textContent = inputTexto.value
})

buttonReset.addEventListener("click", () => {
    inputTexto.value = ""
    cuadroDeTexto.textContent = ""
})

//-----------------------------------------------Ejercicio 3------------------------------------------------------
const inputCentimetros = document.querySelector("#inputCentimetros")
const inputKilogramos = document.querySelector("#inputKilogramos")
const buttonCalculate = document.querySelector("#buttonCalculate")
const divResultadoMasaCorporal = document.querySelector("#divResultadoMasaCorporal")

buttonCalculate.addEventListener("click", () =>{
    let numeroCentimetros = inputCentimetros.value
    let numeroKilogramos = inputKilogramos.value

    let masaCorporal = numeroKilogramos / ((numeroCentimetros / 100) ** 2)
    console.log(masaCorporal.toFixed(1))
    divResultadoMasaCorporal.textContent = masaCorporal.toFixed(1)
})

//-------------------------------------------Ejercicio 4----------------------------------------------------------
const inputValorEnMonedaLocal = document.querySelector("#inputValorEnMonedaLocal")
const divEquivalenteEnDolares = document.querySelector("#divEquivalenteEnDolares")
const buttonConverDolareas = document.querySelector("#buttonConverDolareas")

buttonConverDolareas.addEventListener("click", () => {
    let valorEnMonedaLocal = inputValorEnMonedaLocal.value
    let equivalenteEnDolares = valorEnMonedaLocal / 500
    console.log(equivalenteEnDolares)
    divEquivalenteEnDolares.textContent = equivalenteEnDolares
})

const inputValorDolares = document.querySelector("#inputValorDolares")
const divEquivalenteEnMonedaLocal = document.querySelector("#divEquivalenteEnMonedaLocal")
const buttonConvertMonedaLocal = document.querySelector("#buttonConvertMonedaLocal")

buttonConvertMonedaLocal.addEventListener("click",() => {
    let valorDolares = inputValorDolares.value
    let equivalenteEnMonedaLocal = valorDolares * 500
    console.log(equivalenteEnMonedaLocal)
    divEquivalenteEnMonedaLocal.textContent = equivalenteEnMonedaLocal
})