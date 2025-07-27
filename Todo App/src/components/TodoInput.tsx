import React, {useState,useRef,useCallback} from "react";
import { Plus } from "lucide-react";
import type { Todo } from "../types";
import { generateId } from "../utils/helpers";

interface TodoInputProps {
  onAddTodo: (todo: Todo) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAddTodo }) => {
    const [inputValue, setInputValue] = useState<string>("");
    const [priority, setPriority] = useState<Todo["priority"]>("medium");
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = useCallback(():void =>{
        if(inputValue.trim()){
            const newTodo: Todo ={
                id: generateId(),
                text: inputValue.trim(),
                completed: false,
                priority,
                createdAt: new Date().toISOString()
            };
            onAddTodo(newTodo);
            setInputValue("");
            setPriority("medium");
            inputRef.current?.focus();
        }
    }, [inputValue, priority, onAddTodo]);

    const handleKeyPress = useCallback((e: React.KeyboardEvent<HTMLInputElement>):void =>{
        if (e.key === "Enter") {
            e.preventDefault();
            handleSubmit();
        }
    }, [handleSubmit]);

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>):void => {
        setInputValue(e.target.value);
    },[])

    const handlePriorityChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>):void => {
        setPriority(e.target.value as Todo["priority"]);
    }, []);

    return (
        <div>
            <div>
                <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Add a new todo..."                  
                />
                <select
                value={priority}
                onChange={handlePriorityChange}
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>

                <button onClick={handleSubmit}>
                    <Plus size={20} />
                </button>


            </div>
        </div>
    )
}

export default TodoInput;