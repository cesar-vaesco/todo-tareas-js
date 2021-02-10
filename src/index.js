import { Todo, TodoList } from './classes/index';
import { crearTodoHtml } from './js/componentes';
import './styles.css';



export const todoList = new TodoList();

const tarea = new Todo('Aprender JavaScript......');




todoList.nuevoTodo( tarea );


console.log(todoList);

crearTodoHtml( tarea );
