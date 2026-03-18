const pedidos = [
  { id: 1, cliente: "Ana", total: 120, status: "aprovado" },
  { id: 2, cliente: "Bruno", total: 80, status: "pendente" },
  { id: 3, cliente: "Ana", total: 200, status: "aprovado" },
  { id: 4, cliente: "Carlos", total: 50, status: "cancelado" },
  { id: 5, cliente: "Bruno", total: 150, status: "aprovado" }
];

// 1) Pedidos aprovados
const aprovados = pedidos.filter(p => p.status === "aprovado");
console.log("Pedidos aprovados:", aprovados);

// 2) Nomes dos clientes dos pedidos aprovados
const nomes = aprovados.map(p => p.cliente);
console.log("Clientes:", nomes);

// 3) Total de vendas aprovadas
const totalVendas = aprovados.reduce((acc, p) => acc + p.total, 0);
console.log("Total de vendas:", totalVendas);

// 4) Média das vendas
const mediaVendas = totalVendas / aprovados.length;
console.log("Média das vendas:", mediaVendas);

// 5) Agrupar pedidos por cliente
const agrupados = pedidos.reduce((acc, p) => {
  if (!acc[p.cliente]) {
    acc[p.cliente] = [];
  }
  acc[p.cliente].push(p);
  return acc;
}, {});
console.log("Agrupados por cliente:", agrupados);

// 6) Classe Pedido
class Pedido {
  constructor(id, cliente, total, status) {
    this.id = id;
    this.cliente = cliente;
    this.total = total;
    this.status = status;
  }

  isAprovado() {
    return this.status === "aprovado";
  }
}

const pedidosClasse = pedidos.map(
  p => new Pedido(p.id, p.cliente, p.total, p.status)
);
console.log("Pedidos com classe:", pedidosClasse);

// 7) Função pura
const calcularTotalCliente = (pedidos, nomeCliente) => {
  return pedidos
    .filter(p => p.cliente === nomeCliente)
    .reduce((acc, p) => acc + p.total, 0);
};

console.log("Total Ana:", calcularTotalCliente(pedidos, "Ana"));
console.log("Total Bruno:", calcularTotalCliente(pedidos, "Bruno"));

// 8) Total por cliente apenas dos aprovados
const resultado = Object.entries(
  pedidos
    .filter(p => p.status === "aprovado")
    .reduce((acc, p) => {
      acc[p.cliente] = (acc[p.cliente] || 0) + p.total;
      return acc;
    }, {})
).map(([cliente, total]) => ({ cliente, total }));

console.log("Resultado final:", resultado);

// 9) Ordenar pelo maior valor gasto
const ordenado = [...resultado].sort((a, b) => b.total - a.total);
console.log("Ordenado:", ordenado);

// 10) Cliente que mais comprou
console.log("Cliente que mais comprou:", ordenado[0]);

// 11) Converter para JSON
console.log("JSON:");
console.log(JSON.stringify(resultado, null, 2));

// 12) var
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log("var:", i);
  }, 100);
}

// 13) let
for (let j = 0; j < 3; j++) {
  setTimeout(() => {
    console.log("let:", j);
  }, 100);
}