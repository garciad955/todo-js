import './styles.css';
import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList() ;

console.log(todoList.todos);

// const newTodo = new Todo('Aprender JS');


todoList.todos.forEach(todo => crearTodoHtml( todo ) );

console.log('todo', todoList.todos);