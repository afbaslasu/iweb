import React from "react";
import ThreeColumnLayout from "../../components/layouts/ThreeColumnLayout";

export default function UsingVitePage() {
  return (
    <ThreeColumnLayout title="Using Vite with React">
      <h1 className="text-3xl font-bold mb-4">Using Vite with React</h1>
      <p className="mb-4">
        Vite is a fast build tool that provides a great developer experience for
        React projects.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Fast hot-module replacement (HMR)</li>
        <li>Zero-config setup for React</li>
        <li>Built-in support for JSX and TypeScript</li>
      </ul>
      <p className="mt-4">To start:</p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4">
        npm create vite@latest my-app --template react
      </pre>
    </ThreeColumnLayout>
  );
}
