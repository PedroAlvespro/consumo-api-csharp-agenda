import axios from 'axios';

document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Coleta os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    // Cria o objeto FormData para enviar os dados
    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('telefone', telefone);

    // Envia os dados via POST usando Axios
    axios.post('http://localhost:7189/api/add-contato', formData)
        .then(response => {
            console.log('Contato adicionado com sucesso:', response.data);
            document.getElementById('mensagem').innerText = 'Contato adicionado com sucesso!';
            document.getElementById('form-contato').reset(); // Limpa o formulário
        })
        .catch(error => {
            console.error('Erro ao enviar os dados:', error);
            document.getElementById('mensagem').innerText = 'Erro ao adicionar o contato.';
        });
});



