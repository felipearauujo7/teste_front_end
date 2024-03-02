
function cadastrarUsuario() {
    let nome = document.querySelector('#nomeInput').value;
    let sobrenome = document.querySelector('#sobrenomeInput').value;
    let cpf = document.querySelector('#cpfInput').value;
    let nascimento = document.querySelector('#nascimentoInput').value;
    let cep = document.querySelector('#cepInput').value;
    let endereco = document.querySelector('#enderecoInput').value;
    let numero = document.querySelector('#numeroInput').value;
    let complemento = document.querySelector('#complementoInput').value;
    let cidade = document.querySelector('#cidadeInput').value;
    let estado = document.querySelector('#estadoInput').value;

    const usuario = {
        nome: nome,
        sobrenome: sobrenome,
        cpf: cpf,
        nascimento: nascimento,
        cep: cep,
        endereco: endereco,
        numero: numero,
        complemento: complemento,
        cidade: cidade,
        estado: estado
    };

    let usuarios = localStorage.getItem("usuarios");
    usuarios = usuarios ? JSON.parse(usuarios) : [];
    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Usuário cadastrado com sucesso!");

}

function exibirUsuariosCadastrados() {
    let formulario = document.querySelector('#form-cadastro');
    let consulta = document.querySelector('#consulta');
    formulario.style.display = 'none';
    consulta.style.display = 'block';

    let usuarios = localStorage.getItem("usuarios");
    usuarios = usuarios ? JSON.parse(usuarios) : [];

    let tabela = document.querySelector('#tabelaConsulta tbody');
    tabela.innerHTML = '';

    usuarios.forEach(user => {
        let row = tabela.insertRow();

        let cellNome = row.insertCell();
        let cellCpf = row.insertCell();
        let cellNascimento = row.insertCell();
        let cellEndereco = row.insertCell();

        cellNome.textContent = `${user.nome} ${user.sobrenome}`;
        cellCpf.textContent = user.cpf;
        cellNascimento.textContent = user.nascimento;
        cellEndereco.textContent = `${user.endereco}, ${user.numero}, ${user.complemento}, ${user.cidade}/${user.estado}, ${user.cep}`;
    });
}

function buscarUsuarioPorCpf() {
    let cpfBuscado = document.querySelector('#buscarCpfInput').value.trim();
    let usuarios = localStorage.getItem("usuarios");
    usuarios = usuarios ? JSON.parse(usuarios) : [];

    if (cpfBuscado === '') {
        alert("Por favor, digite um CPF válido!");
        return;
    }

    let tabela = document.querySelector('#tabelaConsulta tbody');
    tabela.innerHTML = '';

    let usuarioEncontrado = false;

    usuarios.forEach(user => {
        if (user.cpf === cpfBuscado) {
            let row = tabela.insertRow();
            let cellNome = row.insertCell();
            let cellCpf = row.insertCell();
            let cellNascimento = row.insertCell();
            let cellEndereco = row.insertCell();
            cellNome.textContent = `${user.nome} ${user.sobrenome}`;
            cellCpf.textContent = user.cpf;
            cellNascimento.textContent = user.nascimento;
            cellEndereco.textContent = `${user.endereco}, ${user.numero}, ${user.complemento}, ${user.cidade}/${user.estado}, ${user.cep}`;
            usuarioEncontrado = true;
        }
    });

    if (!usuarioEncontrado) {
        alert("Nenhum usuário com o CPF informado.");
    }
}