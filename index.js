let usuarios = []

function formCadastro() {
    // Obtém os valores do formulário
    let name = document.querySelector("#cadInputName").value
    let email = document.querySelector("#cadInputEmail").value
    let password = document.querySelector("#cadInputPassword").value

    // Cria um objeto com os valores do cadastro
    let user = {
        name: name,
        email: email,
        password: password
    }
    // Adiciona o objeto ao array
    usuarios.push(user);
    console.log(usuarios);

    // Limpa os campos do formulário
    document.querySelector('#cadInputName').value = '';
    document.querySelector('#cadInputEmail').value = '';
    document.querySelector('#cadInputPassword').value = '';

    // Deixa de exibir o Modal Cadastro
    jQuery('#ModalCadastro').modal('hide');
    // Exibe mensagem de sucesso
    alert(`${name} cadastrado com sucesso`);
}

// Chama a função formCadastro no onclick do botão
// document.getElementsByClassName("btn btn-primary").onclick = formCadastro();
// console.log("user")

// // Função de callback para chamar a função formCadastro no onclick do botão Cadastrar
// let elementos = document.getElementsByClassName("btn btn-cadastro");
// for (let i = 0; i < elementos.length; i++) {
//     elementos[i].onclick = function() {
//         formCadastro();
//     };
// }

function formLogin() {
    // Obtém os valores de login do usuário
    let email = document.querySelector('#loginInputEmail').value;
    let password = document.querySelector('#loginInputPassword').value;

    // Verifica se o email e a senha estão corretos
    let userEncontrado = usuarios.find(function(user) {
        return user.email === email && user.password === password;
    });

    // Exibe mensagem de login bem sucedido ou erro de autenticação
    if (userEncontrado) {
        alert('Usuário logado com sucesso!');
        // Deixa de exibir o Modal Login
        jQuery('#ModalLogin').modal('hide');
    } else {
        alert('Erro de autenticação. Verifique seu email e senha.')
    }

    // Limpar os campos do formulário de login
    document.querySelector('#loginInputEmail').value = '';
    document.querySelector('#loginInputPassword').value = '';
}