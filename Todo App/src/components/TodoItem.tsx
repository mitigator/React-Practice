import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Trash2, Edit3, Check, X } from 'lucide-react';
import { Todo } from '../types';
import { getPriorityColor, formatDate } from '../utils/helpers';

interface TodoItemProps {
    todo:Todo;
    onToggle: (id: string) => void;
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

    
}
