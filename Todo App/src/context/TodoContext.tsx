import React,{createContext,useState,useCallback,type ReactNode} from "react";
import type { Themetype } from "../types";

interface TodoContextType {
    theme:Themetype;
    toggleTheme:() => void;
}

interface TodoProviderProps {
    children: ReactNode;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Themetype>("light");

    const toggleTheme = useCallback(():void=>{
        setTheme(prev=>prev==='light' ? 'dark' : 'light');
    },[])

    const value: TodoContextType = {
        theme,
        toggleTheme
    };

    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContext;
