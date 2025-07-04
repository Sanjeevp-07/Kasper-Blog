import React from 'react';
import '../Style/KeyPoints.css';

const KeyPoints = () => {
  return (
    <section className="key-points">
      <h2>Key Points for Migrating to Linear:</h2>
      <ul>
        <li>
          <strong>Speed and Simplicity:</strong> Linear offers a faster, cleaner alternative to traditional
          project management tools like Jira and Trello.
        </li>
        <li>
          <strong>Plan Your Migration:</strong> Audit current projects and decide what active tasks need to be moved.
        </li>
        <li>
          <strong>Start Fresh:</strong> Only migrate relevant, active work — leave old, cluttered tasks behind.
        </li>
        <li>
          <strong>Set Up Organized Teams and Projects:</strong> Structure your workspace clearly for better team collaboration.
        </li>
        <li>
          <strong>Use Import Tools Wisely:</strong> Take advantage of Linear’s built-in importers (for Jira, GitHub Issues, etc.) if needed.
        </li>
        <li>
          <strong>Train Your Team:</strong> Teach important features like cycles, roadmaps, and powerful keyboard shortcuts.
        </li>
        <li>
          <strong>Leverage Integrations:</strong> Connect Linear easily with Slack, GitHub, and Figma to streamline your workflows.
        </li>
        <li>
          <strong>Focus on Speed and Flow:</strong> The goal is to work smarter, move faster, and keep project management light and intuitive.
        </li>
      </ul>
    </section>
  );
};

export default KeyPoints;
