import React from "react";
import ThreeColumnLayout from "../../components/layouts/ThreeColumnLayout";

export default function ThinkingInReactPage() {
  return (
    <ThreeColumnLayout title="Thinking in React">
      <h1 className="text-3xl font-bold mb-4">Thinking in React</h1>
      <p className="mb-4">
        React encourages you to break your UI into reusable components. This
        page guides you through the process of building a UI the React way.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Break the UI into a component hierarchy</li>
        <li>Build a static version in React</li>
        <li>Identify the minimal (but complete) representation of UI state</li>
        <li>Identify where your state should live</li>
        <li>Add inverse data flow</li>
      </ul>
    </ThreeColumnLayout>
  );
}
