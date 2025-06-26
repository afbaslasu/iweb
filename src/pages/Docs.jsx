// src/pages/Docs.jsx
import { motion } from "framer-motion";

function Docs() {
  return (
    <motion.main
      className="flex-grow container mx-auto px-4 py-8 space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-4xl font-bold">Documentation</h1>
      <p className="text-gray-700">
        Welcome to the documentation. This section can include guides,
        tutorials, or API reference info.
      </p>
      <ul className="list-disc pl-6 text-gray-600">
        <li>
          <a href="#" className="text-blue-500 hover:underline">
            Getting Started Guide
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-500 hover:underline">
            API Reference
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-500 hover:underline">
            Advanced Topics
          </a>
        </li>
      </ul>
      <p className="text-gray-700">
        (All content here is static JSX, demonstrating how docs pages can be
        built as React components.)
      </p>
    </motion.main>
  );
}

export default Docs;
