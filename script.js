document.getElementById('options').addEventListener('change', function() {
    const filtro = this.value;
    const produtosTodos = document.querySelectorAll('.main-produtos');

    // Esconder todos os produtos
    produtosTodos.forEach(produto => {
        produto.style.display = 'none'; // Esconder todos os contêineres de produtos
    });

    // Mostrar produtos com base no filtro selecionado
    if (filtro === 'all') {
        produtosTodos.forEach(produto => {
            produto.style.display = 'flex'; // Mostrar todos os produtos
            produto.style.flexWrap = 'wrap'; // Permitir que os itens se movam para a próxima linha
        });
    } else {
        // Mostrar apenas os produtos filtrados
        const produtosFiltrados = document.querySelectorAll(`.produtos-${filtro}`);
        produtosFiltrados.forEach(produto => {
            produto.parentElement.style.display = 'flex'; // Mostrar apenas o contêiner do produto filtrado
            produto.parentElement.style.flexWrap = 'wrap'; // Permitir que os itens se movam para a próxima linha
        });
    }
});