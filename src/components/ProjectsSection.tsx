'use client';

import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Award,
  Sparkles,
  Layers,
  Server,
  Code2,
  GraduationCap,
  ShieldCheck,
  ShoppingBag
} from 'lucide-react';
import GithubIcon from './GithubIcon';
import { portfolioData, Project } from '../data/portfolioData';

export default function ProjectsSection() {
  const [filter, setFilter] = useState<string>('All');

  const filterOptions = ['All', 'Education & Tools', 'Full Stack', 'Cloud & Systems'];

  const filteredProjects = portfolioData.projects.filter((p) => {
    if (filter === 'All') return true;
    return p.category === filter;
  });

  const getProjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap size={22} className="proj-icon gold" />;
      case 'Server':
        return <Server size={22} className="proj-icon cyan" />;
      case 'Award':
        return <Award size={22} className="proj-icon gold" />;
      case 'Code2':
        return <Code2 size={22} className="proj-icon purple" />;
      case 'ShoppingBag':
        return <ShoppingBag size={22} className="proj-icon emerald" />;
      case 'ShieldCheck':
        return <ShieldCheck size={22} className="proj-icon cyan" />;
      default:
        return <FolderGit2 size={22} className="proj-icon purple" />;
    }
  };

  return (
    <section id="projects" className="section-wrapper projects-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Featured Software</span>
          </div>
          <h2 className="section-title">
            Engineered for <span className="gradient-text">Performance &amp; Scale</span>
          </h2>
          <p className="section-subtitle">
            A curated selection of software systems, DEPI educational tools, and high-performance web applications.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="project-filters">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              className={`filter-btn ${filter === opt ? 'active' : ''}`}
              onClick={() => setFilter(opt)}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              {/* Card Header */}
              <div className="project-card-header">
                <div className="proj-icon-wrapper">
                  {getProjectIcon(project.iconName)}
                </div>
                <div className="proj-category-badge">{project.category}</div>
              </div>

              {/* Title & Tagline */}
              <div className="project-card-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-tagline">{project.tagline}</p>
                <p className="project-desc">{project.description}</p>
              </div>

              {/* Metrics Badge */}
              {project.metrics && (
                <div className="project-metric-pill">
                  <Sparkles size={14} className="metric-sparkle" />
                  <span>{project.metrics}</span>
                </div>
              )}

              {/* Tech Tags */}
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="proj-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Card Footer Actions */}
              <div className="project-card-footer">
                <a
                  href={project.githubUrl || portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proj-action-btn"
                  title="View Source on GitHub"
                >
                  <GithubIcon size={16} />
                  <span>Code</span>
                </a>
                <a
                  href={project.liveUrl || portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proj-action-btn primary"
                  title="Live Demo / Repository"
                >
                  <span>Overview</span>
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
