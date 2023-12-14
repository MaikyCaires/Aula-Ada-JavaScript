const tasks = []; // Array para armazenar as tarefas

// Função para adicionar uma tarefa
function addTask() {
  // Solicita ao usuário o ID, título e descrição da tarefa
  const taskId = parseInt(prompt("Digite o ID da tarefa:"));
  const title = prompt("Digite o título da tarefa:");
  const description = prompt("Digite a descrição da tarefa:");

  // Verifica se a tarefa inserida é válida antes de adicioná-la
  if (validateTask(title, description)) {
    const existingTask = tasks.find(task => task.id === taskId);
    if (existingTask) {
      alert("Erro: Tarefa com este ID já existe.");
      return;
    }
    
    // Adiciona a tarefa ao array de tarefas
    tasks.push({ id: taskId, title, description });
    alert("Tarefa adicionada com sucesso!");
  }
}

// Função para editar uma tarefa existente
function editTask() {
  // Solicita ao usuário o ID da tarefa que deseja editar e os novos valores
  const taskId = parseInt(prompt("Digite o ID da tarefa que deseja editar:"));
  const title = prompt("Digite o novo título da tarefa:");
  const description = prompt("Digite a nova descrição da tarefa:");

  // Verifica se os novos valores são válidos antes de realizar a edição
  if (validateTask(title, description)) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
      // Atualiza o título e descrição da tarefa no array de tarefas
      tasks[taskIndex].title = title;
      tasks[taskIndex].description = description;
      alert("Tarefa editada com sucesso!");
    } else {
      alert("Erro: Tarefa não encontrada.");
    }
  }
}

// Função para remover uma tarefa
function removeTask() {
  // Solicita ao usuário o ID da tarefa que deseja remover
  const taskId = parseInt(prompt("Digite o ID da tarefa que deseja remover:"));

  const taskIndex = tasks.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
    // Remove a tarefa do array de tarefas
    tasks.splice(taskIndex, 1);
    alert("Tarefa removida com sucesso!");
  } else {
    alert("Erro: Tarefa não encontrada.");
  }
}

// Função para listar todas as tarefas
function listAllTasks() {
  let taskList = "Lista de Tarefas:\n";
  tasks.forEach(task => {
    // Cria uma lista com todas as tarefas existentes
    taskList += `ID: ${task.id}, Título: ${task.title}, Descrição: ${task.description}\n`;
  });
  alert(taskList);
}

// Função para obter uma tarefa pelo ID
function getTaskById() {
  // Solicita ao usuário o ID da tarefa que deseja visualizar
  const taskId = parseInt(prompt("Digite o ID da tarefa que deseja visualizar:"));
  const task = tasks.find(task => task.id === taskId);
  if (task) {
    // Exibe os detalhes da tarefa com o ID informado
    alert(`Tarefa encontrada - ID: ${task.id}, Título: ${task.title}, Descrição: ${task.description}`);
  } else {
    alert("Erro: Tarefa não encontrada.");
  }
}

// Função para validar se os dados da tarefa são válidos
function validateTask(title, description) {
  if (!title || !description) {
    alert("Erro: Título e descrição não podem estar vazios.");
    return false;
  }
  if (!isNaN(title)) {
    alert("Erro: O título não pode conter apenas números.");
    return false;
  }
  if (title.length < 4) {
    alert("Erro: O título deve ter no mínimo 4 caracteres.");
    return false;
  }
  if (description.length < 20) {
    alert("Erro: A descrição deve ter no mínimo 20 caracteres.");
    return false;
  }
  return true;
}

// Loop para mostrar um menu de opções ao usuário
while (true) {
  const option = parseInt(prompt(
    "Escolha uma opção:\n" +
    "1 - Adicionar tarefa\n" +
    "2 - Editar tarefa\n" +
    "3 - Remover tarefa\n" +
    "4 - Listar todas as tarefas\n" +
    "5 - Obter tarefa por ID\n" +
    "6 - Sair"
  ));

  switch (option) {
    case 1:
      addTask();
      break;
    case 2:
      editTask();
      break;
    case 3:
      removeTask();
      break;
    case 4:
      listAllTasks();
      break;
    case 5:
      getTaskById();
      break;
    case 6:
      alert("Saindo da aplicação...");
      break;
    default:
      alert("Opção inválida, tente novamente.");
      break;
  }

  if (option === 6) {
    break;
  }
}

