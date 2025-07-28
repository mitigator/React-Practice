import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Trash2, Edit3, Check, X } from 'lucide-react';
import type { Todo } from '../types';
import { formatDate } from '../utils/helpers';

interface TodoItemProps {
    todo:Todo;
    onToggle: (id: number) => void;
     onEdit: (id: number, updates: Partial<Pick<Todo, 'text' | 'priority'>>) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onEdit, onDelete }) => {

    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editText, setEditText] = useState<string>(todo.text);
    const [editPriority, setEditPriority] = useState<Todo['priority']>(todo.priority);
    const editInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isEditing) {
            editInputRef.current?.focus();
        }
    }, [isEditing]);

    const handleEdit = useCallback(():void =>{
        if(editText.trim()){
            onEdit(todo.id, {text: editText.trim(), priority: editPriority});
            setIsEditing(false);
        }
    },[editText, editPriority, onEdit, todo.id]);

    const handleCancel= useCallback(():void=>{
        setEditText(todo.text);
        setEditPriority(todo.priority);
        setIsEditing(false);
    }, [todo.text, todo.priority]);

    const handleToggle = useCallback(():void => {
        return onToggle(todo.id);        
    },[todo.id, onToggle]);

    const handleDelete = useCallback(():void =>{
        onDelete(todo.id);
    },[todo.id, onDelete]);

    const handleEditTextChange = useCallback((e: React.ChangeEvent<HTMLInputElement>):void=>{
        setEditText(e.target.value);
    },[]);

    const handleEditPriorityChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>):void=>{
        setEditPriority(e.target.value as Todo['priority']);
    },[]);

    const handleKeyPress = useCallback((e: React.KeyboardEvent<HTMLInputElement>):void => {
        if (e.key === 'Enter') {
            handleEdit();
        } else if (e.key === 'Escape') {
            handleCancel();
        }
    }, [handleEdit, handleCancel]);

    const startEditing = useCallback(():void => {
        setIsEditing(true);
    },[]);

    if(isEditing){
        return (
            <div>
                <input
                ref={editInputRef}
                type="text"
                value={editText}
                onChange={handleEditTextChange}
                onKeyPress={handleKeyPress} 
                />
                <select value={editPriority} onChange={handleEditPriorityChange}>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <button onClick={handleEdit} aria-label='Save Changes'><Check size={10} /></button>
                <button onClick={handleCancel} aria-label='Cancel Changes'><X size={10} /></button>
            </div>
        );
    }

    return (
        <div>
            <button onClick={handleToggle} aria-label={todo.completed ? 'Mark as Incomplete' : 'Mark as Complete'}>
                {todo.completed && <Check size={14} />}
            </button>

            <div>
                <span>{todo.text}</span>
                <div>
                    <span>{todo.priority.toUpperCase()}</span>
                    <span>{formatDate(todo.createdAt)}</span>
                </div>
            </div>

            <button
            onClick={startEditing}
            disabled={todo.completed}
            aria-label='Edit Todo'
            >
                <Edit3 size={10} />
            </button>

            <button
            onClick={handleDelete}
            aria-label='Delete Todo'
            >
                <Trash2 size={10} />
            </button>
        </div>
    )

}

export default TodoItem;
