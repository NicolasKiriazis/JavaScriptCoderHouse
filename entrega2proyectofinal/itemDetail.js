
$(() => {

    const product = JSON.parse(localStorage.getItem("item-detail"))

    const ItemDetail = (product) => {
        product.map(item => {
            $("#container").append(
                `<img src= ${item.img} id="imagen-detail"></img>
                <h3 id="title-detail">${item.name}</h3>
                <p id="description-detail">${item.description}</p>
                <p id="price-detail">${item.price}</p>
                <p id="category-detail">${item.category}</p>
                <p id="stock-detail">Stock: ${item.stock}</p>
                <input id="cantidad" placeholder="Cantidad"></input>
                </br>
                <a href="cartwidget.html">
                <button id"add-cart">Agregar a Carrito</button>
                </a>
                <a href="finpedido.html">
                <button id="comprar">Comprar</button>
                </a>
                <button id="verificar-stock">Verificar Stock</button>
                `
            )


        })

        const Cantidad = (cantidad) => {

            $("#verificar-stock").hide();

            switch (true) {

                case cantidad == 0:

                    $("#verificar-stock").prepend(`INGRESE UN VALOR MAYOR A CERO, NOS QUEDAN ${game.stock} UNIDADES`).fadeIn(2000)

                    break;

                case cantidad == 1:
                    Finalizar()
                    break;

                case cantidad < 0:
                    $("#verificar-stock").prepend(`INGRESE UN VALOR VALIDO, NOS QUEDAN ${game.stock} UNIDADES`).fadeIn(2000)
                    break;

                case cantidad > this.stock:
                    $("#verificar-stock").prepend(`NO CONTAMOS CON STOCK DISPONIBLE, NOS QUEDAN ${game.stock} UNIDADES`).fadeIn(2000)
                    break;

                default:
                    this.stock = this.stock - cantidad
                    this.price = this.price * cantidad
                    Finalizar()

            }
        }



        $("#verificar-stock").on("click", () => {

            const cantidad = $("#cantidad").val()
            
            Cantidad(cantidad)
            console.log(cantidad)
            

        })





    }



    ItemDetail(product)


})