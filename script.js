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