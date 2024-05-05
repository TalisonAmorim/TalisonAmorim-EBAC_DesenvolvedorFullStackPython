$(document).ready(function() {
  // Aplicando máscaras aos campos do formulário
  $('#inputTelefone').mask('(00) 00000-0000');

  // Função para validar e enviar o formulário
  $('#cadastroForm').submit(function(e) {
    e.preventDefault();

    // Captura dos valores dos campos do formulário
    var nome = $('#inputNome').val();
    var email = $('#inputEmail').val();
    var telefone = $('#inputTelefone').val();

    // Validando se os campos estão preenchidos
    if (nome && email && telefone) {
      // Aqui você pode enviar os dados para o servidor ou fazer outras operações
      alert('Formulário enviado com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos do formulário.');
    }
  });
});
