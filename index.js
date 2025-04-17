let display = document.getElementById("display");

function limpar() {
    display.value = '';
}

function adicionarValor(valor) {
    display.value += valor;
}

function calcular() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Erro';
    }
}
