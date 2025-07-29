import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Blog } from '../types/blog'
import FavouriteButton from './FavouriteButton'

interface BlogcardProps {
    blog: Blog;
}

const BlogCard: React.FC<BlogcardProps> = ({ blog }) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-800 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 overflow-hidden border border-slate-700 hover:border-slate-600 group"
        >
            <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20"></div>
                <div className="w-full h-full flex items-center justify-center relative z-10">
                    <div className="text-6xl opacity-50 group-hover:opacity-70 transition-opacity">
                        {blog.tags?.[0] === 'React' ? '⚛️' :
                            blog.tags?.[0] === 'CSS' ? '🎨' :
                                blog.tags?.[0] === 'TypeScript' ? '📘' :
                                    blog.tags?.[0] === 'Accessibility' ? '♿' : '📖'}
                    </div>
                </div>
                <div className="absolute top-4 right-4">
                    <FavouriteButton blogId={blog.id} />
                </div>
            </div>

            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-slate-400">
                        {new Date(blog.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                        })}
                    </span>
                    <span className="text-sm text-cyan-400 font-medium">
                        by {blog.author}
                    </span>
                </div>

                <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                    {blog.title}
                </h2>

                <p className="text-slate-300 mb-4 line-clamp-3 text-sm leading-relaxed">
                    {blog.summary}
                </p>

                {blog.tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {blog.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="inline-block bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-xs font-medium border border-slate-600"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                <Link
                    to={`/blog/${blog.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors group"
                >
                    Read more
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </motion.article>
    )
}

export default BlogCard
