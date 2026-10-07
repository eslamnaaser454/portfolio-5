'use client';

import React from 'react';
import confetti from 'canvas-confetti';
import {
  GraduationCap,
  Sparkles,
  Award,
  Terminal,
  CheckCircle2,
  BookOpen,
  Users2,
  Building,
  Layers,
  ArrowRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenPhotoModal: () => void;
}

export default function AboutSection({ onOpenPhotoModal }: AboutSectionProps) {
  const triggerConfetti = () => {
    confetti({
      particleCount: 130,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#fbbf24', '#f59e0b', '#6366f1', '#06b6d4', '#10b981'],
    });
  };

  const pillars = [
    {
      icon: <GraduationCap className="pillar-icon gold" size={24} />,
      title: "AASTMT 3.53 GPA Honors",
      desc: "Graduated with Distinction from the Arab Academy for Science, Technology and Maritime Transport, mastering algorithms, discrete mathematics, and systems design.",
      tag: "Academic Excellence"
    },
    {
      icon: <Users2 className="pillar-icon cyan" size={24} />,
      title: "DEPI Lead Technical Trainer",
      desc: "Official trainer for Egypt's flagship Digital Egypt Pioneers Initiative (MCIT), training hundreds of future software engineers through rigorous coding bootcamps.",
      tag: "Tech Mentorship"
    },
    {
      icon: <Building className="pillar-icon emerald" size={24} />,
      title: "Microsoft Immersion",
      desc: "Immersed in Microsoft enterprise methodologies, cloud development best practices, and advanced developer ecosystem tooling.",
      tag: "Industry Exposure"
    },
    {
      icon: <Layers className="pillar-icon purple" size={24} />,
      title: "Scalable Full-Stack Engineering",
      desc: "Deep focus on clean architecture, resilient APIs, Next.js modern frontend design, TypeScript safety, and containerized microservices.",
      tag: "Engineering Craft"
    }
  ];

  return (
    <section id="about" className="section-wrapper about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag gold">
            <Sparkles size={14} />
            <span>Background &amp; Philosophy</span>
          </div>
          <h2 className="section-title">
            Bridging Academic Rigor with <span className="gradient-text">Practical Engineering</span>
          </h2>
          <p className="section-subtitle">
            From graduating at the top of my class at AASTMT with a 3.53 GPA to training the next generation of Egyptian software developers at DEPI.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="about-grid">
          {/* Left Column: Bio & Story */}
          <div className="about-story-card glass-card">
            <h3 className="story-heading">
              Dedicated to Building Software &amp; Empowering Developers
            </h3>
            
            <p className="story-paragraph">
              My engineering journey began at the <strong>Arab Academy for Science, Technology and Maritime Transport (AASTMT)</strong>, where I built foundational mastery in computer science, software design patterns, and distributed systems—graduating with an exceptional <strong>3.53 / 4.00 GPA (Distinction with Honors)</strong>.
            </p>

            <p className="story-paragraph">
              Driven by a desire to share knowledge and build impactful tech communities, I joined the <strong>Digital Egypt Pioneers Initiative (DEPI)</strong> under the Ministry of Communications and Information Technology (MCIT) as an official Technical Trainer. In this role, I have guided over <strong>350+ aspiring engineers</strong> through complex real-world projects, modern Next.js/React development, API architectures, and industry code standards.
            </p>

            {/* GPA Callout Box */}
            <div className="gpa-callout-box">
              <div className="gpa-callout-info">
                <div className="gpa-badge-title">
                  <Award size={20} color="#fbbf24" />
                  <strong>Academic Distinction: 3.53 GPA</strong>
                </div>
                <p>
                  Class Honors at Arab Academy for Science, Technology and Maritime Transport (AASTMT).
                </p>
              </div>
              <button onClick={triggerConfetti} className="btn btn-gold btn-sm">
                <span>Celebrate 3.53 GPA 🎉</span>
              </button>
            </div>

            {/* Core Values checklist */}
            <div className="values-list">
              <div className="val-item">
                <CheckCircle2 size={18} className="val-icon" />
                <span>Production-ready clean architecture &amp; maintainability</span>
              </div>
              <div className="val-item">
                <CheckCircle2 size={18} className="val-icon" />
                <span>High-performance web applications using Next.js &amp; TypeScript</span>
              </div>
              <div className="val-item">
                <CheckCircle2 size={18} className="val-icon" />
                <span>Empathetic, result-oriented technical mentorship</span>
              </div>
              <div className="val-item">
                <CheckCircle2 size={18} className="val-icon" />
                <span>Continuous exploration of cloud ecosystems &amp; AI tooling</span>
              </div>
            </div>

            <div className="story-cta-row">
              <a href="#experience" className="btn btn-primary">
                <span>View Career Timeline</span>
                <ArrowRight size={16} />
              </a>
              <button onClick={onOpenPhotoModal} className="btn btn-secondary">
                <span>View Microsoft Photo</span>
              </button>
            </div>
          </div>

          {/* Right Column: 4 Pillar Cards */}
          <div className="pillars-grid">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="pillar-card glass-card">
                <div className="pillar-header">
                  <div className="pillar-icon-box">{pillar.icon}</div>
                  <span className="pillar-tag">{pillar.tag}</span>
                </div>
                <h4 className="pillar-title">{pillar.title}</h4>
                <p className="pillar-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
