// src/pages/Learn.jsx
import React from "react";
import { Link } from "react-router-dom";
import ThreeColumnLayout from "../components/layouts/ThreeColumnLayout";


function LearnSidebar() {
  return (
    <nav className="space-y-2">
      <h3 className="text-gray-800 dark:text-gray-200 font-bold">
        Get Started
      </h3>
      <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400">
        <li>
          <Link to="/learn/quick-start" viewTransition>
            Quick Start
          </Link>
        </li>
        <li>
          <Link to="/learn/tutorial" viewTransition>
            Tutorial: Tic-Tac-Toe
          </Link>
        </li>
        <li>
          <Link to="/learn/thinking-in-react" viewTransition>
            Thinking in React
          </Link>
        </li>
      </ul>
      <h3 className="mt-4 text-gray-800 dark:text-gray-200 font-bold">Setup</h3>
      <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400">
        <li>
          <Link to="/learn/installation" viewTransition>
            Installation
          </Link>
        </li>
        <li>
          <Link to="/learn/using-vite" viewTransition>
            Vite Setup
          </Link>
        </li>
        <li>
          <Link to="/learn/typescript" viewTransition>
            Using TypeScript
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function LearnContext() {
  return (
    <div className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
      <h3 className="font-bold">Resources</h3>
      <ul className="space-y-1">
        <li>
          <a href="https://react.dev/" className="hover:underline">
            Official React Docs
          </a>
        </li>
        <li>
          <a href="https://tailwindcss.com/docs" className="hover:underline">
            Tailwind Docs
          </a>
        </li>
        <li>
          <a href="https://vitejs.dev/guide/" className="hover:underline">
            Vite Guide
          </a>
        </li>
      </ul>
    </div>
  );
}

export default function LearnPage() {
  return (
    <ThreeColumnLayout
      leftSidebar={<LearnSidebar />}
      rightSidebar={<LearnContext />}
    >
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Learn React
      </h1>
      <p className="text-gray-700 dark:text-gray-300">
        This is placeholder content for the Learn section. Here we can put
        educational text explaining React concepts. For example, imagine
        paragraphs about components, state, and props.
      </p>
      <img
        src="https://placehold.co/700x200"
        alt="Learn illustration"
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        Getting Started
      </h2>
      <p className="text-gray-600 dark:text-gray-400">
        Continue with a detailed tutorial or explanation. These paragraphs are
        filler content representing how one might write a React tutorial.
      </p>
    </ThreeColumnLayout>
  );
}
