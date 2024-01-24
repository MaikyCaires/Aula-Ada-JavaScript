const input = document.querySelector("input#nome");
const lista = document.querySelector("#lista");
const botao = document.querySelector("#botao");

// Recupera as tarefas salvas no localStorage ao carregar a página
const tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];

// Função para salvar as tarefas no localStorage
function salvarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(tarefasSalvas));
}

// Função para criar um novo item
function criarNovoItem(texto, concluida) {
    const novoItem = document.createElement("li");
    const checkbox = document.createElement("input");
    const botaoDelete = document.createElement("button");

    novoItem.textContent = texto;
    novoItem.classList.add("tarefa-item");
    checkbox.setAttribute("type", "checkbox");
    botaoDelete.innerHTML = "❌";

    novoItem.appendChild(checkbox);
    novoItem.appendChild(botaoDelete);

    lista.appendChild(novoItem);

    if (concluida) {
        novoItem.style.textDecoration = "line-through";
        checkbox.checked = true;
    }

    botaoDelete.addEventListener("click", () => {
        lista.removeChild(novoItem);
        const index = tarefasSalvas.findIndex(tarefa => tarefa.texto === texto);
        tarefasSalvas.splice(index, 1);
        salvarTarefas();
    });

    checkbox.addEventListener("click", () => {
        novoItem.style.textDecoration = checkbox.checked ? "line-through" : "none";
        const index = tarefasSalvas.findIndex(tarefa => tarefa.texto === texto);
        tarefasSalvas[index].concluida = checkbox.checked;
        salvarTarefas();
    });
}

// Adiciona as tarefas salvas ao carregar a página
tarefasSalvas.forEach(tarefa => criarNovoItem(tarefa.texto, tarefa.concluida));

// Evento para adicionar uma nova tarefa
botao.addEventListener("click", () => {
    if (input.value.length <= 2 || !isNaN(input.value)) {
        alert("A tarefa tem que ter mais que duas letras e não pode ser um numero");
    } else {
        criarNovoItem(input.value, false);
        tarefasSalvas.push({ texto: input.value, concluida: false });
        salvarTarefas();
        input.value = "";
    }
});
