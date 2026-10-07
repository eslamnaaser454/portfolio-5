'use client';

import React from 'react';
import confetti from 'canvas-confetti';
import {
  GraduationCap,
  Sparkles,
  ArrowRight,
  Send,
  Download,
  Award,
  Terminal,
  ExternalLink,
  ShieldCheck,
  Building2,
  Code2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  onOpenPhotoModal: () => void;
}

export default function Hero({ onOpenPhotoModal }: HeroProps) {
  const triggerGpaConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#fbbf24', '#f59e0b', '#6366f1', '#06b6d4', '#10b981'],
    });
  };

  return (
    <section className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Headlines & Bio */}
        <div className="hero-content">
          {/* Top Pill / Role */}
          <div className="hero-pill-wrapper">
            <span className="hero-pill">
              <span className="pill-dot" />
              <Terminal size={14} className="pill-icon" />
              <span>Official DEPI Trainer & Software Engineer</span>
            </span>

            {/* Clickable GPA Celebration Badge */}
            <button
              onClick={triggerGpaConfetti}
              className="badge badge-gpa hero-gpa-pill"
              title="Click to celebrate 3.53 GPA Distinction!"
            >
              <Award size={14} />
              <span>AAST GPA: 3.53 (Honors) 🎉</span>
            </button>
          </div>

          <h1 className="hero-heading">
            Architecting <span className="gradient-text">Modern Software</span> & Mentoring Tomorrow&apos;s Engineers.
          </h1>

          <p className="hero-description">
            Hi, I&apos;m <strong>{portfolioData.personal.name}</strong>. An AASTMT Computer Engineering &amp; Science graduate with a <strong>3.53 GPA</strong> (Distinction with Honors), official <strong>DEPI (Digital Egypt Pioneers Initiative)</strong> Trainer under MCIT, and Software Engineer experienced in building scalable, resilient web platforms.
          </p>

          {/* Quick Key Badges */}
          <div className="hero-credentials-row">
            <div className="cred-badge">
              <GraduationCap size={16} className="cred-icon-gold" />
              <span>AASTMT • 3.53 GPA Honors</span>
            </div>
            <div className="cred-badge">
              <Building2 size={16} className="cred-icon-cyan" />
              <span>DEPI Technical Trainer (MCIT)</span>
            </div>
            <div className="cred-badge">
              <Code2 size={16} className="cred-icon-emerald" />
              <span>Microsoft Technology Immersion</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              <span>Explore My Work</span>
              <ArrowRight size={17} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              <Send size={16} />
              <span>Get In Touch</span>
            </a>
            <button onClick={triggerGpaConfetti} className="btn btn-gold hero-gpa-btn">
              <Sparkles size={16} />
              <span>3.53 GPA Celebration</span>
            </button>
          </div>

          {/* Micro Stat Bar */}
          <div className="hero-mini-stats">
            <div className="mini-stat">
              <span className="mini-stat-val gradient-text-gold">3.53</span>
              <span className="mini-stat-label">Graduation GPA</span>
            </div>
            <div className="mini-stat-divider" />
            <div className="mini-stat">
              <span className="mini-stat-val gradient-text-cyan">350+</span>
              <span className="mini-stat-label">DEPI Trainees</span>
            </div>
            <div className="mini-stat-divider" />
            <div className="mini-stat">
              <span className="mini-stat-val gradient-text">25+</span>
              <span className="mini-stat-label">Projects Built</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Real Photo Card */}
        <div className="hero-visual-wrapper">
          <div className="profile-hologram-card">
            {/* Ambient Back Glow */}
            <div className="card-ambient-glow" />

            {/* Photo Container */}
            <div className="photo-frame" onClick={onOpenPhotoModal} title="Click to view full photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/eslam-microsoft.jpg"
                alt="Eslam Nasser at Microsoft"
                className="hero-profile-img"
              />
              <div className="photo-overlay-hint">
                <span>Click to expand photo</span>
                <ExternalLink size={14} />
              </div>

              {/* Verified Badge */}
              <div className="verified-floating-badge">
                <ShieldCheck size={16} className="text-emerald" />
                <span>Verified Engineer & Trainer</span>
              </div>
            </div>

            {/* Card Footer Details */}
            <div className="card-caption">
              <div className="caption-top">
                <div className="caption-title-wrap">
                  <h3 className="caption-name">{portfolioData.personal.name}</h3>
                  <p className="caption-role">Software Engineer &amp; DEPI Trainer</p>
                </div>
                <div className="ms-tag">
                  <span className="ms-dot" />
                  <span>Microsoft Immersion</span>
                </div>
              </div>

              <div className="caption-details-grid">
                <div className="cap-pill" onClick={triggerGpaConfetti} style={{ cursor: 'pointer' }}>
                  <Award size={14} color="#f59e0b" />
                  <span>GPA 3.53 / 4.00</span>
                </div>
                <div className="cap-pill">
                  <Building2 size={14} color="#06b6d4" />
                  <span>AASTMT Alum</span>
                </div>
                <div className="cap-pill">
                  <Terminal size={14} color="#a855f7" />
                  <span>Next.js • React • TS</span>
                </div>
              </div>
            </div>

            {/* Decorative Orbiting Badges */}
            <div className="floating-orbit-badge badge-top-right">
              <Award size={18} color="#fbbf24" />
              <div>
                <strong>3.53 GPA</strong>
                <span>Class Honors</span>
              </div>
            </div>

            <div className="floating-orbit-badge badge-bottom-left">
              <Sparkles size={18} color="#06b6d4" />
              <div>
                <strong>DEPI Lead</strong>
                <span>350+ Students Mentored</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
