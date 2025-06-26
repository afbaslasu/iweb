// src/pages/Reference.jsx
import React from "react";
import { Link } from "react-router-dom";
import ThreeColumnLayout from "../components/layouts/ThreeColumnLayout";

function ReferenceSidebar() {
  return (
    <nav className="space-y-2">
      <h3 className="text-gray-800 dark:text-gray-200 font-bold">React APIs</h3>
      <ul className="mt-2 text-gray-600 dark:text-gray-400 space-y-1">
        <li>
          <Link to="/reference/component" viewTransition>
            React.Component
          </Link>
        </li>
        <li>
          <Link to="/reference/hooks" viewTransition>
            React Hooks
          </Link>
        </li>
        <li>
          <Link to="/reference/context" viewTransition>
            React Context
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function ReferenceContext() {
  return (
    <div className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
      <h3 className="font-bold">Docs</h3>
      <ul className="space-y-1">
        <li>
          <a
            href="https://react.dev/docs/react-api"
            className="hover:underline"
          >
            React API Docs
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/" className="hover:underline">
            MDN Web Docs
          </a>
        </li>
      </ul>
    </div>
  );
}

export default function ReferencePage() {
  return (
    <ThreeColumnLayout
      leftSidebar={<ReferenceSidebar />}
      rightSidebar={<ReferenceContext />}
    >
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        API Reference
      </h1>
      <p className="text-gray-700 dark:text-gray-300">
        Placeholder reference documentation. List and describe React APIs,
        components, hooks, etc. This text is filler to illustrate the layout.
      </p>
      <img
        src="https://placehold.co/700x200"
        alt="Reference illustration"
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        Components
      </h2>
      <p className="text-gray-600 dark:text-gray-400">
        Example description of React.Component: it represents a base class for
        components with lifecycle methods, etc. Additional sections would
        follow.
      </p>
    </ThreeColumnLayout>
  );
}
