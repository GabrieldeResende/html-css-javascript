let numbers = [1, 2, 3]
let frutas = ["Banana", "Maçã", "Laranja"]

console.log(frutas);

let predio = ["terreo", "primeiro andar", "segundo andar", "terceiro andar", "quarto andar"]

console.log(predio);
console.log(predio[0]);
predio.pop()//retira o ultimo elemento
predio.shift()//retira o primeiro elemento

predio.push("quinto andar") //adiciona no ultimo elemento
console.log(predio);

predio.unshift("subsolo")//adiciona antes do primeiro elemento
console.log(predio);