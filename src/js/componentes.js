
// Referencias al html
const divTodoList = document.querySelector('.todo-list');

export const crearTodoHtml = ( todo ) => {

    const htmlTodo = `
<li class="${ (todo.completado) ? 'completed': ''}" data-id=${todo.id}}>
    <div class="view">
        <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked': ''}>
            <label>${ todo.tarea }</label>
            <button class="destroy"></button>
                </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    // Crear elemento html
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    // tomar el primer elemento hijo del div creado y va ser ese elemento el que se
    //  a mostrar en la estructura html
    divTodoList.append( div.firstElementChild );

    return div.firstElementChild;
}
