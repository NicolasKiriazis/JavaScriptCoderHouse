
$(() => {

    //Funcion para alertar el error en Html//
    const AlertaError = (stock) => {

        $("#container").append(
            `<div id="alerta">
            <h2>Ingrese un valor Valido, Nos quedan ${stock} Unidades</h2>
            <button id="cerrar">Cerrar</button>
            </div>`
        )

        $("#alerta").hide()
        $("h2").hide()
        $("#cerrar").hide()

        //--------Funcion de CallBack--------//
        $("#alerta").fadeIn(1000, () => {
            $("h2").fadeIn(1000)
            $("#cerrar").fadeIn(1000)
        })

        $("#cerrar").on("click", () => {
            $("#alerta").fadeOut(1000)
        })

    }



    //Funcion para alertar Ok de pedido en HTML//
    const AlertaOk = (item, cantidad) => {
        $("#container").append(
            `<div id="alerta">
            <h2>Pedido: ${item.name} X ${cantidad} UNIDADES $ ${item.price} </h2>
            <button id="cerrar">Cerrar</button>
            <a href="cartwidget.html">
            <button id="agregar-carrito">Agregar al Carrito</button>
            </a>
            </div>`
        )

        $("#alerta").hide()
        $("h2").hide()
        $("#cerrar").hide()

        //--------Funcion de CallBack--------//
        $("#alerta").fadeIn(1000, () => {
            $("h2").fadeIn(1000)
            $("#cerrar").fadeIn(1000)
        })

        $("#agregar-carrito").on("click", () => {
            Carrito(item)
        })

        $("#cerrar").on("click", () => {
            $("#alerta").fadeOut(1000)
        })

    }
    

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


    const product = JSON.parse(localStorage.getItem("item-detail"))

    const VerificarStock = (item) => {
        const cantidad = $("#cantidad").val()

        switch (true) {
            case cantidad == 0:
                AlertaError(item.stock)
                break;

            case cantidad == 1:
                AlertaOk(item, cantidad)
                break;

            case cantidad < 0:
                AlertaError(item.stock)
                break;

            case cantidad > item.stock:
                AlertaError(item.stock)
                break;

            default:

                item.stock = item.stock - cantidad;
                item.price = item.price * cantidad;

                const newItem = {
                    img: item.img,
                    name: item.name,
                    stock: `${cantidad}`, 
                    price: item.price,
                }
                

                AlertaOk(newItem, cantidad)
                
        }
    }


    const ItemDetail = (product) => {
        product.map(item => {
            $("#container").append(
                `<img src= ${item.img} id="imagen-detail"></img>
                <h3 id="title-detail">${item.name}</h3>
                <p id="description-detail">${item.description}</p>
                <p id="price-detail"> $ ${item.price}</p>
                <p id="category-detail">${item.category}</p>
                <p id="stock-detail">Stock: ${item.stock}</p>
                <input id="cantidad" placeholder="Cantidad"></input>
                </br>
                <button id="verificar-stock">Verificar Pedido</button>
                `
            )

            $("#verificar-stock").on("click", () => {

                VerificarStock(item)

            })


        })
    }

    ItemDetail(product)

})






