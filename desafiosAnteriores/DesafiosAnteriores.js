//------------------------------------DESAFIO CLASE 1 ALGORITMO SIMPLE--------------------------------//

const ESPACIO = " ";
const year = 2021;

// const pedirnombre = () => {

//     let nombre = prompt("Ingrese su Nombre:")
//     let apellido = prompt("Ingrese su Apellido")

//     guardar(nombre, apellido)
//     alerta(nombre, apellido)

// }

// const guardar = (n1, n2) => {
//     console.log("Nombre:" + ESPACIO + n1)
//     console.log("Apellido:" + ESPACIO + n2)
// }

// const alerta = (n1, n2) => {
//     alert("Bienvenido" + ESPACIO + n1 + ESPACIO + n2)
// }

//---------------------------------------DESAFIO CLASE 2 CONDICIONALES----------------------------------//

// let born = parseInt(prompt("¿En qué año naciste?"))

// if (born == 1986) {
//     alert("EL DIEGOOOOOOOO")
// } else if (born != 1986) {
//     alert("No nacio en el 1986, no trajo la copa")
// }

// let age = year - born;

// alert("Tu edad es:" + ESPACIO + age + ESPACIO + "años.")

// if (age < 21) {
//     alert("Usted es Menor de 21 años")
//     console.log("¿Es mayor de edad?:" + ESPACIO + "No")
// } else if (age > 80) {
//     alert("Estás viejito, cuidado...")
// } else {
//     alert("Usted es todo un adulto")
//     console.log("¿Es mayor de edad?:" + ESPACIO + "Si")
// }

// console.log("Edad:" + ESPACIO + age)

//--------------------------------DESAFIO CLASE 3 CICLOS-------------------------------------------//

// let ingresenumero = parseInt(prompt("Ingresa un numero para ver su tabla en la consola"))

// for (let i = 1; i <= 10; i++) {
//     let resultado = ingresenumero * i;
//     console.log(ingresenumero + ESPACIO + "X" + ESPACIO + i + ESPACIO + "=" + ESPACIO + resultado)
// }

//---------------------------------DESAFIO CLASE 4 SIMULADOR INTERACTIVO----------------------------------------//


// 1 Delimitar Condicionales de cuota // Apliqué los consejos sobre los prompt que me marcaste, ingrese el else if de numeros negativos y un else por si no ponen un valor valido

// const PagoCuotas = () => {

//     let precio = parseInt(prompt("Ingrese el Precio del producto que quiere comprar."))
//     let cuota = parseInt(prompt("Ingrese la cantidad de cuotas que quiere pagar 3,6 o 12"))

//     if (cuota == 3) {
//         alert("Abonará 3 cuotas de:" + ESPACIO + (precio / 3))
//     } else if (cuota == 6) {
//         alert("Abonará 6 cuotas de:" + ESPACIO + (precio / 6))
//     } else if (cuota == 12) {
//         alert("Abonará 12 cuotas de:" + ESPACIO + (precio / 12))
//     } else if (cuota < 0) {
//         alert("Ingrese una de las opciones validas 3, 6 o 12 cuotas")
//     } else {
//         alert("Ingrese una de las opciones validas 3, 6 o 12 cuotas")
//     }

// }

// 3 Mostrar Precio //

// PagoCuotas()


//-------------------------------------------DESAFIO EXTRA CLASE 4-------------------------------------//

// Función Obtener Precio de Envio con Codigo Postal //

//1 Obtener Codigo Postal //

// const ObtenerCp = () => {

//     return (parseInt(prompt("Ingrese Codigo Postal")))
// }


//2 Delimitar los precios// Utilicé el parametro para anidar la función como indicaste, quedó bien.

// const PrecioEnvio = (cp) => {

//     if (cp <= 2000) {
//         return (alert("Precio Envio" + ESPACIO + "$" + ESPACIO + 500))
//     } else if (cp > 2000) { //Indique que si es menor a 2000 se active, así no hay 2 true al mismo tiempo 
//         return (alert("Precio Envio" + ESPACIO + "$" + ESPACIO + 700)) //Puse los return antes de los alert
//     } else {
//         return (alert("Ingrese un codigo postal valido"))
//     }
// }

// 3 Llamar a la función mostrar precio//

// PrecioEnvio(ObtenerCp())

//-----------------------------------------DESAFIO CLASE 5  OBJETOS -------------------------------------//

// 1 Constructor //

class Game {
    constructor(id, name, system, stock, price) {
        this.id = id;
        this.name = name;
        this.system = system;
        this.stock = stock;
        this.price = price;
    }

    compra(unidades,cuotas){


        if(unidades > 1){
            this.price = this.price*unidades
            console.log = this.price;
        } else {
            this.price = this.price;
            console.log = this.price
        }

        
        if (cuotas == 3) {
            this.price = this.price/3;
            console.log("Abonará 3 cuotas de:" + ESPACIO + this.price);
        } else if (cuotas == 6) {
            this.price = this.price/6;
            console.log("Abonará 6 cuotas de:" + ESPACIO + this.price);
        } else if (cuotas == 12) {
            this.price = this.price/12;
            console.log("Abonará 12 cuotas de:" + ESPACIO + this.price);
        } else if (cuotas < 0) {
            console.log("Ingrese una de las opciones validas 3, 6 o 12 cuotas");
        } else {
            console.log("Ingrese una de las opciones validas 3, 6 o 12 cuotas");
        }


        if (this.stock > unidades){
            this.stock = this.stock - unidades;
            console.log("Compraste" + " " + unidades + " " + "Quedan" + " "+ this.stock + " " + "unidades" );
        } else {
            console.log("No contamos con esa cantidad" + " " + "Nos queda disponible" + " " + this.stock + " " + "unidades." );
        }

        
    } 

    catalogo(){
        console.log("NOMBRE:" + " " + this.name + " " + "CATEGORY:" + " " + this.system + " " + " PRICE:" + " " + this.price)
    }

    
}

const fifa22 = new Game("01", "Fifa 22 PS4", "Playstation 4", 10, 7800)
const godofwar = new Game("02", "God Of War PS4", "Playstation 4", 10, 5600)
const crash4 = new Game("03", "Crash Bandicoot 4 PS4", "Playstation 4", 10, 7000)
const tsubasa = new Game("04", "Capitan Tsubasa PS4", "Playstation 4", 10, 7800)

//2 imprimir//

fifa22.catalogo();
godofwar.catalogo();
crash4.catalogo();
tsubasa.catalogo();

fifa22.compra((parseInt(prompt("¿Cuantas unidades de Fifa22 PS4 quiere comprar? STOCK INICIAL:" + " " + fifa22.stock))), (parseInt(prompt("Ingrese la cantidad de cuotas que quiere pagar 3,6 o 12"))))

