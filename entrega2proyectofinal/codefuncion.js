const Compra = (params) => {

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

    //--------------------Finalizar------con JQUERY--------------------//

    const Finalizar = () => {

        //------------------RESULTADOS--------------------//
        $("#resultado-unidades").text(`SU PEDIDO ES DE: ${cantidad} UNIDADES. Nos quedan: ${this.stock} UNIDADES.`)
        $("#resultado-precio").text(`PRECIO FINAL: ${this.price} ARS`)

        //---------------BOTON FINALIZAR-------------//
        const botonFinalizar = document.createElement("button")
        botonFinalizar.setAttribute("id", "finalizar-pedido")
        $("#finalizar-pedido").append(`<a href="cartwidget.html">Finalizar Pedido </a>`)

        //-----------BOTON SEGUIR COMPRANDO----------//
        const seguirComprando = document.createElement("button")
        seguirComprando.setAttribute("id", "seguir-comprando")
        $("#seguir-comprando").append(`<a href="index.html">Agregar al Carrito y seguir comprando</a>`)

        //-----------INGRESAR HIJOS----------------//
        $("#resultado-precio").append("#finalizar-pedido")
        $("resultado-precio").append("#seguir-comprando")

        //-----------funcion on click para los botones---------//

        $("#finalizar-pedido #seguir-comprando").on("click", () => {

            const producto = {
                img: this.img,
                name: this.name,
                unidades: cantidad,
                preciofinal: this.price,
            }

            Carrito(producto)

        })
    }


    const cantidad = $("#cantidad").val()

    switch (true) {

        case cantidad == 0:
            $("#resultado-cantidad").append(`INGRESE UN VALOR MAYOR A CERO, NOS QUEDAN ${this.stock} UNIDADES`)
            break;

        case cantidad == 1:
            Finalizar()
            break;

        case cantidad <= -1:
            $("#resultado-cantidad").append(`INGRESE UN VALOR VALIDO, NOS QUEDAN ${this.stock} UNIDADES.`)
            break;

        case cantidad > this.stock:
            $("#resultado-cantidad").append(`NO CONTAMOS CON STOCK DISPONIBLE, NOS QUEDAN ${this.stock} UNIDADES`)
            break;

        default:
            this.stock = this.stock - cantidad
            this.price = this.price * cantidad
            Finalizar()

    }


}

//------------------------------Evento con Jquery para aplicar Compra--------------------//
$("#cart").on("click", () => {
    Compra()
    $("#cart").css("display", "none")
    $("#stock").css("display", "none")
    $("#cantidad").css("display", "none")

})