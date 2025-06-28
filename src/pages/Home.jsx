// src/pages/Home.jsx
import React from "react";
import { CenteredLayout } from "../components/layouts/CenteredLayout";
import TestPage from "../components/TestPage";

export default function HomePage() {
  return (
    <CenteredLayout>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Welcome to ReactClone
      </h1>
      <p className="text-gray-700 dark:text-gray-300">
        This is a placeholder introduction for the ReactClone home page. Here we
        might describe the site’s purpose and highlight key resources or
        tutorials.
      </p>
      {/* Placeholder Hero Image */}
      <img
        src="https://picsum.photos/800/300?random=1"
        alt="Placeholder hero"
        className="w-full h-60 object-cover rounded-lg"
      />

      <TestPage/>
    </CenteredLayout>
  );
}



