/*this function gets the task from the input*/
function get_todos() {
    /*this creates an aarray of tasks that are inputed*/
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}
/*this function adds the imputed task to the get_todos array*/
function add() {
    var task = document.getElementById('task').value;

    var todos = get_todos();
    todos.push(task);
    localStorage.getItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;

}

/*this function keeps the task permanently displayed on the screen*/

function show() {
    var todos = get_todos();
    /*this sets up each task in an unordered list*/
    var html = '<ul>';
    for (var i = 0; i < todos.length; i++) {
    html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';
    document.getElementById('todos').innerHTML= html;

    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', remove);
    } 
};

document.getElementById('add').addEventListener('click', add);
show();