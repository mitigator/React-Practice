import React from "react";
import { BarChart3 } from "lucide-react";
import type { TodoStats } from "../types";
import { useTodoContext } from "../hooks/useTodoContext";

type StatsBarProps = TodoStats

const StatsBar: React.FC<StatsBarProps> = ({totalTasks, completedTasks, pendingTasks})=>{

    const {theme,toggleTheme} = useTodoContext();

    return(
        <div>
            <div>
                <div>
                    <BarChart3 size={20}/>
                    <span><strong>{pendingTasks}</strong></span>
                </div>
                <div>
                    Total:{totalTasks} | Completed: {completedTasks}
                </div>
            </div>
            <button onClick={toggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}>
                {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>
        </div>
    )

}

export default StatsBar;

