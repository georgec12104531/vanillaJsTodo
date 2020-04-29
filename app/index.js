let todos = [
    {
        id: 1,
        task: 'Go get groceries'
    },
    {
        id: 2,
        task: 'Study data structures and algorithms'
    },
    {
        id: 3,
        task: 'Hangout with Chloe'
    }
]

const listContainer = document.querySelector('.list-container').innerHTML;

const generateTodos = () => {
    listHTML = ''
    todos.forEach(({id, task}, index) => {
        listHTML += "<div class='todo-row'>"; 
        listHTML += "<div>" + JSON.stringify(index + 1) + '</div>'
        listHTML += "<div class='task'>" + task + '</div>'
        listHTML += "<button class='remove-todo'>x</button>"
        listHTML += '</div>';
    })

    document.querySelector('.list-container').innerHTML = listHTML;    
}

const load = () => {
    generateTodos();
}

load();

// Add new todo
const createNewTodo = (taskStr) => {
    return {
        id: todos.length + 1,
        task: taskStr
    }
}

const handleInputChange = (event) => {
    const input = document.getElementById('newTodoInput')
    let newTodo = createNewTodo(input.value);
    todos.push(newTodo);
    addNewTodo(newTodo)

    input.value = '';
}

const addNewTodo = ({id, task}) => {
    const todoRow = document.createElement('div')
    todoRow.className = 'todo-row';

    idElement = document.createElement('div');
    idText = document.createTextNode(JSON.stringify(id));
    idElement.appendChild(idText);

    taskElement = document.createElement('div');
    taskElement.className = 'task'; 
    taskElement.appendChild(document.createTextNode(task));

    buttonElement = document.createElement('button')
    buttonElement.appendChild(document.createTextNode('x'));
    "<button class='remove-todo'>x</button>"
    
    todoRow.appendChild(idElement);
    todoRow.appendChild(taskElement);
    todoRow.appendChild(buttonElement);

    document.querySelector('.list-container').appendChild(todoRow);
} 

document.querySelector('.add-todo-button').addEventListener('click', handleInputChange);

const handleRemoveTodo = (e) => {   
    if (e.target.nodeName === 'BUTTON') {
        const row = e.target.parentElement;
        document.querySelector('.list-container').removeChild(row);
    } 
}

document.querySelector('.list-container').addEventListener('click', handleRemoveTodo)