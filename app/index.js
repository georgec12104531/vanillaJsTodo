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
        listHTML += "<div class='task-sub-container'>";
        listHTML += "<div>" + JSON.stringify(index + 1) + '</div>'
        listHTML += "<div class='task'>" + task + '</div>'
        listHTML += '</div>';
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
    let todoRow = document.createElement('div')
    todoRow.className = 'todo-row';

    idElement = document.createElement('div');
    idText = document.createTextNode(JSON.stringify(id));
    idElement.appendChild(idText);

    taskElement = document.createElement('div');
    taskElement.className = 'task'; 
    taskElement.appendChild(document.createTextNode(task));

    buttonElement = document.createElement('button')
    buttonElement.appendChild(document.createTextNode('x'));
    // "<button class='remove-todo'>x</button>"

    subContainer = document.createElement('div')
    subContainer.className = 'task-sub-container'
    subContainer.appendChild(idElement);
    subContainer.appendChild(taskElement);
    
    todoRow.appendChild(subContainer);
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

document.querySelector('.list-container').addEventListener('click', handleRemoveTodo);



const handleSearchInput = (e) => {
    const todoArr = document.querySelectorAll('.todo-row');
    
    todoArr.forEach((todo) => {
        let todoText = todo.firstChild.childNodes[1].innerText;
        if (!todoText.toLowerCase().includes(e.target.value.toLowerCase())) {
            todo.style.display = 'none';
        } else {
            todo.style.display = 'flex';
        }
    })
}

const searchInput = document.getElementById('search').onkeyup  = handleSearchInput;