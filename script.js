// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(event) {
    // Verifica se o botão clicado é um botão "Comprar"
    if (event.target.classList.contains('comprar-btn')) {
      // Obtém os dados do produto
      const nome = event.target.getAttribute('data-name');
      const preco = event.target.getAttribute('data-price');
      const imagem = event.target.getAttribute('data-image');
  
      // Cria um objeto representando o produto
      const produto = {
        nome: nome,
        preco: preco,
        imagem: imagem,
      };
  
      // Obtém o carrinho atual do localStorage
      let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  
      // Adiciona o produto ao carrinho
      carrinho.push(produto);
  
      // Salva o carrinho atualizado no localStorage
      localStorage.setItem('carrinho', JSON.stringify(carrinho));
  
      alert('Produto adicionado ao carrinho!');
    }
  }
  
  // Adiciona um event listener para os botões "Comprar"
  document.addEventListener('click', adicionarAoCarrinho);



document.getElementById('options').addEventListener('change', function() {
    const filtro = this.value;
    const produtosTodos = document.querySelectorAll('.main-produtos');

    
    produtosTodos.forEach(produto => {
        produto.style.display = 'none'; 
    });

    if (filtro === 'all') {
        produtosTodos.forEach(produto => {
            produto.style.display = 'flex'; 
            produto.style.flexWrap = 'wrap'; 
        });
    } else {
        const produtosFiltrados = document.querySelectorAll(`.produtos-${filtro}`);
        produtosFiltrados.forEach(produto => {
            produto.parentElement.style.display = 'flex'; 
            produto.parentElement.style.flexWrap = 'wrap'; 
        });
    }
});


// carrinho
document.querySelectorAll('.comprar-btn').addEventListener('click' , function(){
    
})