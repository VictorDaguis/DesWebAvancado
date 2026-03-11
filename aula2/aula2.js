
let nome = "Carlos"
let idade = 30.9
let ativo = true

console.log(typeof nome)
console.log(typeof idade)
console.log(typeof ativo)


let x = 10
let y = "10"

console.log(x == y)

console.log(x === y)
console.log("FOR")

let numeros = [1, 5, 3, 9]

for(let n of numeros){
console.log(n)
}

function soma(a, b){
    return a+b
}

console.log(soma(2, 8))
console.log(soma("iua", 8))
console.log(soma(1.9, 8))



const usuarios = [
  { nome: "Ana", idade: 20, ativo: true, compras: [100, 50, 25] },
  { nome: "Bruno", idade: 17, ativo: false, compras: [30, 20] },
  { nome: "Carlos", idade: 32, ativo: true, compras: [200, 150, 50, 100] },
  { nome: "Diana", idade: 25, ativo: true, compras: [] },
  { nome: "Eduardo", idade: 15, ativo: false, compras: [10] }
];

usuarios.forEach(u => {
    const totalCompras = u.compras.reduce((sum, value) => sum + value, 0);
    console.log(`${u.nome}: total = ${totalCompras}`);
});

const ativos = usuarios
    .filter(u => u.ativo)
    .map(u => u.nome);

console.log("\nUsuários ativos:");
ativos.forEach(nome => console.log(nome));




