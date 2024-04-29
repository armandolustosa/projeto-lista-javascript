document.getElementById("texto").innerHTML =
  "Meu primeiro texto <strong>JS</strong>";

var nome, sobrenome, nomeCompleto;

nome = "Armando";
sobrenome = "Lustosa";
nomeCompleto = nome + " " + sobrenome;

document.getElementById("perfil").innerHTML = nomeCompleto;

var x = true;
var y = false;
var igualdade = x && y; // Operador de igualdade
var igualdadeReal = x > y;

console.log(igualdade);
console.log(igualdadeReal);

var x = 5,
  y = 10;
var resultado = (x--, y++, x + y); // Operador de sequência
console.log(resultado); // 15

function minhaFuncao(x, y) {
  return x + y;
}
console.log(minhaFuncao(10, 23)); // 33

const pessoa = {
  nome: "João",
  idade: 30,
  cidade: "São Paulo",
  apresentar: function () {
    return (
      "Olá, eu me chamo " +
      this.nome +
      ", tenho " +
      this.idade +
      " anos e sou da cidade de " +
      this.cidade +
      "!"
    );
  },
};

console.log(pessoa.apresentar());

var mensagemBotao = "O botão foi clicado!";

function eventoClick() {
  document.getElementById("aparece").innerHTML = mensagemBotao;
}

function viraVermelho() {
  let div = document.getElementById("teste");
  div.style.backgroundColor = "red";
}

function viraAzul() {
  let div = document.getElementById("teste");
  div.style.backgroundColor = "blue";
}

var lista = ["arroz", "feijão", "macarrão", "leite"];
var outroArray = ["ovo", "carne"];

var numeros = [1, 4, 3, 6, 2, 5];
numeros.sort();

var total = lista.reduce(function (resultado, elemento) {
  return resultado + elemento;
});

var encontrar = lista.indexOf("leite");

var novoArray = lista.concat(outroArray);

var agora = new Date();
var hora = agora.getHours();
var saudacao;

switch (true) {
  case hora < 12:
    saudacao = 'Bom dia!';
    break;
  case hora < 18:
    saudacao = 'Boa tarde!';
    break;
  default:
    saudacao = 'Boa noite!';
}

console.log(saudacao);

var i = 0;
while (i < 0) {
    console.log(i);
    i++;
}

