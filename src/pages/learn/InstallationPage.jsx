import React from "react";
import ThreeColumnLayout from "../../components/layouts/ThreeColumnLayout";

export default function InstallationPage() {
  return (
    <ThreeColumnLayout title="Installation">
      <h1 className="text-3xl font-bold mb-4">Installing React</h1>
      <p className="mb-4">
        You can install React using npm, Yarn, or your preferred package
        manager.
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded mb-4">
        npm install react react-dom
      </pre>
      <p>
        If you’re using Vite, React comes pre-installed. Just run{" "}
        <code>npm run dev</code> to begin.
      </p>
    </ThreeColumnLayout>
  );
}
