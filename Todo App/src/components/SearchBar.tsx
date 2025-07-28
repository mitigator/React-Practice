import React, { useRef, useCallback } from "react";

interface SearchBarProps {
    onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const searchRef = useRef<HTMLInputElement>(null);

    const handleSearch = useCallback((): void => {
        const searchValue = searchRef.current?.value || '';
        onSearch(searchValue);
    }, [onSearch]);

    const handleInputChange = useCallback((): void => {
        handleSearch();
    }, [handleSearch]);

    return (
        <div className="mb-6">
            <input
                ref={searchRef}
                type="text"
                placeholder="Search tasks..."
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                aria-label="Search tasks"
            />
        </div>
    );

};

export default SearchBar;