import React from "react";
import { useFavourites } from "../context/FavouritesContext";

interface FavoriteButtonProps {
    blogId: string;
    className?: string;
}

const FavouriteButton: React.FC<FavoriteButtonProps> = ({ blogId, className = "" }) => {

    const { isFavourite, toggleFavourite } = useFavourites();
    const favorite = isFavourite(blogId);

    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleFavourite(blogId);
            }}
            className={`p-2 rounded-lg transition-all duration-200 ${favorite
                ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/25'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-pink-400'
                } ${className}`}
            aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
        >
            <svg
                className="w-5 h-5"
                fill={favorite ? 'currentColor' : 'none'}
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
            </svg>
        </button>
    )
}

export default FavouriteButton