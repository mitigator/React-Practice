import React from 'react'

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-800 border-t border-slate-700 mt-auto">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className='text-center'>
                    <div className="flex justify-center items-center space-x-3 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                            <span className='text-white font-bold text-lg'>B</span>
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">BlogSpace</span>
                    </div>
                    <p className='text-slate-400 mb-2'>
                        © 2025 BlogSpace. Built with React, TypeScript and Tailwind
                    </p>
                    <p className='text-slate-400 mb-2'>A modern blog application showcasing cool design and best practice
                        <div className='className="flex justify-center space-x-6 mt-6"'>
                            <span className="text-slate-400 text-sm">React 18</span>
                            <span className="text-slate-400 text-sm">•</span>
                            <span className="text-slate-400 text-sm">TypeScript</span>
                            <span className="text-slate-400 text-sm">•</span>
                            <span className="text-slate-400 text-sm">Tailwind CSS</span>
                            <span className="text-slate-400 text-sm">•</span>
                            <span className="text-slate-400 text-sm">Framer Motion</span>
                        </div>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
