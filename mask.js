const cpf = document.getElementById('cpfInput');
const nascimento = document.getElementById('nascimentoInput');

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