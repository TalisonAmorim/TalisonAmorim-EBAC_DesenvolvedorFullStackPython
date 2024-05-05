$(document).ready(function() {
  // Aplicando máscaras aos campos
  $('#telefone').mask('(00) 0000-0000');

  // Função para adicionar uma nova linha na tabela
  $('#cadastroForm').submit(function(e) {
    e.preventDefault();

    // Captura dos valores dos campos do formulário
    var nomeCompleto = $('#nomeCompleto').val();
    var email = $('#email').val();
    var telefone = $('#telefone').val();

    // Adiciona os valores em uma nova linha na tabela
    $('#dadosTabela').append('<tr>' +
                             '<td>' + nomeCompleto + '</td>' +
                             '<td>' + email + '</td>' +
                             '<td>' + telefone + '</td>' +
                             '</tr>');

    // Limpa os campos do formulário após a submissão
    $('#cadastroForm')[0].reset();
  });
});
