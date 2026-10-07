'use client';

import React, { useState } from 'react';
import {
  Code,
  Layout,
  Server,
  Cpu,
  GraduationCap,
  Sparkles,
  CheckCircle,
  Database,
  Terminal,
  ShieldCheck
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function SkillsSection() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const categories = portfolioData.skillCategories;

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout size={20} />;
      case 'Server':
        return <Server size={20} />;
      case 'Cpu':
        return <Cpu size={20} />;
      case 'GraduationCap':
        return <GraduationCap size={20} />;
      default:
        return <Code size={20} />;
    }
  };

  return (
    <section id="skills" className="section-wrapper skills-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag emerald">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Engineering &amp; <span className="gradient-text-emerald">Instruction Stack</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of full-stack engineering tools, architectural patterns, and training proficiencies.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="skill-tabs-nav">
          {categories.map((cat, idx) => (
            <button
              key={cat.category}
              className={`skill-tab-btn ${activeCategoryIndex === idx ? 'active' : ''}`}
              onClick={() => setActiveCategoryIndex(idx)}
            >
              {getCategoryIcon(cat.icon)}
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="active-skill-panel glass-card">
          <div className="panel-header">
            <div className="panel-header-left">
              <div className="panel-icon-wrap">
                {getCategoryIcon(categories[activeCategoryIndex].icon)}
              </div>
              <div>
                <h3 className="panel-title">{categories[activeCategoryIndex].category}</h3>
                <p className="panel-desc">{categories[activeCategoryIndex].description}</p>
              </div>
            </div>
            <span className="panel-badge">
              {categories[activeCategoryIndex].items.length} Core Competencies
            </span>
          </div>

          <div className="skills-meter-grid">
            {categories[activeCategoryIndex].items.map((skill) => (
              <div key={skill.name} className="skill-meter-card">
                <div className="skill-meta-row">
                  <span className="skill-item-name">{skill.name}</span>
                  <span className="skill-item-level">{skill.level}%</span>
                </div>
                <div className="skill-progress-bar">
                  <div
                    className="skill-progress-fill"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Marquee / Highlights */}
        <div className="tech-badge-cloud">
          <span className="tech-pill">Next.js 16 (App Router)</span>
          <span className="tech-pill">React 19</span>
          <span className="tech-pill">TypeScript</span>
          <span className="tech-pill">Node.js</span>
          <span className="tech-pill">Express</span>
          <span className="tech-pill">PostgreSQL</span>
          <span className="tech-pill">MongoDB</span>
          <span className="tech-pill">REST &amp; GraphQL</span>
          <span className="tech-pill">Docker</span>
          <span className="tech-pill">Git / GitHub</span>
          <span className="tech-pill">DEPI Curriculum Lead</span>
          <span className="tech-pill">AAST Academic Rigor</span>
          <span className="tech-pill">Clean Architecture</span>
        </div>
      </div>
    </section>
  );
}
