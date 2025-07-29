import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="min-h-[60vh] flex items-center justify-center px-4"
        >
            <div className="text-center">
                <div className="text-8xl mb-8">🔍</div>
                <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-slate-200 mb-6">
                    Page Not Found
                </h2>
                <p className="text-slate-400 mb-8 max-w-md mx-auto">
                    The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
                </p>
                <div className="space-x-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg transition-colors"
                    >
                        Go Back
                    </button>
                    <Link
                        to="/"
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-6 py-3 rounded-lg transition-colors inline-block"
                    >
                        Home Page
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default NotFound;