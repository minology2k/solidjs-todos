import { createSignal } from "solid-js";
import { TodoItem, Todo } from "./TodoItem";

const todoList: Todo[] = [
  {
    id: 1,
    name: "todo1",
    isDone: false,
  },
  {
    id: 2,
    name: "todo2",
    isDone: true,
  },
  {
    id: 3,
    name: "todo3",
    isDone: false,
  },
];

export const TodoList = () => {
  const [todos, setTodos] = createSignal(todoList);
  const handleTodoToggle = (todoId: number) => {
    const newTodos = todos().map((it) => {
      if (it.id === todoId) {
        return {
          ...it,
          isDone: !it.isDone,
        };
      } else return it;
    });
    setTodos(newTodos);
  };
  const handleDelete = (todoId: number) => {};

  return (
    <ul>
      {todos().map((todo) => (
        <li class="py-1 my-2.5">
          <TodoItem
            todo={todo}
            onDelete={handleDelete}
            onToggle={handleTodoToggle}
          />
        </li>
      ))}
    </ul>
  );
};
