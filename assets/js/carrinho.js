// Função para adicionar item ao carrinho
function adicionarAoCarrinho(nome, preco, imagem) {
    // Recupera o carrinho atual do localStorage ou cria um novo array vazio
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    // Adiciona o novo item ao carrinho
    carrinho.push({
        nome: nome,
        preco: preco,
        imagem: imagem
    });
    
    // Salva o carrinho atualizado no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    
    // Mostra mensagem de sucesso
    alert('Produto adicionado ao carrinho!');
    
    // Atualiza o contador do carrinho
    atualizarContadorCarrinho();
}

// Função para atualizar o contador do carrinho
function atualizarContadorCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const contador = document.getElementById('contador-carrinho');
    if (contador) {
        contador.textContent = carrinho.length;
    }
}

// Função para mostrar o carrinho
function mostrarCarrinho() {
    window.location.href = 'carrinho.html';
}

// Função para remover item do carrinho
function removerDoCarrinho(index) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    carregarCarrinho();
    atualizarContadorCarrinho();
}

// Função para finalizar a compra
function finalizarCompra() {
    alert('Compra finalizada com sucesso!');
    localStorage.removeItem('carrinho');
    carregarCarrinho();
    atualizarContadorCarrinho();
}

// Inicializa o contador do carrinho quando a página carrega
document.addEventListener('DOMContentLoaded', atualizarContadorCarrinho); 