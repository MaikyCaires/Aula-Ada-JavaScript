let tarefas = [];

//função para adicionar tarefa
function adicionarTarefa(){
    try {
        const tarefaID = parseInt(prompt("Digite o ID da tarefa"))
        const tarefaTitulo = prompt("Digite o título da tarefa")
        const tarefaDescricao = prompt("Digite a descrição da tarefa")

        if (!tarefaTitulo || !tarefaDescricao) {
            throw new Error("O título e a descrição não podem estar vazios.")
        }

        const tarefaRepetida = tarefas.findIndex(tarefa => tarefaID === tarefa.ID)
        if (tarefaRepetida !== -1) {
            throw new Error("Tarefa repetida.")
        }

        tarefas.push({ID: tarefaID, Titulo: tarefaTitulo, Descricao: tarefaDescricao})
        alert("Tarefa adicionada com sucesso.")
    } catch (error) {
        alert("Erro: " + error.message)
    }
}

//função que mostra as tarefas
function mostraTarefas(){
    let detalhesTarefas = "Lista de Tarefas:\n"
    tarefas.forEach(tarefa => {
        detalhesTarefas += `ID: ${tarefa.ID}, Título: ${tarefa.Titulo}, Descrição: ${tarefa.Descricao}\n`
    });
    alert(detalhesTarefas)
}

//função remover tarefa
function removerTarefa() {
    try {
        const tarefaID = parseInt(prompt("Digite o ID da tarefa que deseja remover"))
        const remover = tarefas.findIndex(tarefa => tarefaID === tarefa.ID)

        if (remover === -1) {
            throw new Error("Tarefa não encontrada.");
        }

        tarefas.splice(remover, 1)
        alert("Tarefa removida.")
    } catch (error) {
        alert("Erro: " + error.message)
    }
}

//função que mostra tarefa pelo id
function tarefaID(){
    try {
        const tarefaID = parseInt(prompt("Digite o ID da tarefa que deseja ver"))
        const obterTarefaIndex = tarefas.findIndex(tarefa => tarefaID === tarefa.ID)

        if (obterTarefaIndex === -1) {
            throw new Error("Tarefa não encontrada.")
        }

        const tarefaEncontrada = tarefas[obterTarefaIndex]
        alert(`Tarefa encontrada - ID: ${tarefaEncontrada.ID}, Título: ${tarefaEncontrada.Titulo}, Descrição: ${tarefaEncontrada.Descricao}`)
    } catch (error) {
        alert("Erro: " + error.message)
    }
}

// função que edita tarefa
function editarTarefa() {
    try {
        const tarefaID = parseInt(prompt("Digite o ID da tarefa que deseja editar"))
        const indiceTarefa = tarefas.findIndex(tarefa => tarefa.ID === tarefaID)

        if (indiceTarefa === -1) {
            throw new Error("Tarefa não encontrada.")
        }

        const tarefa = tarefas[indiceTarefa];
        const novoTitulo = prompt("Digite o novo título da tarefa")
        const novaDescricao = prompt("Digite a nova descrição da tarefa")

        if (!novoTitulo || !novaDescricao || !isNaN(novoTitulo) || novoTitulo.length < 4 || novaDescricao.length < 20) {
            throw new Error("Verifique os requisitos de título e descrição.")
        }

        const tarefaRepetida = tarefas.find(tarefa => tarefa.Titulo === novoTitulo && tarefa.ID !== tarefaID)
        if (tarefaRepetida) {
            throw new Error("Já existe uma tarefa com este título.")
        }

        tarefas[indiceTarefa].Titulo = novoTitulo
        tarefas[indiceTarefa].Descricao = novaDescricao
        alert("Tarefa editada com sucesso.")
    } catch (error) {
        alert("Erro: " + error.message)
    }
}

//Mensagem inicial
while (true) {
    const opcao = parseInt(prompt(
        "Escolha um das opções\n" +
        "0- Sair do programa\n" +
        "1- Adicionar uma tarefa\n" +
        "2- Mostrar tarefas\n" +
        "3- Remover tarefa\n" +
        "4- Mostrar tarefa por ID\n" +
        "5- Editar tarefa"
    ));

    // chama a função
    switch(opcao){
        case 1:
            adicionarTarefa();
            break;
        case 2:
            mostraTarefas();
            break;
        case 3:
            removerTarefa();
            break;
        case 4:
            tarefaID();
            break;
        case 5:
            editarTarefa();
            break;
    }

    //sair do programa
    if(opcao === 0){
        alert("Saindo do programa");
        break;
    }
}
