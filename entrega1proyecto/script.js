const allgames = [];

class Game {
    constructor(id, name, price, stock, category) {

        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.category = category;

    }

    compra() {

        // Funcion principal dar precio del pedido (cuenta como pedido un juego solo)//
        // Establecer que no puedan comprar más del Stock disponible//

        const cantidad = parseInt(prompt("Ingrese la cantidad que quiere comprar" + " " + "Stock disponible:" + " " + this.stock))

        if (cantidad > this.stock) {

            console.log("No contamos con ese Stock disponible nos quedan:" + " " + this.stock)

        } else if (cantidad == 1) {

            this.stock = this.stock - cantidad;

            //Resultado final
            console.log(this.name + " " + this.category + " " + " X " + " " + cantidad + " " + "UNIDAD:" + " " + "$" + this.price + " " + "Nos quedan:" + " " + this.stock)

            this.cuotas(this.price)

        } else if (cantidad == 0) {

            //Alert en caso que ponga 0
            alert("Ingrese un numero mayor a 0")

        } else {

            //Operar con el Stock y la cantidad

            this.stock = this.stock - cantidad;
            this.price = this.price * cantidad;

            console.log(this.name + " " + this.category + " " + " X " + " " + cantidad + " " + "UNIDADES:" + " " + "$" + this.price + " " + "Nos quedan:" + " " + this.stock)

            this.cuotas(this.price)
        }
    }

    cuotas(price) {

        //Entra el parametro Price que es el this.price del objeto 

        // Se solicita al usuario una entrada por prompt para preguntar si quiere cuotas

        const cuotasEntrada = prompt("¿Desea pagar en cuotas? SI O NO").toUpperCase()

        //Primer condicional sobre resp de usuario cuotas
        if (cuotasEntrada == "NO") {
            console.log("El precio Final es de:" + " " + price)
            this.envio()
        } else if (cuotasEntrada == "SI") {
            //si quiere cuotas se pide otra entrada para saber cuantas cuotas
            const cuotas = parseInt(prompt("Ingrese la cantidad de cuotas que desea: 3, 6 o 12"))


            if (cuotas == 3) { //Si son 3 cuotas

                //cambia this.price
                this.price = this.price / 3

                //se imprime en consola el resultado final
                console.log("Monto a abonar:" + " " + "$" + price + " " + "En" + " " + cuotas + " " + "Cuotas" + " " + "de:" + " " + "$" + this.price)

                this.envio()

            } else if (cuotas == 6) { //Si son 6 cuotas

                //cambia this.price
                this.price = this.price / 6

                //se imprime en consola el resultado final

                console.log("Monto a abonar:" + " " + "$" + price + " " + "En" + " " + cuotas + " " + "Cuotas" + " " + "de:" + " " + "$" + this.price)

                this.envio()

            } else if (cuotas == 12) { //Si son 12 cuotas

                //cambia this.price
                this.price = this.price / 12

                //se imprime en consola el resultado final

                console.log("Monto a abonar:" + " " + "$" + price + " " + "En" + " " + cuotas + " " + "Cuotas" + " " + "de:" + " " + "$" + this.price)

                this.envio()
            } else {
                alert("Ingrese un valor valido")
            }

        } else {
            alert("Respuesta no Valida")
        }

    }

    envio() {

        const preguntaEnvio = prompt("¿Desea que realicemos el envio para su producto?: SI O NO").toUpperCase()

        if (preguntaEnvio == "NO") {
            console.log("Puede pasar a buscar su producto por nuestro Local. Gracias por su compra!")
        } else if (preguntaEnvio == "SI") {
            alert("Ingrese Datos para su Envio")

            UserName()
            const cp = parseInt(prompt("Ingrese Codigo Postal: Solo Buenos Aires, Caba y Zona Sur"))
            ComprobarCp(cp)
        } else {
            alert("Ingrese una respuesta Valida")
        }

    }

}

// Juegos de Ps4 //

