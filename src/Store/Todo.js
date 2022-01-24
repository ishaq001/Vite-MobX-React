/** @format */
import { action, computed, makeObservable, observable } from 'mobx';

class TodoStore {
  todos = [];
  completed = false;

  constructor() {
    makeObservable(this, {
      todos: observable,
      completed: observable,
      todosLength: computed,
      addTodo: action,
      updateTodo: action,
      deleteTodo: action,
      todoCompleted: action,
    });
  }

  get todosLength() {
    return this.todos.length;
  }
  deleteTodo(id) {
    const newArray = this.todos && this.todos.filter((todo) => todo?.id !== id);
    this.todos = newArray;
  }

  addTodo(todo) {
    console.log('add todo called', this.todos, 'this.exm', this.completed);
    this.todos = [todo, ...this.todos];
  }

  todoCompleted() {
    console.log('called todoCompleteeedddd TodoJS', this.completed);
    const newCompleted = !this.completed;
    console.log('this.completed', this.completed);
    this.completed = newCompleted;
  }

  updateTodo(id = '', newData = {}) {
    console.log('called Update Todo', this.todoCompleted());
    const todoIndex = this.todos.findIndex((todo) => todo?.id === id);
    console.log('tooddddIndex', todoIndex);
    if (todoIndex > -1 && newData) {
      let newTodos = [...this.todos];
      newTodos[todoIndex] = newData;
      this.todos = newTodos;
    }
  }
}

const Store = new TodoStore();

export default Store;
