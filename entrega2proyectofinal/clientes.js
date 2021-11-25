const URLGET = "https://jsonplaceholder.typicode.com/users"

$("#container").append(`<button id="ver-clientes">Ver Clientes</button>`)

$("#ver-clientes").on("click", () => {
    $.get(URLGET, function (respuesta, estado) {
        if (estado === "success") {
            let misDatos = respuesta;

            for (const dato of misDatos) {
                $("#container").prepend(`<div>
                                        <h3>${dato.name} </h3>
                                        <p> ${dato.email} </p>
                                        </div>`)
            }
        }
    });
});

