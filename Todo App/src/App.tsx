import React, { useState, useEffect, useMemo, useCallback } from "react"
import type { Todo, TodoStats, Filtertype } from "./types";
import { TodoProvider } from './context/TodoContext';
import { filterTodos } from "./utils/helpers";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterBar from "./components/FilterBar";
import StatsBar from "./components/StatsBar";
import SearchBar from "./components/SearchBar";


const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filtertype>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const sampleTodos: Todo[] = [
      {
        id: 1,
        text: "Learn React hooks",
        completed: false,
        priority: "high",
        createdAt: new Date().toISOString()
      },
      {
        id: 2,
        text: "Build a todo app",
        completed: true,
        priority: "medium",
        createdAt: new Date().toISOString()
      },
      {
        id: 3,
        text: "Master TypeScript",
        completed: false,
        priority: "high",
        createdAt: new Date().toISOString()
      }
    ];
    setTodos(sampleTodos);
  }, []);

  const filteredTodos = useMemo((): Todo[] => {
    return filterTodos(todos, filter, searchTerm)
  }, [todos, filter, searchTerm]);

  const stats: TodoStats = useMemo(() => ({
    totalTasks: todos.length,
    completedTasks: todos.filter((todo: Todo) => todo.completed).length,
    pendingTasks: todos.filter((todo: Todo) => !todo.completed).length,
    hasCompletedTasks: todos.some((todo: Todo) => todo.completed)
  }), [todos]);

  //callback functons

  const addTodo = useCallback((newTodo: Todo): void => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }, []);

  const toggleTodo = useCallback((id: number): void => {
    setTodos((prevTodos: Todo[]) =>
      prevTodos.map((todo: Todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const editTodo = useCallback((id: number, updates: Partial<Pick<Todo, 'text' | 'priority'>>): void => {
    setTodos((prevTodos: Todo[]) =>
      prevTodos.map((todo: Todo) =>
        todo.id === id ? { ...todo, ...updates } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id: number): void => {
    setTodos((prevTodos: Todo[]) => prevTodos.filter((todo: Todo) => todo.id !== id));
  }, []);

  const clearCompleted = useCallback((): void => {
    setTodos((prevTodos: Todo[]) => prevTodos.filter((todo: Todo) => !todo.completed));
  }, []);

  const handleSearch = useCallback((term: string): void => {
    setSearchTerm(term);
  }, []);

  const handleFilterChange = useCallback((newFilter: Filtertype): void => {
    setFilter(newFilter);
  }, []);

  return (
    <TodoProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Todo App</h1>
            <p className="text-gray-600 dark:text-gray-400">Manage Your Tasks Effectively</p>
          </header>
          <StatsBar {...stats} />
          <TodoInput onAddTodo={addTodo} />
          <SearchBar onSearch={handleSearch} />
          <FilterBar
            currentFilter={filter}
            onFilterChange={handleFilterChange}
            onClearCompleted={clearCompleted}
            hasCompletedTasks={stats.hasCompletedTasks}
          />
          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onEdit={editTodo}
            onDelete={deleteTodo}
          />
        </div>
      </div>
    </TodoProvider>
  )

}

export default App;