import type { Component } from "solid-js";
import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

const App: Component = () => {
  return (
    <div>
      <Header />
      <main class="flex-center flex-col">
        <TodoForm />
        <TodoList />
      </main>
    </div>
  );
};

export default App;
