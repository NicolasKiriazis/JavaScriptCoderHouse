//------------------------------------DESAFIO CLASE 1 ALGORITMO SIMPLE--------------------------------//

const ESPACIO = " ";
const year = 2021;

const pedirnombre = () => {

    let nombre = prompt("Ingrese su Nombre:")
    let apellido = prompt("Ingrese su Apellido")

    guardar(nombre, apellido)
    alerta(nombre, apellido)

}

const guardar = (n1, n2) => {
    console.log("Nombre:" + ESPACIO + n1)
    console.log("Apellido:" + ESPACIO + n2)
}

const alerta = (n1, n2) => {
    alert("Bienvenido" + ESPACIO + n1 + ESPACIO + n2)
}

//---------------------------------------DESAFIO CLASE 2 CONDICIONALES----------------------------------//

let born = parseInt(prompt("¿En qué año naciste?"))

if (born == 1986) {
    alert("EL DIEGOOOOOOOO")
} else if (born != 1986) {
    alert("No nacio en el 1986, no trajo la copa")
}

let age = year - born;

alert("Tu edad es:" + ESPACIO + age + ESPACIO + "años.")

if (age < 21) {
    alert("Usted es Menor de 21 años")
    console.log("¿Es mayor de edad?:" + ESPACIO + "No")
} else if (age > 80) {
    alert("Estás viejito, cuidado...")
} else {
    alert("Usted es todo un adulto")
    console.log("¿Es mayor de edad?:" + ESPACIO + "Si")
}

console.log("Edad:" + ESPACIO + age)

//--------------------------------DESAFIO CLASE 3 CICLOS-------------------------------------------//

let ingresenumero = parseInt(prompt("Ingresa un numero para ver su tabla en la consola"))

for (let i = 1; i <= 10; i++) {
    let resultado = ingresenumero * i;
    console.log(ingresenumero + ESPACIO + "X" + ESPACIO + i + ESPACIO + "=" + ESPACIO + resultado)
}

//---------------------------------DESAFIO CLASE 4 SIMULADOR INTERACTIVO----------------------------------------//

// 1 Obtener Precio y Cuotas

const PedirPrecio = () => {
    
    return(
        parseInt(prompt("Ingrese el precio del Producto que va a comprar:"))
    )

}

const PedirCuota = () => {

    return(
        parseInt(prompt("Ingrese cantidad de cuotas 3, 6 o 12:"))
    )

}

// 2 Delimitar Condicionales de cuota //

const PagoCuotas = () => {

    let precio = PedirPrecio()
    let cuota = PedirCuota()

    if(cuota == 3){
        alert("Abonará 3 cuotas de:" + ESPACIO + (precio/3))
    } else if (cuota == 6){
        alert("Abonará 6 cuotas de:" + ESPACIO + (precio/6))
    } else if (cuota == 12){
        alert("Abonará 12 cuotas de:" + ESPACIO + (precio/12))
    }
    
}

// 3 Mostrar Precio //

PagoCuotas()


//-------------------------------------------DESAFIO EXTRA CLASE 4-------------------------------------//

// Función Obtener Precio de Envio con Codigo Postal //

//1 Obtener Codigo Postal //

const ObtenerCp = () => {

    return(parseInt(prompt("Ingrese Codigo Postal")))
}
    

//2 Delimitar los precios//

const PrecioEnvio = () => {

    let cp = ObtenerCp()

    if (cp <= 2000) {
        alert("Precio Envio" + ESPACIO + "$" + ESPACIO + 500)
    } else if (cp >= 2000) {
        alert("Precio Envio" + ESPACIO + "$" + ESPACIO + 700)
    } 
}

// 3 Llamar a la función mostrar precio//

PrecioEnvio()