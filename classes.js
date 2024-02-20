class hero{
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }
  attack() {
    let attack = "";

    if (this.type === "mago") {
      attack = "magia";
    } else if (this.type === "guerreiro") {
      attack = "espada";
    } else if (this.type === "monge") {
      attack = "artes marciais";
    } else if (this.type === "ninja") {
      attack = "shuriken";
    }
    return `O ${this.type} atacou usando ${attack}`;
  }
}

let heroMage = new hero("Dumbledore", "565", "mago");
let heroWarrior = new hero("Reacher", "35", "guerreiro");
let heroMonk = new hero("Aang", "112", "monge");
let heroNinja = new hero("Naruto", "30", "ninja");

console.log(heroMage.attack());
console.log(heroWarrior.attack());
console.log(heroMonk.attack());
console.log(heroNinja.attack());