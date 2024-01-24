const lista = 'régua/valor3=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;estojo/valor8=cupom0;cola/valor4=cupom0;cola/valor4=cupom0;mochila/valor50=cupom10;lápis/valor0.5=cupom0;cola/valor4=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;tesoura/valor5=cupom0;caneta/valor1=cupom0;cola/valor4=cupom0;estojo/valor8=cupom0;borracha/valor2=cupom0;caderno/valor15=cupom5;lápis/valor0.5=cupom0;lápis/valor0.5=cupom0;tesoura/valor5=cupom0;'



let produtos = lista.split(";")

produtos  = produtos.filter(produto => produto != '')
console.log(produtos)

const listaProdutos = []
produtos.forEach(produto => {
    const [nomeProduto, restante]= produto.split('/valor')
    const [preco, cupom]= restante.split("=cupom")
    console.log(nomeProduto)

    const posicao = listaProdutos.findIndex((produto)=> nomeProduto == produto.produto)
    if(posicao == -1){
        listaProdutos.push({produto: nomeProduto, valor: +preco, cupom: +cupom, quantidade: 1})
    }else{
        listaProdutos[posicao].quantidade++
    }
    
})