import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        >
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                        About BlogSpace
                    </span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        Our Mission
                    </h2>
                    <p className="text-slate-300 leading-relaxed mb-6">
                        BlogSpace is dedicated to sharing knowledge and insights about modern web development.
                        We focus on practical tutorials, best practices, and real-world experiences that help
                        developers grow and build better applications.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        Whether you're just starting your journey in web development or you're a seasoned
                        professional looking to stay updated with the latest trends, our content is designed
                        to provide value at every level.
                    </p>
                </div>
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-xl p-8 text-center">
                    <div className="text-6xl mb-4">🚀</div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Built with Modern Tech</h3>
                    <p className="text-slate-300">React 18, TypeScript, Tailwind CSS, and Framer Motion</p>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="text-center p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors">
                    <div className="text-3xl mb-4">📚</div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                        Quality Content
                    </h3>
                    <p className="text-slate-400 text-sm">
                        In-depth articles covering React, TypeScript, and modern web development practices.
                    </p>
                </div>
                <div className="text-center p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors">
                    <div className="text-3xl mb-4">⚡</div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                        Performance First
                    </h3>
                    <p className="text-slate-400 text-sm">
                        Built with performance in mind using modern React patterns and optimization techniques.
                    </p>
                </div>
                <div className="text-center p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors">
                    <div className="text-3xl mb-4">🎨</div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                        Cool Design
                    </h3>
                    <p className="text-slate-400 text-sm">
                        Modern, accessible design with smooth animations and a cool color scheme.
                    </p>
                </div>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-semibold text-white mb-4">
                    About the Author
                </h2>
                <div className="max-w-2xl mx-auto">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                        S
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                        Hi, I'm <strong className="text-cyan-400">Shubham</strong>, a passionate
                        software developer with expertise in React, TypeScript, and modern web technologies.
                        I love sharing knowledge and helping other developers build amazing applications.
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default About;