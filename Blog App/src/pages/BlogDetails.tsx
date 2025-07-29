import React, { useMemo, useEffect, useRef } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { blogsData } from "../data/blogsData";
import FavouriteButton from "../components/FavouriteButton";

const BlogDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const titleRef = useRef<HTMLHeadingElement>(null);

    const blog = useMemo(() => {
        return blogsData.find(b => b.id === id);
    }, [id]);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (titleRef.current) {
            titleRef.current.focus();
        }
    }, []);

    if (!blog) {
        return <Navigate to="/404" replace />;
    }

    const renderContent = (content: string) => {
        return content.split('\n').map((line, index) => {
            if (line.startsWith('# ')) {
                return <h1 key={index} className="text-3xl font-bold text-white mb-6 mt-8">{line.slice(2)}</h1>;
            }
            if (line.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-semibold text-slate-200 mb-4 mt-6">{line.slice(3)}</h2>;
            }
            if (line.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-medium text-slate-200 mb-3 mt-4">{line.slice(4)}</h3>;
            }
            if (line.startsWith('```')) {
                return null; // Skip code block markers for now
            }
            if (line.trim() === '') {
                return <br key={index} />;
            }
            if (line.startsWith('- ') || line.match(/^\d+\. /)) {
                return <li key={index} className="text-slate-300 mb-2 ml-4">{line.replace(/^[-\d]+\.?\s/, '')}</li>;
            }
            return <p key={index} className="text-slate-300 mb-4 leading-relaxed">{line}</p>;
        });
    };

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >
            <button
                onClick={() => navigate(-1)}
                className="mb-8 inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group"
            >
                <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to blogs
            </button>

            <header className="mb-8">
                <div className="flex items-start justify-between mb-6">
                    <h1
                        ref={titleRef}
                        tabIndex={-1}
                        className="text-4xl font-bold text-white mb-4 outline-none flex-1 mr-4"
                    >
                        {blog.title}
                    </h1>
                    <FavouriteButton blogId={blog.id} className="flex-shrink-0" />
                </div>

                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                        <span className="text-slate-400">
                            by <span className="font-medium text-cyan-400">{blog.author}</span>
                        </span>
                        <span className="text-slate-600">•</span>
                        <time className="text-slate-400">
                            {new Date(blog.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </time>
                    </div>
                </div>

                {blog.tags && (
                    <div className="flex flex-wrap gap-2 mb-8">
                        {blog.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="inline-block bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </header>

            <div className="prose prose-lg max-w-none">
                <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                    {renderContent(blog.content)}
                </div>
            </div>
        </motion.article>
    );
};

export default BlogDetails;