export interface Todo{
    id:number;
    text:string;
    completed:boolean;
    priority:'low'|'medium'|'high'; //Data Type?
    createdAt:string;
}

export interface TodoStats{
    totalTasks:number;
    completedTasks:number;
    pendingTasks:number;
    hasCompletedTasks:boolean;
}

