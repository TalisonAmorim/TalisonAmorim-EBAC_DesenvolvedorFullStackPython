$(document).ready(function() {
    $('#task-form').submit(function(e) {
      e.preventDefault();
      let taskName = $('#task-input').val();
      var taskCount = $('#task-list li').length + 1; 
    $('#task-list').append('<li>'+ taskCount + '. ' + taskName + '</li>');
      $('#task-input').val('');
    });
  
    $(document).on('click', '#task-list li', function() {
      $(this).toggleClass('completed');
    });
  });
  