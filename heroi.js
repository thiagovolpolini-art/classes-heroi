class Heroi {
    constructor() {
        this.nome = "Alberto"
        this.idade = 56
        this.tipo = "mago"
    }

    atacar() {
        let ataque

        if (this.tipo === "mago") {
            ataque = "magia"
        }
        else if (this.tipo === "guerreiro") {
            ataque = "espada"
        }
        else if (this.tipo === "monge") {
            ataque = "artes marciais"
        }
        else if (this.tipo === "ninja") {
            ataque = "shuriken"
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

let alberto = new Heroi()

console.log(alberto.nome)
console.log(alberto.idade)
console.log(alberto.tipo)

alberto.atacar()