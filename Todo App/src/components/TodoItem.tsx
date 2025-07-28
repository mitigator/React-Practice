import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Trash2, Edit3, Check, X } from 'lucide-react';
import type { Todo } from '../types';
import { formatDate, getPriorityColor } from '../utils/helpers';

interface TodoItemProps {
    todo: Todo;
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

    const handleEdit = useCallback((): void => {
        if (editText.trim()) {
            onEdit(todo.id, { text: editText.trim(), priority: editPriority });
            setIsEditing(false);
        }
    }, [editText, editPriority, onEdit, todo.id]);

    const handleCancel = useCallback((): void => {
        setEditText(todo.text);
        setEditPriority(todo.priority);
        setIsEditing(false);
    }, [todo.text, todo.priority]);

    const handleToggle = useCallback((): void => {
        return onToggle(todo.id);
    }, [todo.id, onToggle]);

    const handleDelete = useCallback((): void => {
        onDelete(todo.id);
    }, [todo.id, onDelete]);

    const handleEditTextChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
        setEditText(e.target.value);
    }, []);

    const handleEditPriorityChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>): void => {
        setEditPriority(e.target.value as Todo['priority']);
    }, []);

    const handleKeyPress = useCallback((e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') {
            handleEdit();
        } else if (e.key === 'Escape') {
            handleCancel();
        }
    }, [handleEdit, handleCancel]);

    const startEditing = useCallback((): void => {
        setIsEditing(true);
    }, []);

    if (isEditing) {
        return (
            <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <input
                    ref={editInputRef}
                    type="text"
                    value={editText}
                    onChange={handleEditTextChange}
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"

                    onKeyPress={handleKeyPress}
                />
                <select value={editPriority} onChange={handleEditPriorityChange}
                    className="px-2 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <button className="p-2 text-green-600 hover:bg-green-50 dark:hover:bg-green-900 rounded transition-colors"
                    onClick={handleEdit} aria-label='Save Changes'><Check size={10} /></button>
                <button className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900 rounded transition-colors"
                    onClick={handleCancel} aria-label='Cancel Changes'><X size={10} /></button>
            </div>
        );
    }

    return (
        <div className={`flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 ${todo.completed ? 'opacity-75' : ''}`}>
            <button onClick={handleToggle} className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${todo.completed
                ? 'bg-green-500 border-green-500 text-white'
                : 'border-gray-300 dark:border-gray-600 hover:border-green-500'
                }`} aria-label={todo.completed ? 'Mark as Incomplete' : 'Mark as Complete'}>
                {todo.completed && <Check size={14} />}
            </button>

            <div className="flex-1">
                <span className={`${todo.completed ? 'line-through text-gray-500' : 'text-gray-900 dark:text-white'}`}>{todo.text}</span>
                <div className="flex items-center gap-2 mt-1">
                    <span className={`text-xs font-medium ${getPriorityColor(todo.priority)}`}>{todo.priority.toUpperCase()}</span>
                    <span className="text-xs text-gray-500">{formatDate(todo.createdAt)}</span>
                </div>
            </div>

            <button
                onClick={startEditing}
                disabled={todo.completed}
                className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900 rounded transition-colors"
                aria-label='Edit Todo'
            >
                <Edit3 size={10} />
            </button>

            <button
                onClick={handleDelete}
                className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900 rounded transition-colors"
                aria-label='Delete Todo'
            >
                <Trash2 size={10} />
            </button>
        </div>
    )

}

export default TodoItem;
