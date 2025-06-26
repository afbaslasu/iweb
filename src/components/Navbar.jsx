// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SunIcon from "@heroicons/react/24/solid/SunIcon";
import MoonIcon from "@heroicons/react/24/solid/MoonIcon";

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.theme || "light");
  const navigate = useNavigate();

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      root.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [theme]);

  const pages = [
    { title: "Home", path: "/" },
    { title: "Blog", path: "/blog" },
    { title: "Learn React", path: "/learn" },
    { title: "API Reference", path: "/reference" },
    { title: "Community", path: "/community" },
  ];

  const filtered = pages.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (filtered.length > 0) {
      navigate(filtered[0].path);
    }
    setShowResults(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link
          to="/"
          className="text-xl font-bold text-indigo-600 dark:text-indigo-300"
          viewTransition
        >
          ReactClone
        </Link>

        <div className="flex-1 flex justify-center items-center">
          <div className="hidden md:flex md:space-x-4">
            <Link
              to="/learn"
              viewTransition
              className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-500"
            >
              Learn
            </Link>
            <Link
              to="/reference"
              viewTransition
              className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-500"
            >
              Reference
            </Link>
            <Link
              to="/community"
              viewTransition
              className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-500"
            >
              Community
            </Link>
            <Link
              to="/blog"
              viewTransition
              className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-500"
            >
              Blog
            </Link>
          </div>

          <div className="ml-6 relative">
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Search..."
                className="px-2 py-1 rounded-md border dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowResults(true);
                }}
              />
            </form>

            {showResults && searchTerm && (
              <ul className="absolute mt-1 bg-white dark:bg-gray-700 border dark:border-gray-600 rounded-md shadow-lg w-full z-10">
                {filtered.map((p) => (
                  <li key={p.path}>
                    <Link
                      to={p.path}
                      viewTransition
                      className="block px-3 py-2 hover:bg-indigo-100 dark:hover:bg-indigo-900"
                      onClick={() => setShowResults(false)}
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
                {filtered.length === 0 && (
                  <li className="px-3 py-2 text-gray-500">No results</li>
                )}
              </ul>
            )}
          </div>
        </div>

        {/* Theme toggle with Heroicons v2 */}
        <button
          onClick={() =>
            setTheme((prev) => (prev === "light" ? "dark" : "light"))
          }
          className="p-2 rounded-full text-gray-500 hover:text-gray-800 dark:hover:text-gray-100"
        >
          {theme === "light" ? (
            <MoonIcon className="h-6 w-6" />
          ) : (
            <SunIcon className="h-6 w-6" />
          )}
        </button>
      </div>
    </nav>
  );
}
