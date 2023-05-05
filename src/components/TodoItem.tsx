export type Todo = {
  id: number;
  name: string;
  isDone: boolean;
};

export type TodoItemProps = {
  todo: Todo;
  onToggle: (todoId: number) => void;
  onDelete: (todoId: number) => void;
};

export const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  console.log("child render");
  return (
    <div class="flex items-center w-full font-medium gap-2.5">
      <span
        class="w-64 text-center text-sm text-white rounded py-2 px-5 bg-secondary"
        classList={{ "line-through opacity-60": todo.isDone }}
      >
        {todo.name}
      </span>
      {todo.isDone ? (
        <button class="border-2" onClick={() => onToggle(todo.id)}>
          Undo
        </button>
      ) : (
        <button class="border-2" onClick={() => onToggle(todo.id)}>
          Done
        </button>
      )}
      <button class="border-2" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </div>
  );
};
