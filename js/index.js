let contador = 0;
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let section = document.getElementById("areaLista");

function addTarefa() {
  // Pegar o valor digitado no Input
  let valorInput = input.value;

  // Se não for vazio, nem nulo, nem indefinido
  if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {
    // Adicionar +1 ao contador
    ++contador;

    let novoItem = `<div class="comentario" id="${contador}">
    <div onclick="marcarTarefa(${contador})" id="item-icone">
      <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
    </div>
    <div id="item-nome" onclick="marcarTarefa(${contador})">
      ${valorInput}
    </div>
    <div id="item-botao">
      <button class="delete" onclick="deletar(${contador})"><i class="mdi mdi-delete"></i>Deletar</button>
    </div>
  </div>`;

    // Adicionar novo item ao Section
    section.innerHTML += novoItem;

    // Zerar os campinhos
    input.value = "";
    input.focus();
  }
}

// Função para deletar item da lista
function deletar(id) {
  var tarefa = document.getElementById(id);
  tarefa.remove();
}

// Fazer a lista ficar responsiva à tecla enter
input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    btnAdd.click();
  }
});

// Função para marcar item da lista e mudar icone
function marcarTarefa(id) {
  var item = document.getElementById(id);
  var classe = item.getAttribute("class");

  if (classe == "comentario") {
    item.classList.add("clicado");

    var icone = document.getElementById("icone_" + id);
    icone.classList.remove("mdi-circle-outline");
    icone.classList.add("mdi-check-circle");

    item.parentNode.appendChild(item);
  } else {
    item.classList.remove("clicado");

    var icone = document.getElementById("icone_" + id);
    icone.classList.add("mdi-circle-outline");
    icone.classList.remove("mdi-check-circle");
  }
}
