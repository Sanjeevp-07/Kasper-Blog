import React from 'react';
import teamImage from '../assets/team.png';
import '../Style/ArticleSection.css'; // replace with your image path

const ArticleSection = () => {
  return (
    <section className="article-section">
      <div className="text-content">
        <p>
          In today’s fast-paced work environment, teams need tools that help them move quickly,
          stay organized, and focus on what truly matters — <strong>building and delivering great products</strong>.
          That’s where Linear comes in. Known for its ultra-fast performance, minimalistic interface,
          and seamless collaboration features, Linear has quickly become a favorite among modern teams.
          Migrating to Linear isn’t just about switching tools; it’s about upgrading the way your team works.
        </p>

        <p>
          Unlike traditional project management platforms that often become cluttered and overwhelming,
          Linear keeps things simple and focused. It offers powerful features like cycles, roadmaps,
          keyboard shortcuts, and deep integrations with tools like GitHub, Slack, and Figma — 
          <strong>all designed to streamline your workflow</strong>. In this blog, we’ll cover why making the move
          to Linear is a smart decision, what steps you should take to prepare for the migration,
          and how to ensure a smooth transition without losing important data or momentum.
          Whether you’re a small startup or a growing team, this guide will help you migrate to
          Linear with confidence and clarity.
        </p>
      </div>

      <div className="image-content">
        <img src={teamImage} alt="Team Collaboration" />
      </div>
    </section>
  );
};

export default ArticleSection;
