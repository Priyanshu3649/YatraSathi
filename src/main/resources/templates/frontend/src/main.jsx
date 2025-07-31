// App.jsx
import React from 'react';

const App = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            <header className="bg-indigo-600 text-white p-4 shadow-md">
                <h1 className="text-2xl font-bold">Learning Path Dashboard</h1>
            </header>

            <main className="p-6">
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Upload Publication Record</h2>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <input
                            type="file"
                            accept=".bib,.xlsx,.xls"
                            className="border p-2 w-full rounded-md"
                        />
                        <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md">
                            Upload
                        </button>
                    </div>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Generated Learning Paths</h2>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <ul className="list-disc list-inside space-y-2">
                            <li>Paper A → Topic 1 → Article, Video</li>
                            <li>Paper B → Topic 2 → Document, YouTube link</li>
                            <li>Paper C → Topic 3 → PDF, Notes</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">Progress Overview</h2>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-gray-600">Coming soon: progress bars, charts, and status badges</p>
                    </div>
                </section>
            </main>

            <footer className="text-center text-sm text-gray-500 py-4">
                &copy; {new Date().getFullYear()} LearningPath.ai | All Rights Reserved
            </footer>
        </div>
    );
};

export default App;
