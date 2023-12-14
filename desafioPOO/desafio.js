class Cliente {
    constructor(nome, endereco) {
      this.nome = nome
      this.endereco = endereco
      this.pedidos = []
    }
  
    fazerPedido(restaurante, items) {
      const pedido = new Pedido(this, restaurante, items)
      this.pedidos.push(pedido)
      restaurante.receberPedido(this, items)
    }
  
    consultarPedidos() {
      return this.pedidos
    }
  }
  
  class Restaurante {
    constructor(nome, menu) {
      this.nome = nome
      this.menu = menu
    }
  
    exibirMenu() {
      console.log(`Menu do ${this.nome}:`)
      for (const item in this.menu) {
        console.log(`${item}: R$${this.menu[item]}`)
      }
    }
  
    receberPedido(cliente, items) {
      console.log(`Pedido recebido do cliente ${cliente.nome} para o restaurante ${this.nome}`)
    }
  }
  
  class Pedido {
    constructor(cliente, restaurante, itens) {
      this.cliente = cliente
      this.restaurante = restaurante
      this.itens = itens
      this.status = "pendente"
      this.total = this.calcularTotal()
    }
  
    calcularTotal() {
      let total = 0
      for (const item in this.itens) {
        total += this.itens[item] * this.restaurante.menu[item]
      }
      return total
    }
  
    atualizarStatus(status) {
      this.status = status
    }
  }
  
  const cliente1 = new Cliente("João", "Rua A, 123")
  const restaurante1 = new Restaurante("Restaurante A", {
    Pizza: 15,
    Hamburguer: 10,
    Salada: 8
  })
  
  cliente1.fazerPedido(restaurante1, { Pizza: 2, Hamburguer: 1 })
  
  restaurante1.exibirMenu()
  
  const pedidosCliente1 = cliente1.consultarPedidos()
  console.log(`Pedidos do cliente:`, pedidosCliente1)
  
  if (pedidosCliente1.length > 0) {
    const pedidoCliente1 = pedidosCliente1[0]
    console.log(`Total do pedido: R$${pedidoCliente1.total}`)
  
    pedidoCliente1.atualizarStatus("em andamento")
    console.log(`Status do pedido: ${pedidoCliente1.status}`)
  }
  