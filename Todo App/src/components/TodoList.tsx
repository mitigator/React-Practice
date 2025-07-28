import React from "react";
import type { Todo } from "../types";
import TodoItem from "./TodoItem";

interface TodoListProps{
    todos: Todo[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
    onEdit:(id:number, updates:Partial<Pick<Todo, 'text'|'priority'>>) => void;
}

const TodoList: React.FC<TodoListProps>=({todos,onToggle,onEdit,onDelete})=>{
    if(todos.length===0){
        return (
            <div>
                <div>📝</div>
                <h3>No tasks yet</h3>
                <p>Add a task above to get started!</p>
            </div>
        );
    }

    return(
        <div>
            {todos.map((todo:Todo)=>(
                <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={onToggle}
                onEdit={onEdit}
                onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default TodoList;