Backendless.initApp("5BFB2BAD-1FC4-070F-FFAB-B31E12160500","960639FB-BC4F-0171-FF14-858F3347B800");



$(document).on("pageshow","#todoPage", onPageShow);
function onPageShow() {
console.log("page shown");
}



Backendless.Data.of("TASKS").find().then(processResults).catch(error);
function processResults(tasks) {
 //display the first task in an array of tasks.
//wipe the list clean
$('#taskList').empty();

//Next using a loop add each task in turn to the listview.
//add each tasks
for (var i = 0; i < tasks.length; i++) {
 $('#taskList').append("<li>"+tasks[i].Task+"</li>");
}

//refresh the listview
$('#taskList').listview('refresh');
}
function error(err) {
 alert(err);
}



$(document).on("click", "#addTaskButton", onAddTask);
function onAddTask() {
console.log("add task button clicked");
var tasktext = $('#addTaskText').val();
    
var newTask = {};
newTask.Task = tasktext;
    
Backendless.Data.of("Tasks").save(newTask).then(saved).catch(error);
function saved(savedTask) {
console.log( "new Contact instance has been saved" + savedTask);
}
}