// script.js

let salgados = 20;
let precoSalgado = 5;
let totalVendido = 25;

function atualizarValores() {
    const vendasRealizadas = 5;
    salgados -= vendasRealizadas;
    totalVendido = vendasRealizadas * precoSalgado;

    document.getElementById('quantidadeSalgados').textContent = salgados;
    document.getElementById('totalVendido').textContent = totalVendido;
}

function aumentarSalgados() {
    salgados += 5;
    document.getElementById('quantidadeSalgados').textContent = salgados;
}

function diminuirSalgados() {
    if (salgados > 0) {
        salgados -= 5;
        document.getElementById('quantidadeSalgados').textContent = salgados;
    }
}

function alterarPreco() {
    let novoPreco = parseFloat(prompt("Digite o novo preço do salgado:"));
    if (!isNaN(novoPreco) && novoPreco > 0) {
        precoSalgado = novoPreco;
        document.getElementById('precoSalgado').textContent = precoSalgado;
    }
}

document.getElementById('atualizarValores').addEventListener('click', atualizarValores);
document.getElementById('aumentarSalgados').addEventListener('click', aumentarSalgados);
document.getElementById('diminuirSalgados').addEventListener('click', diminuirSalgados);
document.getElementById('alterarPreco').addEventListener('click', alterarPreco);

document.getElementById('quantidadeSalgados').textContent = salgados;
document.getElementById('precoSalgado').textContent = precoSalgado;
document.getElementById('totalVendido').textContent = totalVendido;
