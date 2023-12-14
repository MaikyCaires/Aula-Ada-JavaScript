let tarefas = []

//função para adicionar tarefa
function adicionarTarefa(){
    const tarefaID = 1
    const tarefaTitulo = "Estudar"
    const tarefaDescricao = "Estudar x horas por dia"
    tarefas.push({ID: tarefaID, Titulo: tarefaTitulo, Descricao: tarefaDescricao})
    console.log(tarefas)
}
adicionarTarefa()