// I used jQuery to manipulate the HTML document
// The only exception is the editTask() function, where JavaScript is used

// Adds new task to "Incomplete Tasks" list
function addTask() {
  var task = $("#new-task").val();
  $("#incomplete-tasks").append('<li><input type="checkbox"><label>' + task + '</label><input type="text"><button class="edit">Edit</button><button class="delete">Delete</button></li>');
  $("#new-task").val('');
}

// Delete task
function deleteTask() {
  $(this).parent().remove();
}

// Edit task
// the editTask() function is adapted from
// TreeHouse's ToDo list DOM project
function editTask() {
  var listItem = this.parentNode;
  var editInput = listItem.querySelector("input[type=text");
  var label = listItem.querySelector("label");
  var containsClass = listItem.classList.contains("editMode");
  
  //if the class of the parent is .editMode
  if(containsClass) {
    //switch from .editMode
    //make label text become input's value
    label.innerText = editInput.value;
  //else
  } else {
    //switch to .editMode
    //input value becomes the label's text
    editInput.value = label.innerText;
  }
  
  //toggle .editMode on the list item
  listItem.classList.toggle("editMode");
}

// Moves new task from "Incomplete Tasks" to "Completed-Tasks"
// Moves task from "Completed-Tasks" to "Incomplete Tasks"
function moveTask() {
  if ($(this).parent().parent().is("#incomplete-tasks")) {
    $(this).parent().appendTo('#completed-tasks');
  } else {
    $(this).parent().appendTo('#incomplete-tasks');
  }
}

$(function() {
  $("#add").on('click', addTask);
  $(document).on('click', '.delete', deleteTask);
  $(document).on('click', 'input:checkbox', moveTask);
  $(document).on('click', '.edit', editTask);
  
  // Lets you drag and move tasks
  $(".sortable").sortable();
});
