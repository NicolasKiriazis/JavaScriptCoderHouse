
const allgames = [];

class Game {

    constructor(id, img, name, price, stock, category) {

        this.id = id;
        this.img = img;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.category = category;

    }

    compra() {

        //-------------------------Función de Compra----------------------//

        const Compra = () => {
            //--------------------GUARDAR EN LOCAL--------------------------------//

            const carrito = [];

            const Carrito = (product) => {

                if (localStorage.getItem("carrito") == null) {
                    carrito.push(product)
                    localStorage.setItem("carrito", JSON.stringify(carrito))
                } else {
                    const carritoLleno = JSON.parse(localStorage.getItem("carrito"));
                    carritoLleno.push(product)
                    localStorage.setItem("carrito", JSON.stringify(carritoLleno))
                }

            }


            //-------------Condicional de Cantidad---------------------//
            const cantidad = document.querySelector("#cantidad").value

            if (cantidad > this.stock) {
                const resultadoCantidad = document.querySelector("#resultado-cantidad")
                resultadoCantidad.innerHTML = `NO CONTAMOS CON STOCK DISPONIBLE, NOS QUEDAN ${this.stock} UNIDADES`

            } else if (cantidad == 1) {

                this.stock = this.stock - 1;
                const resultadoUnidades = document.querySelector("#resultado-unidades")
                resultadoUnidades.innerHTML = `SU PEDIDO ES DE: ${cantidad} UNIDADES. Nos quedan: ${this.stock} UNIDADES.`

                const resultadoPrecio = document.querySelector("#resultado-precio")
                resultadoPrecio.textContent = `PRECIO FINAL: ${this.price} ARS`

                const botonFinalizar = document.createElement("button")
                botonFinalizar.setAttribute("id", "finalizar-pedido")
                botonFinalizar.innerHTML = `<a href="cartwidget.html">Agregar al Carrito</a>`;
                const seguirComprando = document.createElement("button")
                seguirComprando.setAttribute("id", "seguir-comprando")
                seguirComprando.innerHTML = `<a href="index.html">Seguir Comprando</a>`;
                resultadoPrecio.appendChild(botonFinalizar)
                resultadoPrecio.appendChild(seguirComprando)


                resultadoPrecio.appendChild(botonFinalizar)

                const finalizarPedido = document.querySelector("#finalizar-pedido")

                finalizarPedido.onclick = () => {
                    
                    const producto = {
                        img: this.img,
                        name: this.name,
                        unidades: cantidad,
                        preciofinal: this.price,
                    }

                    Carrito(producto)

                }

            } else if (cantidad == 0) {
                const resultadoCantidad = document.querySelector("#resultado-cantidad")
                resultadoCantidad.innerHTML = `INGRESE UN VALOR MAYOR A CERO, NOS QUEDAN ${this.stock} UNIDADES`

            } else if (cantidad <= -1) {
                const resultadoCantidad = document.querySelector("#resultado-cantidad")
                resultadoCantidad.innerHTML = `INGRESE UN VALOR VALIDO, NOS QUEDAN ${this.stock} UNIDADES.`
            } else {
                this.stock = this.stock - cantidad
                this.price = this.price * cantidad

                const resultadoUnidades = document.querySelector("#resultado-unidades")
                resultadoUnidades.innerHTML = `SU PEDIDO ES DE: ${cantidad} UNIDADES. Nos quedan: ${this.stock} UNIDADES.`

                const resultadoPrecio = document.querySelector("#resultado-precio")
                resultadoPrecio.textContent = `PRECIO FINAL: ${this.price} ARS`

                const botonFinalizar = document.createElement("button")
                botonFinalizar.setAttribute("id", "finalizar-pedido")
                botonFinalizar.innerHTML = `<a href="cartwidget.html">Finalizar Pedido </a>`;
                const seguirComprando = document.createElement("button")
                seguirComprando.setAttribute("id", "seguir-comprando")
                seguirComprando.innerHTML = `<a href="index.html">Seguir Comprando</a>`;
                resultadoPrecio.appendChild(botonFinalizar)
                resultadoPrecio.appendChild(seguirComprando)

                const finalizarPedido = document.querySelector("#finalizar-pedido")

                finalizarPedido.onclick = () => {
                    
                    const producto = {
                        img: this.img,
                        name: this.name,
                        unidades: cantidad,
                        preciofinal: this.price,
                    }

                    Carrito(producto)
                }

            }

        }


        //--------------------Evento para aplicar los metodos de los objetos--------------//
        const boton = document.querySelector("#cart")
        boton.onclick = () => {
            Compra()
            const stock = document.getElementById("stock")
            stock.style.display = "none";

            const input = document.getElementById("cantidad")
            input.style.display = "none";
            boton.style.display = "none";
        }

    }



}

// Juegos de Ps4 //

const fifa22 = new Game(1, "https://i.ibb.co/DW1ZM1b/fifa22ps4.png", 'FIFA 22', 7800, 20, 'PLAYSTATION 4')
const godofwar = new Game(2, "https://i.ibb.co/XpGf7WR/godofwar4.png", 'GOD OF WAR', 5000, 10, 'PLAYSTATION 4')
const tlofus = new Game(3, "https://i.ibb.co/jLRLHLq/thelastofus2ps4.png", 'THE LAST OF US 2', 6000, 16, 'PLAYSTATION 4')
const tsubasa = new Game(4, "https://i.ibb.co/kJx1NCj/captaintsubasaps4.jpg", 'CAPITAN TSUBASA', 6500, 10, 'PLAYSTATION 4')

// Juegos de Ps5//

