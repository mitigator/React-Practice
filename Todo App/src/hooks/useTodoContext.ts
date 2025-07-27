import { useContext } from "react";
import TodoContext from "../context/TodoContext";

interface TodoContextType {
    theme: 'light' | 'dark';
    toggleTheme:() => void;
}

export const useTodoContext = (): TodoContextType => {
    const context = useContext(TodoContext);
    if(!context){
        throw new Error("useTodoContext must be used within a TodoProvider");
    }
    return context;
}

