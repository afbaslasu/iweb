// src/components/layouts/CenteredLayout.jsx
export function CenteredLayout({ children }) {
  return (
    <div className="flex justify-center bg-gray-50 dark:bg-gray-900 min-h-screen p-4">
      <div className="w-full max-w-3xl space-y-6">{children}</div>
    </div>
  );
}


