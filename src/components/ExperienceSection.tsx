'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Briefcase,
  GraduationCap,
  Building2,
  Calendar,
  MapPin,
  CheckCircle,
  Award,
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { portfolioData, ExperienceItem } from '../data/portfolioData';

interface ExperienceSectionProps {
  onOpenPhotoModal: () => void;
}

export default function ExperienceSection({ onOpenPhotoModal }: ExperienceSectionProps) {
  const [activeTab, setActiveTab] = useState<string>('all');

  const triggerGpaCelebration = () => {
    confetti({
      particleCount: 120,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#fbbf24', '#f59e0b', '#10b981', '#6366f1'],
    });
  };

  const experiences = portfolioData.experiences;

  return (
    <section id="experience" className="section-wrapper experience-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag cyan">
            <Briefcase size={14} />
            <span>Career &amp; Education</span>
          </div>
          <h2 className="section-title">
            Professional Journey &amp; <span className="gradient-text-cyan">Milestones</span>
          </h2>
          <p className="section-subtitle">
            A track record of technical training excellence at DEPI, high academic achievement at AASTMT, and software engineering impact.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          {experiences.map((exp, index) => {
            const isAast = exp.id === 'aast';
            const isDepi = exp.id === 'depi';
            const isMs = exp.id === 'microsoft-exp';

            return (
              <div key={exp.id} className="timeline-item">
                {/* Timeline Dot & Line */}
                <div className="timeline-marker">
                  <div className={`timeline-dot ${isAast ? 'dot-gold' : isDepi ? 'dot-cyan' : isMs ? 'dot-emerald' : 'dot-indigo'}`}>
                    {isAast ? (
                      <GraduationCap size={16} />
                    ) : isDepi ? (
                      <Sparkles size={16} />
                    ) : isMs ? (
                      <Building2 size={16} />
                    ) : (
                      <Briefcase size={16} />
                    )}
                  </div>
                  {index !== experiences.length - 1 && <div className="timeline-line" />}
                </div>

                {/* Timeline Card */}
                <div className="timeline-content">
                  <div className={`glass-card experience-card ${isAast ? 'card-border-gold' : isDepi ? 'card-border-cyan' : ''}`}>
                    {/* Top Row */}
                    <div className="exp-card-header">
                      <div>
                        <div className="exp-title-row">
                          <h3 className="exp-role">{exp.role}</h3>
                          {exp.badge && (
                            <span
                              className={`badge ${isAast ? 'badge-gpa' : isDepi ? 'badge-depi' : 'badge-microsoft'}`}
                              onClick={isAast ? triggerGpaCelebration : undefined}
                              style={{ cursor: isAast ? 'pointer' : 'default' }}
                            >
                              {isAast && <Award size={13} />}
                              {exp.badge}
                              {isAast && ' 🎉'}
                            </span>
                          )}
                        </div>
                        <h4 className="exp-org">{exp.organization}</h4>
                      </div>

                      <div className="exp-meta">
                        <span className="exp-period">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                        <span className="exp-location">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="exp-desc">{exp.description}</p>

                    {/* Photo Quick link for Microsoft */}
                    {isMs && (
                      <div className="ms-photo-banner" onClick={onOpenPhotoModal}>
                        <div className="ms-photo-text">
                          <Sparkles size={16} color="#10b981" />
                          <span>View my photo at Microsoft Experience Center</span>
                        </div>
                        <ChevronRight size={16} />
                      </div>
                    )}

                    {/* Key Accomplishments */}
                    <div className="exp-achievements">
                      <h5 className="achievements-heading">Key Accomplishments &amp; Highlights:</h5>
                      <ul className="achievements-list">
                        {exp.achievements.map((item, i) => (
                          <li key={i} className="achievement-item">
                            <CheckCircle size={15} className="achieve-check" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech & Competency Tags */}
                    <div className="exp-skills-wrap">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="exp-skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
