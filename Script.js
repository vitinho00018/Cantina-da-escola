// script.js

// Variáveis iniciais
let nomeCantina = "Cantina da Escola";
let salgados = 20;
let precoSalgado = 5;
let totalVendido = 25;

// Atualizando os elementos na página com os valores iniciais
document.getElementById('quantidadeSalgados').textContent = salgados;
document.getElementById('precoSalgado').textContent = precoSalgado;
document.getElementById('totalVendido').textContent = totalVendido;

// Função para atualizar os valores
function atualizarValores() {
    // Vendas realizadas (simulação de 5 vendas)
    let vendasRealizadas = 5;

    // Atualizando a quantidade de salgados
    salgados -= vendasRealizadas;
    totalVendido = vendasRealizadas * precoSalgado;

    // Atualizando a exibição na página
    document.getElementById('quantidadeSalgados').textContent = salgados;
    document.getElementById('totalVendido').textContent = totalVendido;

    // Log no console
    console.log(`Agora restam ${salgados} salgados.`);
    console.log(`A cantina vendeu R$${totalVendido} até agora.`);
}

// Função para aumentar os salgados
function aumentarSalgados() {
    salgados += 5;
    document.getElementById('quantidadeSalgados').textContent = salgados;
    console.log(`Salgados aumentados! Agora temos ${salgados} salgados.`);
}

// Função para diminuir os salgados
function diminuirSalgados() {
    if (salgados > 0) {
        salgados -= 5;
        document.getElementById('quantidadeSalgados').textContent = salgados;
        console.log(`Salgados diminuídos! Agora temos ${salgados} salgados.`);
    } else {
        console.log("Não há salgados suficientes para diminuir.");
    }
}

// Função para alterar o preço do salgado
function alterarPreco() {
    let novoPreco = parseFloat(prompt("Digite o novo preço do salgado:"));
    if (!isNaN(novoPreco) && novoPreco > 0) {
        precoSalgado = novoPreco;
        document.getElementById('precoSalgado').textContent = precoSalgado;
        console.log(`Preço do salgado alterado para R$${precoSalgado}.`);
    } else {
        console.log("Por favor, insira um preço válido.");
    }
}

// Adicionando os eventos de clique aos botões
document.getElementById('atualizarValores').addEventListener('click', atualizarValores);
document.getElementById('aumentarSalgados').addEventListener('click', aumentarSalgados);
document.getElementById('diminuirSalgados').addEventListener('click', diminuirSalgados);
document.getElementById('alterarPreco').addEventListener('click', alterarPreco);
