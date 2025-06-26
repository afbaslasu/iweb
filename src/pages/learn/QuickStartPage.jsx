import React from "react";
import ThreeColumnLayout from "../../components/layouts/ThreeColumnLayout";

export default function QuickStartPage() {
  return (
    <ThreeColumnLayout title="Quick Start">
      <h1 className="text-3xl font-bold mb-4">Quick Start</h1>
      <p className="mb-4">
        Get up and running with React in just a few steps. This page gives a
        quick overview of how to create a React project using modern tools like
        Vite and Tailwind.
      </p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>Install Node.js and npm</li>
        <li>
          Run{" "}
          <code className="bg-gray-100 p-1 rounded">
            npm create vite@latest my-app --template react
          </code>
        </li>
        <li>
          Navigate into your project: <code>cd my-app</code>
        </li>
        <li>
          Install dependencies: <code>npm install</code>
        </li>
        <li>
          Start dev server: <code>npm run dev</code>
        </li>
      </ol>
    </ThreeColumnLayout>
  );
}
