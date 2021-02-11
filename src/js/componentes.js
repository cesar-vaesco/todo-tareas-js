
import { Todo } from '../classes';
import { todoList } from '../index';

// Referencias al html
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const txtBorrar = document.querySelector('.clear-completed');



export const crearTodoHtml = (todo) => {

    const htmlTodo = `
        <li class="${(todo.completado) ? 'completed' : ''}" data-id=${todo.id}>
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
});

divTodoList.addEventListener('click', (event) => {
    // console.log('click'); identificar que se dispara el evento
    // console.log(event); identificar el evento
    // console.log(event.target); identificar a donde se da click
    // console.log(event.target.localName); identificar exactamente el elemento donde se da click

    const nombreElemento = event.target.localName;
    //Referencia completa el elemento  que se quiere clickear para acompletar la tarea
    const todoElemento = event.target.parentElement.parentElement;
    // extraer id del todo
    const todoId = todoElemento.getAttribute('data-id');
    // console.log(todoElemento);
    // console.log(todoId);


    if (nombreElemento.includes('input')) {
        //marcar tarea-todo acompletado
        todoList.marcarCompletado(todoId);
        //tachar tarea realizada
        todoElemento.classList.toggle('completed');
    } else if (nombreElemento.includes('button')) {
        //eliminamos el elemento que se encuentra en el arreglo
        todoList.eliminarTodo(todoId);
        //eliminamos el html creado donde se visualizaba el todo
        divTodoList.removeChild(todoElemento);
    }

    //console.log(todoList);
});

txtBorrar.addEventListener('click', () => {

    todoList.eliminarCompletados();

    for (let i = divTodoList.children.length - 1; i >= 0; i--) {
        // Se selecciona de la lista de todos los todo que esten seleccionados como  completado
        const elemento = divTodoList.children[i];
        //console.log(elemento);
        // Se pregunta si el elemento contienen la clase completed, si la tiene se solicita que se remueva de la lista
        if (elemento.classList.contains('completed')) {
            divTodoList.removeChild(elemento);
        }
    }

});
