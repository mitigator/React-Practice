import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from 'framer-motion'
import { useFavourites } from "../context/FavouritesContext"
import { blogsData } from "../data/blogsData"
import type { Blog } from "../types/blog"
import BlogCard from "../components/BlogCard"

const Favourites = () => {
    const { favourites } = useFavourites();
    const [favoriteBlogs, setFavoriteBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        const favBlogs = blogsData.filter(blog => favourites.includes(blog.id));
        setFavoriteBlogs(favBlogs);
        window.scrollTo(0, 0);
    }, [favourites]);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        >
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                        Your Favorite Blogs
                    </span>
                </h1>
                <p className="text-slate-300 text-lg">
                    {favoriteBlogs.length > 0
                        ? `You have ${favoriteBlogs.length} favorite blog${favoriteBlogs.length > 1 ? 's' : ''}`
                        : "You haven't added any favorites yet"
                    }
                </p>
            </div>

            {favoriteBlogs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {favoriteBlogs.map((blog, index) => (
                            <motion.div
                                key={blog.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <BlogCard blog={blog} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-16"
                >
                    <div className="text-8xl mb-6">💔</div>
                    <h2 className="text-2xl font-semibold text-slate-300 mb-4">No favorites yet</h2>
                    <p className="text-slate-400 mb-8 max-w-md mx-auto">
                        Start exploring our blog posts and click the heart icon to add them to your favorites!
                    </p>
                    <Link
                        to="/"
                        className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all"
                    >
                        Explore Blogs
                    </Link>
                </motion.div>
            )}
        </motion.div>
    );
};

export default Favourites;