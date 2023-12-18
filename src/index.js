class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar(ataque) {
    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;

      case "guerreiro":
        ataque = "espada";
        break;

      case "monge":
        ataque = "artes marciais";
        break;

      case "ninja":
        ataque = "shuriken";
        break;

      default:
        ataque = "algum ataque";
        break;
    }
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

let joao = new heroi("João", 20, "mago");
let leticia = new heroi("Letícia", 20, "guerreiro");
let lucas = new heroi("Lucas", 20, "monge");
let cleber = new heroi("Cleber", 20, "ninja");
let pedro = new heroi("Pedro", 20, "desconhecido");

joao.atacar();
leticia.atacar();
lucas.atacar();
cleber.atacar();
pedro.atacar();