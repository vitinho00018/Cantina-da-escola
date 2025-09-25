// script.js

// Variáveis iniciais
let nomeCantina = "Cantina da Escola";
let salgados = 20;
const precoSalgado = 5;
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

// Adicionando um evento de clique ao botão para atualizar os valores
document.getElementById('atualizarValores').addEventListener('click', atualizarValores);

// Testando alteração de preço com try-catch para erro
try {
    precoSalgado = 6; // Isso vai gerar um erro porque `precoSalgado` é uma constante
} catch (error) {
    console.log("Erro ao tentar mudar precoSalgado: " + error.message);
}

// Teste de escopo de var e let
if (true) {
    var testeVar = "Sou var"; // var tem escopo global ou de função
    let testeLet = "Sou let"; // let tem escopo de bloco
    console.log(testeVar); // funciona
    console.log(testeLet); // funciona
}

console.log(testeVar); // funciona porque var é global ou de função
try {
    console.log(testeLet); // Gera erro porque let é de escopo de bloco
} catch (error) {
    console.log("Erro ao acessar testeLet: " + error.message);
}
