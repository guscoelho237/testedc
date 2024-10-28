// carrinho.js

// Exemplo de produtos para simular o carrinho
const produtos = [
    { id: 1, nome: "HQ A", preco: 29.90 },
    { id: 2, nome: "HQ B", preco: 39.90 },
    { id: 3, nome: "HQ C", preco: 49.90 }
];

// Carrinho inicial vazio
let carrinho = [];

// Função para adicionar item ao carrinho
function adicionarAoCarrinho(produto) {
    const itemCarrinho = carrinho.find(item => item.id === produto.id);
    
    if (itemCarrinho) {
        itemCarrinho.quantidade++;
    } else {
        carrinho.push({ ...produto, quantidade: 1 });
    }
    atualizarCarrinho();
}

// Função para atualizar o carrinho na tela
function atualizarCarrinho() {
    const itensCarrinho = document.getElementById('itens-carrinho');
    const totalElement = document.getElementById('total');

    itensCarrinho.innerHTML = ""; // Limpa itens do carrinho
    let total = 0;

    if (carrinho.length === 0) {
        itensCarrinho.innerHTML = "<p>Seu carrinho está vazio.</p>";
    } else {
        carrinho.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item-carrinho');
            itemDiv.innerHTML = `
                <h3>${item.nome}</h3>
                <p>R$ ${item.preco.toFixed(2)} x ${item.quantidade}</p>
                <button onclick="removerDoCarrinho(${item.id})">Remover</button>
            `;
            itensCarrinho.appendChild(itemDiv);
            total += item.preco * item.quantidade;
        });
    }

    totalElement.innerText = total.toFixed(2);
}

// Função para remover item do carrinho
function removerDoCarrinho(id) {
    carrinho = carrinho.filter(item => item.id !== id);
    atualizarCarrinho();
}

// Exemplo de como adicionar produtos ao carrinho
produtos.forEach(produto => adicionarAoCarrinho(produto)); // Adiciona todos os produtos como exemplo
