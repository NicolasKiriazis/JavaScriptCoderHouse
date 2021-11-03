
const allgames = [];

class Game {


    constructor(id,name,price,stock,category){

        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.category = category;

    }
}

// Juegos de Ps4 //

const fifa22 = new Game(1,'FIFA 22', 7800, 20, 'PLAYSTATION 4')
const godofwar = new Game(2, 'GOD OF WAR', 5000, 10, 'PLAYSTATION 4')
const tlofus = new Game(3, 'THE LAST OF US 2', 6000, 16, 'PLAYSTATION 4')
const tsubasa = new Game(4, 'CAPITAN TSUBASA', 6500, 10, 'PLAYSTATION 4')

// Juegos de Ps5//

const borderlands = new Game(5, "BORDERLANDS 3", 10000, 10, "PLAYSTATION 5")
const godofwarps5 = new Game(6, 'GOD OF WAR', 9800, 10, 'PLAYSTATION 5')
const fifa22ps5 = new Game(7, "FIFA 22", 11000, 25, "PLAYSTATION 5")
const farcryps5 = new Game(8, "FAR CRY 5", 11500, 15, "PLAYSTATION 5")

allgames.push(fifa22, godofwar, tlofus, tsubasa, borderlands, godofwarps5, fifa22ps5, farcryps5)

const boton = document.getElementById('btn')

boton.onclick = () =>{
    console.log("funciona")
    GameCards(allgames)
}
const GameCards = (games) => {
    
    for (game of games){
        let contenedor = document.createElement("div")

        contenedor.innerHTML = `<h3>  ${game.name}</h3>
                                <p> $ ${game.price} </p>
                                <p> ${game.category} </p>`

        let container = document.getElementById("container")
        container.appendChild(contenedor)
    
    }
    
}
