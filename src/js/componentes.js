
import { Todo } from '../classes';
import { todoList } from '../index';

// Referencias al html
const divTodoList = document.querySelector('.todo-list');

const txtInput = document.querySelector('.new-todo');

export const crearTodoHtml = (todo) => {

    const htmlTodo = `
        <li class="${(todo.completado) ? 'completed' : ''}" data-id=${todo.id}}>
            <div class="view">
                <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
                    <label>${todo.tarea}</label>
                    <button class="destroy"></button>
            </div>
                <input class="edit" value="Create a TodoMVC template">
        </li>`;

    // Crear elemento html
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    // tomar el primer elemento hijo del div creado y va ser ese elemento el que se
    //  a mostrar en la estructura html
    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;
}


// Eventos
/*-- El evento keyup se dispara cuando se suelta la tecla --*/
/*-- event nos permite identificar que tecla oprime el usuario --*/
txtInput.addEventListener('keyup', (event) => {

    //  console.log(event);
    //console.log(txtInput.value)
    // Se identifica si el usuario oprime enter
    if (event.keyCode === 13 && txtInput.value.length > 0) {
        console.log(txtInput.value);
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);
        /*--console.log(todoList)  --*/
        // agregar a vista el nuevo todo
        crearTodoHtml(nuevoTodo);
        // Pugar el input
        txtInput.value = '';
    }
})
