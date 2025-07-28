import React from "react";
import { BarChart3 } from "lucide-react";
import type { TodoStats } from "../types";
import { useTodoContext } from "../hooks/useTodoContext";

type StatsBarProps = TodoStats

const StatsBar: React.FC<StatsBarProps> = ({ totalTasks, completedTasks, pendingTasks }) => {

    const { theme, toggleTheme } = useTodoContext();

    return (
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-6">
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <BarChart3 size={20} className="text-blue-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                        <strong>{pendingTasks}</strong> tasks left
                    </span>
                </div>

                <div className="text-sm text-gray-500 dark:text-gray-400">
                    Total: {totalTasks} | Completed: {completedTasks}
                </div>
            </div>

            <button
                onClick={toggleTheme}
                className="px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
                {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>
        </div>
    )

}

export default StatsBar;

