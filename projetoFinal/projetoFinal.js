// Função de validação para verificar os dados da tarefa
function validarTarefa(titulo, descricao) {
    if (!titulo || !descricao) {
      alert("Erro: Título e descrição não podem estar vazios.")
      return false
    }
    if (!isNaN(titulo)) {
      alert("Erro: O título não pode conter apenas números.")
      return false
    }
    if (titulo.length < 4) {
      alert("Erro: O título deve ter no mínimo 4 caracteres.")
      return false
    }
    if (descricao.length < 20) {
      alert("Erro: A descrição deve ter no mínimo 20 caracteres.")
      return false
    }
    return true
  }
  
  // função para adicionar tarefa
  function adicionarTarefa() {
      const tarefaID = parseInt(prompt("Digite o ID da tarefa"))
      const tarefaTitulo = prompt("Digite o título da tarefa")
      const tarefaDescricao = prompt("Digite a descrição da tarefa")
  
      // Validar os dados inseridos usando a função validarTarefa
      if (validarTarefa(tarefaTitulo, tarefaDescricao)) {
          const tarefaRepetida = tarefas.findIndex(tarefa => tarefaID === tarefa.ID)
          if (tarefaRepetida === -1) {
              tarefas.push({ ID: tarefaID, Titulo: tarefaTitulo, Descricao: tarefaDescricao })
              alert("Tarefa adicionada com sucesso")
          } else {
              alert("Tarefa repetida")
          }
      }
  }
  
  // função remover tarefa
  function removerTarefa() {
      const tarefaID = parseInt(prompt("Digite o ID da tarefa que deseja remover"))
  
      const remover = tarefas.findIndex(tarefa => tarefaID === tarefa.ID)
  
      if (remover !== -1) {
          tarefas.splice(remover, 1)
          alert("Tarefa removida ")
      } else {
          alert("Tarefa não encontrada")
      }
  }
  
  // função que mostra tarefa pelo id
  function tarefaID(){
      const tarefaID = parseInt(prompt("Digite o ID da tarefa que deseja ver"))
  
      const obterTarefaIndex = tarefas.findIndex(tarefa => tarefaID === tarefa.ID)
      if (obterTarefaIndex !== -1) {
          const tarefaEncontrada = tarefas[obterTarefaIndex]
          alert(`Tarefa encontrada - ID: ${tarefaEncontrada.ID}, Título: ${tarefaEncontrada.Titulo}, Descrição: ${tarefaEncontrada.Descricao}`)
      } else {
          alert("Erro: Tarefa não encontrada.")
      }
  }
  
  // função para editar uma tarefa existente
  function editarTarefa() {
      const tarefaID = parseInt(prompt("Digite o ID da tarefa que deseja editar"))
  
      const editarIndex = tarefas.findIndex(tarefa => tarefaID === tarefa.ID)
  
      if (editarIndex !== -1) {
          const novoTitulo = prompt("Digite o novo título da tarefa")
          const novaDescricao = prompt("Digite a nova descrição da tarefa")
  
          // Validar os dados inseridos usando a função validarTarefa
          if (validarTarefa(novoTitulo, novaDescricao)) {
              tarefas[editarIndex].Titulo = novoTitulo
              tarefas[editarIndex].Descricao = novaDescricao
              alert("Tarefa editada com sucesso")
          }
      } else {
          alert("Tarefa não encontrada")
      }
  }
  
  // Mensagem inicial
  while (true) {
      const opcao = parseInt(prompt(
          "Escolha uma das opções\n" +
          "0 - Sair do programa\n" +
          "1 - Adicionar uma tarefa\n" +
          "2 - Mostrar tarefas\n" +
          "3 - Remover tarefa\n" +
          "4 - Mostrar tarefa por ID\n" +
          "5 - Editar tarefa"
      ));
  
      // chama a função correspondente com a validação dos dados
      switch(opcao){
          case 1:
              adicionarTarefa()
              break
          case 2:
              mostraTarefas()
              break
          case 3:
              removerTarefa()
              break
          case 4:
              tarefaID()
              break
          case 5:
              editarTarefa()
              break
      }
  
      // sair do programa
      if(opcao === 0){
          alert("Saindo do programa")
          break
      }
  }
  



