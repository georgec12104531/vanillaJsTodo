console.log('im in number 1 bitch')
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

const container = document.querySelector('.header-container');
container.style.cssText = 'height: 70px; background-color: green;';

const generateTodos = () => {
    listHTML = ''
    todos.forEach(({id, task}, index) => {
        listHTML += "<div class='todo-row'>"; 
        listHTML += "<div>" + JSON.stringify(index + 1) + '</div>'
        listHTML += "<div class='task'>" + task + '</div>'
        listHTML += '</div>';
    })

    document.querySelector('.list-container').innerHTML = listHTML;    
}

const load = () => {
    generateTodos();
}

load();

// console.log(listContainer);



const createNewTodo = (taskStr) => {
    console.log(todos.length);
    return {
        id: todos.length + 1,
        task: taskStr
    }
}


const handleInputChange = (event) => {
    const input = document.getElementById('newTodoInput')
    let newTodo = createNewTodo(input.value);
    todos.push(newTodo);
    // generateTodos();    
    console.log(newTodo);
    const listContainer = document.querySelector('.list-container');
    const newTodoHTML = addNewTodo(newTodo)
    const lastTodo = listContainer.lastChild;
    lastTodo.insertAdjacentHTML( 'afterend', newTodoHTML );
    input.value = '';
}

const addNewTodo = ({id, task}) => {
    
    let html = ''
    html += "<div class='todo-row'>"; 
    html += "<div>" + JSON.stringify(id) + '</div>'
    html += "<div class='task'>" + task + '</div>'
    html += '</div>';
    
    return html;
} 

document.querySelector('.add-todo-button').addEventListener('click', handleInputChange);