const fifa22 = new Game(1, 'FIFA 22', 7800, 20, 'PLAYSTATION 4')
const godofwar = new Game(2, 'GOD OF WAR', 5000, 10, 'PLAYSTATION 4')
const tlofus = new Game(3, 'THE LAST OF US 2', 6000, 16, 'PLAYSTATION 4')
const tsubasa = new Game(4, 'CAPITAN TSUBASA', 6500, 10, 'PLAYSTATION 4')

// Juegos de Ps5//

const borderlands = new Game(5, "BORDERLANDS 3", 10000, 10, "PLAYSTATION 5")
const godofwarps5 = new Game(6, 'GOD OF WAR', 9800, 10, 'PLAYSTATION 5')
const fifa22ps5 = new Game(7, "FIFA 22", 11000, 25, "PLAYSTATION 5")
const farcryps5 = new Game(8, "FAR CRY 5", 11500, 15, "PLAYSTATION 5")

allgames.push(fifa22, godofwar, tlofus, tsubasa, borderlands, godofwarps5, fifa22ps5, farcryps5)


const BuscarJuegos = (tuArray) => {

    //Recibe el Array por parametro y aplica Filter para buscar el producto

    //Recibe la entrada por Prompt para la variable search

    const search = prompt("Busca tu juego:").toUpperCase()

    //Realiza la busqueda con filter para que search conincida con el nombre del objeto

    const busqueda = tuArray.filter(obj => obj.name == search)

    //Condicional aplicado al Array que nos da la busqueda usando .lenght SI ES MAYOR A 2 //



    if (busqueda.length == 2) {

        //Recibe entrada por prompt de la categoria que quiere el usuario//

        const category = prompt("¿Para Playstation 4 o Playstation 5? INGRESE CONSOLA:").toUpperCase()

        //Realiza la busqueda con find
        const categorySearch = busqueda.find(x => x.category == category)

        console.log("RESULTADO DE SU BUSQUEDA:")

        //Obtengo el Objeto final y aplico el metodo compra

        console.log(categorySearch)

        categorySearch.compra()

    } else {

        console.log("RESULTADO DE SU BUSQUEDA:")

        //Acá obtengo un array porque recibe la busqueda del filter que trae un Array

        console.log(busqueda)

        //Entonces aplico metodo map para que a cada objeto se le aplique el metodo compra()

        busqueda.map(producto => producto.compra())

    }

}

const OrdenarPrecio = (games) => {

    // Metodo Sort aplicado con una función de comparación que me ordena el Array según precio. Lo vi en Mozilla Developer//

    const ordenPrecio = games.sort((item1, item2) => item1.price - item2.price)

    console.log("NUESTRO CATALOGO ORDENADO DE MENOR A MAYOR PRECIO:")
    console.log(ordenPrecio)

}


// --------------------------------Funciones para Envio-----------------------------//

const UserName = () => {

    let name = prompt("Ingrese su Nombre:").toUpperCase()

    let surname = prompt("Ingrese su Apellido:").toUpperCase()

    console.log("DATOS DE ENVÍO")
    console.log("RECIBE:" + " " + name + " " + surname)

}

const ComprobarCp = (cp) => {

    const codigospostales = [];

    codigospostales.push(1602, 1603, 1605, 1606, 1607, 1609, 1636, 1638, 1640, 1641, 1642, 1643, 1644, 1646, 1650, 1651, 1653, 1655, 1657, 1672, 1674, 1676, 1678, 1682, 1684, 1702, 1704, 1752, 1754, 1766, 1768, 1870, 1871, 1872, 1874, 1875, 1822, 1824, 1825, 1826, 1878, 1879, 1876)

    const codigospostalesordenados = codigospostales.sort((a, b) => a - b)



    for (codigopostal of codigospostalesordenados) {
        if ((cp > 1000) && (cp <= 1499)) {
            console.log("PRECIO DE ENVÍO:" + " " + "$" + 350)
        } else if ((cp >= 1500) && (cp <= 1879)) {
            console.log("PRECIO DE ENVÍO:" + " " + "$" + 500)
        } else {
            alert("Ingrese un valor valido.")
        }
    }

}



OrdenarPrecio(allgames)

BuscarJuegos(allgames)




