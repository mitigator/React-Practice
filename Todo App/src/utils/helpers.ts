import type { Todo } from "../types";

export const getPriorityColor = (priority: Todo['priority']): string => {
    switch (priority) {
        case 'high': return 'text-red-500';
        case 'medium': return 'text-yellow-500';
        case 'low': return 'text-green-500';
        default: return 'text-gray-500';
    }
};

export const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString();
}

export const generateId = (): number => {
    return Date.now() + Math.floor(Math.random() * 1000);
}

export const filterTodos = (todos: Todo[], filter:string, searchTerm: string): Todo[] =>{
    let filtered = todos;

    if (searchTerm) {
    filtered = filtered.filter((todo: Todo) =>
      todo.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  switch(filter){
    case 'completed':
        return filtered.filter((todo: Todo) => todo.completed);
    case 'pending': 
        return filtered.filter((todo: Todo) => !todo.completed);
    default:
        return filtered;
  }

}