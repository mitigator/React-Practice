import { useMemo, useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'
import type { Blog } from '../types/blog'
import { blogsData } from '../data/blogsData'
import { AnimatePresence, motion } from 'framer-motion'

const Home = () => {
    const [blogs] = useState<Blog[]>(blogsData);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredBlogs = useMemo(() => {
        if (!searchTerm) return blogs;
        return blogs.filter(blog =>
            blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    }, [blogs, searchTerm]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className='text-center mb-16'>
                <motion.h1 initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Welcome to BlogSpace
                    </span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                    Discover insightful articles about web development, React, TypeScript, and modern frontend practices.
                    Join our community of developers sharing knowledge and building amazing things.
                </motion.p>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-12">
                <div className="max-w-md mx-auto relative">
                    <input className="w-full px-6 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all outline-none" type='text' placeholder='Search for a blog...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                    {filteredBlogs.map((blog, index) => (
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
            {filteredBlogs.length === 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-16"
                >
                    <div className="text-6xl mb-4">🔍</div>
                    <p className="text-slate-400 text-lg">
                        No blogs found matching your search.
                    </p>
                </motion.div>
            )}

        </motion.div>
    )
}

export default Home