const borderlands = new Game(5, "https://i.ibb.co/1nP08bB/borderlands3ps5.jpg", "BORDERLANDS 3", 10000, 10, "PLAYSTATION 5")
const godofwarps5 = new Game(6, "https://i.ibb.co/0jM9h0g/godofwarps5.png", 'GOD OF WAR', 9800, 10, 'PLAYSTATION 5')
const fifa22ps5 = new Game(7, "https://i.ibb.co/3FfbcvL/fifa22ps5.jpg", "FIFA 22", 11000, 25, "PLAYSTATION 5")
const farcryps5 = new Game(8, "https://i.ibb.co/H7B20jK/farcry6ps5.jpg", "FAR CRY 5", 11500, 15, "PLAYSTATION 5")

allgames.push(fifa22, godofwar, tlofus, tsubasa, borderlands, godofwarps5, fifa22ps5, farcryps5)

//---------------------------MAIN DE LA WEB------------------------//

const Banner = () => {

    const portada = document.getElementById("banner")

    const bannerImg = document.createElement("img")
    bannerImg.setAttribute("src", "https://i.ibb.co/92LjgTY/banner.jpg")

    let banner = portada.appendChild(bannerImg)

    return (banner)

}

const GameCardsMain = (games) => {

    games.forEach(game => {

        //----------------Creando Imagenes---------------//

        let image = document.createElement("img")
        image.setAttribute("src", game.img)
        image.setAttribute("id", "imagen")


        //-------------------Texto-Nombre--------------------//

        let title = document.createElement("h3")
        title.textContent = game.name;
        title.setAttribute("id", "title")

        //-------------------Texto-Precio-------------------//

        let precio = document.createElement("p")
        precio.textContent = ` ${game.price} ARS`;
        precio.setAttribute("id", "price")

        //-------------------Texto-Category-----------------//

        let categoria = document.createElement("p")
        categoria.textContent = game.category;
        categoria.setAttribute("id", "category")

        //----------------Llamar contenedor---------------//

        const container = document.getElementById("container-product")
        const product = document.createElement("div")
        product.setAttribute("id", "container-product")
        product.appendChild(image)
        product.appendChild(title)
        product.appendChild(precio)
        product.appendChild(categoria)

        //---------------Agregar hijos-------------------//


        container.appendChild(product)

    });


}

//----------------------------------------------------------------//

//------------FUNCION QUE CREA LAS CARDS DESPUES DE BUSQUEDA----//
const GameCards = (games) => {


    games.forEach(game => {
        //----------------Creando Imagenes---------------//

        let image = document.createElement("img")
        image.setAttribute("src", game.img)
        image.setAttribute("id", "imagen")


        //-------------------Texto-Nombre--------------------//

        let title = document.createElement("h3")
        title.textContent = game.name;
        title.setAttribute("id", "title")

        //-------------------Texto-Precio-------------------//

        let precio = document.createElement("p")
        precio.textContent = ` ${game.price} ARS`;
        precio.setAttribute("id", "price")

        //-------------------Texto-Category-----------------//

        let categoria = document.createElement("p")
        categoria.textContent = game.category;
        categoria.setAttribute("id", "category")

        //---------------------STOCK-----------------------//

        let stock = document.createElement("p")
        stock.textContent = `Stock: ${game.stock}`;
        stock.setAttribute("id", "stock")

        //--------------------boton STOCK----------------//
        let btn = document.createElement("button")
        btn.textContent = `Verificar Stock:`
        btn.setAttribute("id", "cart")

        //--------------------Cantidad--------------------//
        let input = document.createElement("input")

        input.setAttribute("type", "number")
        input.setAttribute("id", "cantidad")
        input.setAttribute("placeholder", "Cantidad")

        let resultadoCantidad = document.createElement("p")

        resultadoCantidad.setAttribute("id", "resultado-cantidad")
        resultadoCantidad.setAttribute("class", "results")


        let resultadoUnidades = document.createElement("p")


        resultadoUnidades.setAttribute("id", "resultado-unidades")
        resultadoUnidades.setAttribute("class", "results")

        let resultadoPrecio = document.createElement("p")
        resultadoPrecio.setAttribute("id", "resultado-precio")
        resultadoPrecio.setAttribute("class", "results")

        //---------------BOTON PRECIO PEDIDO---------------//

        const contenedorFinalizador = document.createElement("div")
        


        //----------------Llamar contenedor---------------//

        const container = document.getElementById("container")


        //---------------Agregar hijos-------------------//


        container.appendChild(image)
        container.appendChild(title)
        container.appendChild(precio)
        container.appendChild(categoria)
        container.appendChild(input)
        container.appendChild(resultadoCantidad)
        container.appendChild(resultadoUnidades)
        container.appendChild(resultadoPrecio)
        container.appendChild(contenedorFinalizador)
        container.appendChild(btn)
        container.appendChild(stock)



    });

}

//---------------------------------------------------------------//

const Busqueda = (games) => {

    //-------------Pone el contenedor en Blanco----------//
    let contenedor = document.querySelector("#container")
    contenedor.innerHTML = ` `;


    //---------Realiza la busqueda y devuelve Array-----//

    const buscador = document.querySelector("#search").value.toUpperCase();

    const busqueda = games.filter(game => game.name == buscador)

    //----Crea la card del resultado de la busqueda--//

    GameCards(busqueda)

    //----Activa Metodo Compra--//
    busqueda.map(producto => producto.compra())

    
}

Banner()
GameCardsMain(allgames)


const button = document.querySelector("#btn")

button.onclick = () => {
    let banner = document.querySelector("#banner")

    banner.innerHTML = ` `;

    let containerproduct = document.querySelector("#container-product")

    containerproduct.innerHTML = ` `;

    Busqueda(allgames)

}