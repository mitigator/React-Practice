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
    <div>
      <div>
        {filters.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={handleFilterClick(key)}
            aria-label={`Filter ${label} tasks`}
          >
            <Icon size={16} />
            {label}
          </button>
        ))}
      </div>
      {hasCompletedTasks && (
        <button onClick={onClearCompleted} aria-label="Clear completed tasks">
          Clear Completed
        </button>
      )}
    </div>
  );
};

export default FilterBar;
