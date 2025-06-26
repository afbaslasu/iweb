// src/components/layouts/ThreeColumnLayout.jsx
import React from "react";

export default function ThreeColumnLayout({ children, title }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4 py-8">
      {/* Left Sidebar */}
      <aside className="hidden md:block md:col-span-1">
        <div className="sticky top-24 space-y-2">
          <p className="font-bold text-gray-700 dark:text-gray-300">Learn</p>
          <ul className="space-y-1 text-sm text-blue-600 dark:text-blue-400">
            <li>
              <a href="/learn/quick-start">Quick Start</a>
            </li>
            <li>
              <a href="/learn/thinking-in-react">Thinking in React</a>
            </li>
            <li>
              <a href="/learn/installation">Installation</a>
            </li>
            <li>
              <a href="/learn/using-vite">Using Vite</a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="col-span-1 md:col-span-2">
        {title && <h1 className="text-2xl font-semibold mb-6">{title}</h1>}
        {children}
      </main>

      {/* Right Sidebar */}
      <aside className="hidden lg:block lg:col-span-1">
        <div className="sticky top-24 text-sm text-gray-500 dark:text-gray-300">
          <p className="font-semibold mb-2">On this page</p>
          <ul className="space-y-1">
            <li>
              <a href="#">Intro</a>
            </li>
            <li>
              <a href="#">Install</a>
            </li>
            <li>
              <a href="#">Setup</a>
            </li>
            <li>
              <a href="#">Next Steps</a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
