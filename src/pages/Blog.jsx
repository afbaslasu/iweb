// src/pages/Blog.jsx
import React from "react";
import { Link } from "react-router-dom";
import { CenteredLayout } from "../components/layouts/CenteredLayout";

export default function BlogPage() {
  const posts = [
    {
      title: "Understanding React 19 Transitions",
      image: "https://placehold.co/700x200?text=Blog+Image",
    },
    {
      title: "Tailwind 4.1 Dark Mode Tips",
      image: "https://placehold.co/700x200?text=Blog+Image",
    },
  ];
  return (
    <CenteredLayout>
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Blog
      </h1>
      <div className="space-y-6">
        {posts.map((post, idx) => (
          <article key={idx} className="border-b pb-4">
            <img
              src={post.image}
              alt={post.title}
              className="mb-4 w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-medium text-indigo-600">
              {post.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              This is a short excerpt from the blog post about {post.title}. It
              provides a preview of the content with relevant details.
            </p>
            <Link
              to={`/blog/${idx}`}
              viewTransition
              className="text-indigo-500 hover:underline"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </CenteredLayout>
  );
}
