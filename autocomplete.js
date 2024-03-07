const form = document.querySelector('#form-cadastro');
const cep = document.querySelector('#cepInput');
const endereco = document.querySelector('#enderecoInput');
const cidade = document.querySelector('#cidadeInput');
const bairro = document.querySelector('#bairroInput');
const estado = document.querySelector('#estadoSelect');
const formInputs = document.querySelectorAll("[data-input]");


cep.addEventListener("keypress", (e) => {

    const apenasNumeros = /[0-9]/;
    const digitado = String.fromCharCode(e.keyCode);

    if (!apenasNumeros.test(digitado)) {
        e.preventDefault();
        return;
    }
});

cep.addEventListener("keyup", (e) => {

    if (campos[3].value.length === 8) {

        obterEndereco(campos[3].value);
        removeError(3);

    } else {
        setError(3);
    }
});

const obterEndereco = async (cepApi) => {

    cep.blur();

    const apiUrl = `https://viacep.com.br/ws/${cepApi}/json/`;

    const resposta = await fetch(apiUrl);

    const dados = await resposta.json();

    disabledOff();

    endereco.value = dados.logradouro;
    bairro.value = dados.bairro;
    cidade.value = dados.localidade;
    estado.value = dados.uf;

    if (dados.erro === true) {
        setError(3);
        return;
    }

}

const disabledOff = () => {
    if (estado.hasAttribute("disabled")) {
        formInputs.forEach((input) => {
            input.removeAttribute("disabled");
        });
    } else {
        formInputs.forEach((input) => {
            input.setAttribute("disabled", "disabled");
        });
    }
};
