import axios from 'axios';


// Seleciona o formulário e os campos de entrada
const form = document.getElementById('form-contato');
const nomeInput = document.getElementById('nome');
const telefoneInput = document.getElementById('telefone');

// Adiciona um ouvinte de evento ao formulário para quando ele for enviado
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário (que recarregaria a página)

    // Coleta os dados dos campos do formulário
    const nome = nomeInput.value;
    const telefone = telefoneInput.value;

    // Cria a URL com os parâmetros
    const url = `https://api.exemplo.com/usuarios/${nome}/${telefone}`;

    // Envia os dados via POST com axios
    axios.post(url)
        .then(response => {
            console.log('Dados enviados com sucesso:', response.data);
        })
        .catch(error => {
            console.error('Erro ao enviar os dados:', error);
        });
});




// document.getElementById("form-contato").addEventListener("submit", async function(event) {
//     event.preventDefault(); // Impede o envio padrão do formulário

//     // Obtendo os valores do formulário
//     const nome = encodeURIComponent(document.getElementById("nome").value);
//     const telefone = encodeURIComponent(document.getElementById("telefone").value);

//     try {
//         // URL com os parâmetros na rota
//         const url = `https://localhost:7189/api/contatos/${nome}/${telefone}`;

//         const resposta = await fetch(url, { 
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });

//         if (resposta.ok) {
//             alert("Contato adicionado com sucesso!");
//         } else {
//             alert("Erro ao adicionar contato.");
//         }
//     } catch (erro) {
//         console.error("Erro:", erro);
//         alert("Erro ao conectar com o servidor.");
//     }
// });
