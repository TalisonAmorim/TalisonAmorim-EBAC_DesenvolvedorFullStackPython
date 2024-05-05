$(document).ready(function() {
  // Aplicando máscaras aos campos
  $('#telefone').mask('(00) 0000-0000');
  $('#cpf').mask('000.000.000-00', {reverse: true});
  $('#cep').mask('00000-000');
});

$(document).ready(function() {
  // Função para adicionar uma nova linha na tabela
  $('#cadastroForm').submit(function(e) {
    e.preventDefault();

    // Captura dos valores dos campos do formulário
    var nomeCompleto = $('#nomeCompleto').val();
    var email = $('#email').val();
    var telefone = $('#telefone').val();
    var cpf = $('#cpf').val();
    var endereco = $('#endereco').val();
    var cep = $('#cep').val();

    // Adiciona os valores em uma nova linha na tabela
    $('#dadosTabela').append('<tr>' +
                             '<td>' + nomeCompleto + '</td>' +
                             '<td>' + email + '</td>' +
                             '<td>' + telefone + '</td>' +
                             '<td>' + cpf + '</td>' +
                             '<td>' + endereco + '</td>' +
                             '<td>' + cep + '</td>' +
                             '<td><button class="excluir-btn">&#128465;</button></td>' + // Botão de exclusão
                             '</tr>');

    // Limpa os campos do formulário após a submissão
    $('#cadastroForm')[0].reset();
  });

  // Função para excluir uma linha da tabela quando o botão "Excluir" é clicado
  $('#dadosTabela').on('click', '.excluir-btn', function() {
    $(this).closest('tr').remove();
  });
});