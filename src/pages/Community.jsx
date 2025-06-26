// src/pages/Community.jsx
import React from "react";
import ThreeColumnLayout from "../components/layouts/ThreeColumnLayout";

function CommunitySidebar() {
  return (
    <nav className="space-y-2">
      <h3 className="text-gray-800 dark:text-gray-200 font-bold">Community</h3>
      <ul className="mt-2 text-gray-600 dark:text-gray-400 space-y-1">
        <li>
          <Link to="/community/forum" viewTransition>
            Forums
          </Link>
        </li>
        <li>
          <Link to="/community/events" viewTransition>
            Events
          </Link>
        </li>
        <li>
          <Link to="/community/blogs" viewTransition>
            Community Blogs
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function CommunityContext() {
  return (
    <div className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
      <h3 className="font-bold">Get Involved</h3>
      <ul className="space-y-1">
        <li>
          <a
            href="https://github.com/reactjs/reactjs.org"
            className="hover:underline"
          >
            React GitHub
          </a>
        </li>
        <li>
          <a
            href="https://reactjs.org/community/support.html"
            className="hover:underline"
          >
            React Community
          </a>
        </li>
      </ul>
    </div>
  );
}

export default function CommunityPage() {
  return (
    <ThreeColumnLayout
      leftSidebar={<CommunitySidebar />}
      rightSidebar={<CommunityContext />}
    >
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Community
      </h1>
      <p className="text-gray-700 dark:text-gray-300">
        Placeholder community content. Here we might showcase community news,
        links to events, social media, or Q&A sections.
      </p>
      <img
        src="https://picsum.photos/seed/community/700/200"
        alt="Community illustration"
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        Connect
      </h2>
      <p className="text-gray-600 dark:text-gray-400">
        Encourage users to join discussions and contribute. This is example text
        to show how a community page might read.
      </p>
    </ThreeColumnLayout>
  );
}
