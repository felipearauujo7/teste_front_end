const cpf = document.getElementById('cpfInput');
const nascimento = document.getElementById('nascimentoInput');
const buscarCpf = document.querySelector('#buscarCpfInput');

cpf.addEventListener("keypress", () => {
    let cpfLength = cpf.value.length;

    if (cpfLength === 3 || cpfLength === 7) {
        cpf.value += '.'
    }
    if (cpfLength === 11) {
        cpf.value += '-'
    }

})

nascimento.addEventListener("keypress", () => {
    let nascimentoLength = nascimento.value.length;

    if (nascimentoLength === 2 || nascimentoLength === 5) {
        nascimento.value += '/'
    }
    
})

buscarCpf.addEventListener("keypress", () => {
    let buscarCpfLength = buscarCpf.value.length;

    if (buscarCpfLength === 3 || buscarCpfLength === 7) {
        buscarCpf.value += '.'
    }
    if (buscarCpfLength === 11) {
        buscarCpf.value += '-'
    }
})