import React from "react";
import { Link } from "react-router-dom";
import { useFavourites } from "../context/FavouritesContext";

const Header: React.FC = () => {
    const { favourites } = useFavourites();

    return (
        <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-50 backdrop-blur-sm bg-slate-800/95">
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">B</span>
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            BlogSpace
                        </span>
                    </Link>
                    <div className="flex items-center space-x-8">
                        <Link to='/' className="text-slate-300 hover:text-cyan-400 transition-colors font-medium relative group">
                            Home
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link
                            to="/about"
                            className="text-slate-300 hover:text-cyan-400 transition-colors font-medium relative group"
                        >
                            About
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link to='/favorites' className="text-slate-300 hover:text-pink-400 transition-colors font-medium relative group flex items-center space-x-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <span>Favorites</span>
                            {favourites.length > 0 && (
                                <span className="bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{favourites.length}</span>
                            )}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;