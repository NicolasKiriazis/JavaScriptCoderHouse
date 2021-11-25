//----------------------Mostrar pedido almacenado en el carrito------------------------//

//---------Obtener Array del Local--------//

const carrito = JSON.parse(localStorage.getItem("carrito"))

const CrearCompra = (array) => {

    array.map(pedido => {

        //----------------Creando Imagenes---------------//

        let image = document.createElement("img")
        image.setAttribute("src", pedido.img)
        image.setAttribute("id", "imagen-cart")

        //-------------------imagen--------------------//

        let title = document.createElement("h3")
        title.textContent = pedido.name;
        title.setAttribute("id", "title-cart")

        //------------------Unidades----------------------//
        let unidades = document.createElement("p")
        unidades.textContent = `X ${pedido.stock} UNIDADES`
        unidades.setAttribute("class", "unidades-cart")

        //-------------------Texto-Precio-------------------//

        let precio = document.createElement("p")
        precio.textContent = ` ${pedido.price} ARS`;
        precio.setAttribute("id", "price-cart")

        const container = document.createElement("div")
        container.setAttribute("class", "detalle")

        container.appendChild(title)
        container.appendChild(title)
        container.appendChild(unidades)
        container.appendChild(precio)

        const containerpedido = document.querySelector("#container-pedido")

        containerpedido.appendChild(container)
        containerpedido.appendChild(image)



    });

}

CrearCompra(carrito)

// const SumarPrecio = (carrito) => {
    
//     carrito.map(item =>{
//         let precios = [];
//         precios.push(item.price)
        

//         console.log(precios)
//         precios.
//     })

// }

// SumarPrecio(carrito)
