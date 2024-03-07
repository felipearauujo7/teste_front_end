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

    if (nome === '' || sobrenome === '' || cpf === '' || nascimento === '' || cep === '' || endereco === '' || numero === '' || complemento === '' || cidade === '' || estado === '') {
        alert("Por favor, preencha todos os campos.");
        return;
    }

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
