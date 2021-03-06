import { todo, todoList } from './data';

export interface demoPageProps {
  todoList: todoList;
  pageTodoList: todoList;
  todoListLength: number;
  oneTodo: todo;
  defaultQueryId: number;
  defaultTodo: todo;
}
