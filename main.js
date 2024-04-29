$(document).ready(function() {
  $('#task-form').submit(function(e) {
    e.preventDefault();
    var taskName = $('#task-input').val();
    var taskCount = $('#task-list li').length + 1; // Conta o número de tarefas e incrementa
    $('#task-list').append('<li><input type="checkbox" class="task-checkbox">' + taskCount + '. ' + taskName + '<button class="delete-btn">&#128465;</button></li>');
    $('#task-input').val('');
  });
// botão para excluir tarefa
  $('#task-list').on('click', '.delete-btn', function() {
    $(this).parent().remove();
  });
//ajuste proposto pelo professor
  $('#task-list').on('click', 'li', function() {
    $(this).toggleClass('completed');
  });
});