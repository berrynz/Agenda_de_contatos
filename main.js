const form = document.getElementById("formulario");
const nomes = [];
const telPhone = [];
const email = [];
let linhas ='';
let contadorCadastrado = 0;

form.addEventListener('submit',function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();
    atualizarContato();
});

function adicionarLinha() {
    const inputNomeCadastro = document.getElementById('nome');
    const inputTelefoneCadastro = document.getElementById('telephone');
    const inputEmailCadastro = document.getElementById('e-mail');

    if (telPhone.includes(inputTelefoneCadastro.value) || email.includes( inputEmailCadastro.value)) {
        alert(`Erro! Email ou Telefone já cadastrado.`)
    } else{

        nomes.push(inputNomeCadastro.value);
        telPhone.push(inputTelefoneCadastro.value);
        email.push(inputEmailCadastro.value);
    
        let linha = '<tr>';
        linha += `<td>${inputNomeCadastro.value}</td>`;
        linha += `<td>${inputTelefoneCadastro.value}</td>`;
        linha += `<td>${inputEmailCadastro.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;

        contadorCadastrado ++;
        
    inputNomeCadastro.value = '';
    inputTelefoneCadastro.value = '';
    inputEmailCadastro.value = '';
    }

};

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizarContato() {
    const contadorElemento = document.getElementById('contatos-salvos');
    contadorElemento.textContent = contadorCadastrado;
}