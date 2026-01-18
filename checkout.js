
const carrinho = JSON.parse(localStorage.getItem('carrinhoTechStore')) || [];
const resumoContainer = document.getElementById('resumo-itens');
const totalFinal = document.getElementById('total-final');
const subtotal = document.getElementById('subtotal');

let soma = 0;
carrinho.forEach(item => {
    soma += item.preco;
    resumoContainer.innerHTML += `
        <div style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:0.9rem">
            <span>${item.nome}</span>
            <strong>R$ ${item.preco.toLocaleString('pt-BR')}</strong>
        </div>
    `;
});

subtotal.innerText = `R$ ${soma.toLocaleString('pt-BR')}`;
totalFinal.innerText = `R$ ${soma.toLocaleString('pt-BR')}`;

function irParaCheckout() {
    if (carrinho.length === 0) return;

    const btn = document.querySelector('.btn-checkout');
    btn.innerHTML = "Processando..."; // Feedback visual
    btn.style.opacity = "0.7";

    localStorage.setItem('carrinhoTechStore', JSON.stringify(carrinho));
    
  
    setTimeout(() => {
        window.location.href = 'checkout.html';
    }, 500);
}