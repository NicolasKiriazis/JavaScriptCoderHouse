
//---CONSTANTES---//

const ESPACIO = " ";
const year = 2021;

//---PEDIR NOMBRE Y APELLIDO---//

let nombre = prompt("Ingrese su Nombre:")
let apellido = prompt("Ingrese su Apellido")

//---GUARDA EN CONSOLA---//

console.log("Nombre:" + ESPACIO + nombre)
console.log("Apellido:" + ESPACIO + apellido)

//---ALERT BIENVENIDA---//

alert("Bienvenido" + ESPACIO + nombre + ESPACIO + apellido)

//---PREGUNTAR AÑO DE NACIMIENTO---//

let born = parseInt(prompt("¿En qué año naciste?"))

//---CONDICIONAL 1986---//

if (born == 1986) {
    alert("EL DIEGOOOOOOOO")
} else if (born != 1986) {
    alert("No nacio en el 1986, no trajo la copa")
}

//---VARIABLE BORN---//

let age = year - born; //---- resta year menos la fecha ingresada ----//

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