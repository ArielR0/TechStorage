let carrinho = [];

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    atualizarInterface();
    abrirCarrinho();
}

function abrirCarrinho() {
    document.getElementById('modal-carrinho').classList.add('active');
}

function fecharModal() {
    document.getElementById('modal-carrinho').classList.remove('active');
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarInterface();
}

function atualizarInterface() {
    const container = document.getElementById('lista-itens-carrinho');
    const totalDisplay = document.getElementById('valor-total');
    const countDisplay = document.getElementById('cart-count');
    
    container.innerHTML = "";
    let soma = 0;

    carrinho.forEach((item, index) => {
        soma += item.preco;
        container.innerHTML += `
            <div class="item-carrinho">
                <div>
                    <strong>${item.nome}</strong><br>
                    R$ ${item.preco.toLocaleString('pt-BR')}
                </div>
                <button class="btn-remover" onclick="removerDoCarrinho(${index})">Remover</button>
            </div>
        `;
    });

    totalDisplay.innerText = `R$ ${soma.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
    countDisplay.innerText = carrinho.length;
}

function toggleSidebar() {
    const nav = document.getElementById('mainNav');
    nav.classList.toggle('active');
}

function abrirCarrinho() {
  document.getElementById('modal-carrinho').classList.add('active');
}

document.querySelector('.btn-checkout').addEventListener('click', () => {
    localStorage.setItem('carrinhoTechStore', JSON.stringify(carrinho));
    window.location.href = 'checkout.html';
});

function irParaCheckout() {
    // Transforma o array em texto para guardar no "armário"
    const dadosParaSalvar = JSON.stringify(carrinho); 
    
    // Guarda no LocalStorage
    localStorage.setItem('carrinhoTechStore', dadosParaSalvar);

    // Agora sim, muda de página
    window.location.href = 'checkout.html';
}