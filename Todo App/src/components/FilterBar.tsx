import React, { useCallback } from "react";
import { Filter, Check } from "lucide-react";
import type { Filtertype, FilterOption } from "../types";

interface FilterBarProps {
  currentFilter: Filtertype;
  onFilterChange: (filter: Filtertype) => void;
  onClearCompleted: () => void;
  hasCompletedTasks: boolean;
}

const FilterBar: React.FC<FilterBarProps> = ({
  currentFilter,
  onFilterChange,
  onClearCompleted,
  hasCompletedTasks,
}) => {
  const filters: FilterOption[] = [
    { key: "all", label: "All", icon: Filter },
    { key: "pending", label: "Pending", icon: Filter },
    { key: "completed", label: "Completed", icon: Check },
  ];

  const handleFilterClick = useCallback(
    (filter: Filtertype) => () => {
      onFilterChange(filter);
    },
    [onFilterChange]
  );

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-6">
      <div className="flex gap-2">
        {filters.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={handleFilterClick(key)}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${currentFilter === key
              ? 'bg-blue-500 text-white'
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            aria-label={`Filter ${label} tasks`}
          >
            <Icon size={16} />
            {label}
          </button>
        ))}
      </div>

      {hasCompletedTasks && (
        <button
          onClick={onClearCompleted}
          className="px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900 rounded-lg transition-colors"
          aria-label="Clear all completed tasks"
        >
          Clear Completed
        </button>
      )}
    </div>
  );
};

export default FilterBar;
