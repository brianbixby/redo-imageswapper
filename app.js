'use strict';

function addTodo() {
    var $add = $('#add');
    var $todos = $('.todos');

    $add.on('click', function() {
        var $val = $('.todoInput').val();
        $todos.append('<li>' + $val  + '</li>')
        $('.todoInput').val('');
    });
}
function removeTodo() {
    $('.todolist').on('click', 'li', function() {
        $(this).remove();
    });
}
function imageSwap() {
  $('select').on('change', function() {
    $('.main-img').attr('src', $(this).val());
  });  
}
$(document).ready(function() {
    addTodo();
    removeTodo();
    imageSwap();
});