import React, { useState } from 'react';
import { ChevronRight, PlayCircle, FileText, CheckCircle, Code, Menu, ChevronDown } from 'lucide-react';

export const TutorialsView: React.FC = () => {
  const [activeLesson, setActiveLesson] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const modules = [
    { title: "Introduction to React", lessons: ["Setting up the Environment", "JSX Basics", "Components & Props"] },
    { title: "State Management", lessons: ["useState Hook", "useEffect Hook", "Context API"] },
    { title: "Advanced Patterns", lessons: ["Custom Hooks", "HOCs", "Performance Optimization"] },
  ];

  // Flat list for easier prev/next logic
  const allLessons = modules.flatMap(m => m.lessons);

  return (
    <div className="flex min-h-[calc(100vh-64px)] bg-gray-50 font-sans relative">
      
      {/* Mobile Lesson Selector Toggle */}
      <div className="md:hidden fixed bottom-6 right-6 z-40">
        <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="bg-indigo-600 text-white p-4 rounded-full shadow-lg flex items-center gap-2"
        >
            <Menu size={24} />
            <span className="font-bold">Lessons</span>
        </button>
      </div>

      {/* Sidebar Navigation - Desktop */}
      <aside className="w-72 bg-white border-r border-gray-200 hidden md:flex flex-col h-[calc(100vh-64px)] fixed overflow-y-auto custom-scrollbar z-30">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <Code className="text-indigo-600" /> React Mastery
          </h2>
          <p className="text-xs text-gray-500 mt-1">v18.2.0 Documentation</p>
        </div>
        
        <div className="p-4 space-y-6">
          {modules.map((module, modIdx) => (
            <div key={modIdx}>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">{module.title}</h3>
              <ul className="space-y-1">
                {module.lessons.map((lesson, lessonIdx) => {
                  const flatIdx = modIdx * 3 + lessonIdx; 
                  const isActive = activeLesson === flatIdx;
                  return (
                    <li key={lessonIdx}>
                      <button
                        onClick={() => setActiveLesson(flatIdx)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm flex items-center justify-between group transition-colors ${
                          isActive 
                            ? 'bg-indigo-50 text-indigo-700 font-medium' 
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                            <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-indigo-600' : 'bg-gray-300 group-hover:bg-gray-400'}`}></span>
                            {lesson}
                        </div>
                        {isActive && <ChevronRight size={14} />}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </aside>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="absolute right-0 top-0 bottom-0 w-3/4 bg-white shadow-xl overflow-y-auto p-4" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-bold text-gray-900">Course Content</h2>
                    <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-gray-100 rounded-full">
                        <ChevronDown size={20} className="rotate-90" />
                    </button>
                </div>
                {modules.map((module, modIdx) => (
                    <div key={modIdx} className="mb-6">
                        <h3 className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-3">{module.title}</h3>
                        <ul className="space-y-2">
                            {module.lessons.map((lesson, lessonIdx) => {
                                const flatIdx = modIdx * 3 + lessonIdx;
                                return (
                                    <li key={lessonIdx}>
                                        <button 
                                            onClick={() => { setActiveLesson(flatIdx); setIsMobileMenuOpen(false); }}
                                            className={`w-full text-left p-3 rounded-lg border ${activeLesson === flatIdx ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-gray-200 text-gray-700'}`}
                                        >
                                            {lesson}
                                        </button>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 md:ml-72 p-4 md:p-8 lg:p-12 max-w-5xl w-full">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          
          {/* Header */}
          <div className="p-6 md:p-8 border-b border-gray-100 bg-gradient-to-r from-white to-gray-50">
            <div className="flex flex-wrap items-center gap-2 text-sm text-indigo-600 font-medium mb-2">
                <span>Module {(Math.floor(activeLesson / 3)) + 1}</span>
                <ChevronRight size={12} />
                <span>Lesson {(activeLesson % 3) + 1}</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              {allLessons[activeLesson]}
            </h1>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs md:text-sm text-gray-500">
                <span className="flex items-center gap-1"><ClockIcon /> 15 min read</span>
                <span className="flex items-center gap-1"><FileText size={16} /> Beginner</span>
                <span className="flex items-center gap-1 text-green-600"><CheckCircle size={16} /> Updated Mar 2024</span>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 md:p-8 prose prose-indigo max-w-none">
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
              In this lesson, we will explore the fundamental concepts necessary to build modern web applications using React. Understanding these core principles is crucial for scaling your application effectively.
            </p>

            <div className="my-8 aspect-video bg-gray-900 rounded-lg flex items-center justify-center relative group cursor-pointer shadow-lg overflow-hidden">
                <img src={`https://picsum.photos/800/450?random=${activeLesson+50}`} alt="Video Placeholder" className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle size={64} className="text-white opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Code Example</h3>
            <div className="bg-[#1e1e1e] rounded-lg p-4 md:p-6 mb-8 overflow-x-auto shadow-inner border border-gray-800">
<pre className="text-xs md:text-sm font-mono text-gray-300">
<code>{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`}</code>
</pre>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Takeaways</h3>
            <ul className="space-y-3 mb-8">
                {[1, 2, 3].map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm md:text-base text-gray-700 bg-indigo-50/50 p-4 rounded-lg border border-indigo-100">
                        <CheckCircle className="text-indigo-600 mt-1 flex-shrink-0" size={18} />
                        <span>Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.</span>
                    </li>
                ))}
            </ul>
          </div>
          
          {/* Footer Navigation */}
          <div className="bg-gray-50 p-6 flex justify-between items-center border-t border-gray-200">
             <button 
                disabled={activeLesson === 0}
                onClick={() => setActiveLesson(p => Math.max(0, p - 1))}
                className="px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
             >
                Previous
             </button>
             <button 
                onClick={() => setActiveLesson(p => Math.min(allLessons.length - 1, p + 1))}
                disabled={activeLesson === allLessons.length - 1}
                className="px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 shadow-sm flex items-center gap-2 disabled:opacity-50"
             >
                Next Lesson <ChevronRight size={16} />
             </button>
          </div>

        </div>
      </main>
    </div>
  );
};

const ClockIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
);