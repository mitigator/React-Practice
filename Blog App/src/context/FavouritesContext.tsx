import React, { createContext, useContext, type ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface FavouritesContextType {
    favourites: string[];
    addToFavourites: (blogId: string) => void;
    removeFromFavourites: (blogId: string) => void;
    isFavourite: (blogId: string) => boolean;
    toggleFavourite: (blogId: string) => void;
}

const FavouritesContext = createContext<FavouritesContextType | undefined>(undefined);

interface FavouritesProviderProps {
    children: ReactNode;
}

export const FavouritesProvider: React.FC<FavouritesProviderProps> = ({ children }) => {
    const [favourites, setFavourites] = useLocalStorage<string[]>("favourites", []);

    const addToFavourites = (blogId: string) => {
        setFavourites([...favourites, blogId]);
    };

    const removeFromFavourites = (blogId: string) => {
        setFavourites(favourites.filter((id: string) => id !== blogId));
    };

    const isFavourite = (blogId: string) => favourites.includes(blogId);

    const toggleFavourite = (blogId: string) => {
        if (isFavourite(blogId)) {
            removeFromFavourites(blogId);
        } else {
            addToFavourites(blogId);
        }
    };

    return (
        <FavouritesContext.Provider value={{ favourites, addToFavourites, removeFromFavourites, isFavourite, toggleFavourite }}>
            {children}
        </FavouritesContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFavourites = (): FavouritesContextType => {
    const context = useContext(FavouritesContext);
    if (!context) {
        throw new Error("useFavourites must be used within a FavouritesProvider");
    }
    return context;
};