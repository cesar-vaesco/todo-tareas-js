
export class TodoList {

  constructor() {

    this.todos = [];

  }

  nuevoTodo(todo) {
    this.todos.push(todo);
    this.guardarLocalStorage();
  }

  eliminarTodo(id) {
    // Esta instrucción filtra al todo que se recibe por id y lo quita del arreglo creando un nuevo arreglo y sobreescribiendo sus valores
    this.todos = this.todos.filter(todo => todo.id != id);
    this.guardarLocalStorage();
  }

  marcarCompletado(id) {
    for (const todo of this.todos) {
      //console.log(id, todo.id);
      if (todo.id == id) {
        todo.completado = !todo.completado;
        this.guardarLocalStorage();
        break;
      }
    }
  }

  eliminarCompletados() {
    // El filter regresara todos los todo que NO esten completados
    this.todos = this.todos.filter(todo => !todo.completado);
  }


  guardarLocalStorage() {

    localStorage.setItem('todo', JSON.stringify(this.todos));

  }

  cargarLocalStorage() { }
}
