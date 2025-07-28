import React,{useRef,useCallback} from "react";

interface SearchBarProps {
    onSearch:(term:string)=>void;
}

const SearchBar:React.FC<SearchBarProps> = ({onSearch})=>{
    const searchRef = useRef<HTMLInputElement>(null);

    const handleSearch= useCallback((): void =>{
        const searchValue = searchRef.current?.value || '';
        onSearch(searchValue);
    }, [onSearch]);

    const handleinputChange = useCallback(():void=>{
        handleSearch();
    }, [handleSearch]);

    return(
        <div>
            <input
            ref={searchRef} type="text" placeholder="Search..." onChange={handleinputChange} aria-label="Search tasks" />
        </div>
    );

};

export default SearchBar;