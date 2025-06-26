// src/App.jsx
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import BlogPage from "./pages/Blog";
import LearnPage from "./pages/Learn";
import ReferencePage from "./pages/Reference";
import CommunityPage from "./pages/Community";
import { AnimatePresence } from "framer-motion";

import QuickStartPage from "./pages/learn/QuickStartPage";
import ThinkingInReactPage from "./pages/learn/ThinkingInReactPage";
import InstallationPage from "./pages/learn/InstallationPage";
import UsingVitePage from "./pages/learn/UsingVitePage";

export default function App() {
  const location = useLocation();

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/reference" element={<ReferencePage />} />
            <Route path="/community" element={<CommunityPage />} />
            {/* Add more subpages later */}
            <Route path="/learn/quick-start" element={<QuickStartPage />} />
            <Route
              path="/learn/thinking-in-react"
              element={<ThinkingInReactPage />}
            />
            <Route path="/learn/installation" element={<InstallationPage />} />
            <Route path="/learn/using-vite" element={<UsingVitePage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
