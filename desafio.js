
class criarHeroi {
    constructor(tipo, ataque) {
        this.tipo = tipo;
        this.ataque = ataque;
    }

    atacar() {
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
}


let mago = new criarHeroi("Mago", "Magia");
let guerreiro = new criarHeroi("Gerreiro", "Espada");
let monge = new criarHeroi("Monge", "Artes Marciais");
let ninja = new criarHeroi("Ninja", "Shuriken");

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
