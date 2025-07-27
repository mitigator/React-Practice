import { useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T){
    const [storedValue, setStoredValue] = useState<T>(() => {
        try{
            return initialValue;
        }catch(error){
            console.log(error);
            return initialValue;
        }
    });

    const setValue = (value: T | ((val:T)=> T)) =>{
        try{
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
        }catch (error) {
      console.log(error);
    }
  };

    return [storedValue, setValue] as const;
}