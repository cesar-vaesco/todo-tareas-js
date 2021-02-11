import { Todo, TodoList } from './classes/index';
import { crearTodoHtml } from './js/componentes';
import './styles.css';



export const todoList = new TodoList();

// const tarea = new Todo('Aprender JavaScript......');

// todoList.todos.forEach(todo => crearTodoHtml(todo));
todoList.todos.forEach( crearTodoHtml );
// const newTodo = new Todo('Aprender JavaScript...');
// todoList.nuevoTodo(newTodo);
// todoList.todos[0].imprimirClase();

// console.log('todos', todoList.todos)

// todoList.nuevoTodo(tarea);


// //console.log(todoList);

// crearTodoHtml(tarea);

// // Establecer valor en localStorage
// localStorage.setItem('mi-key', 'ABC123');

// // Borrar valor con localStorage
// setTimeout( () => {
//   localStorage.removeItem('mi-key')
// }, 1500);
