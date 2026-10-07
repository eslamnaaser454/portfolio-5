'use client';

import React from 'react';
import {
  GraduationCap,
  Sparkles,
  Users,
  Award,
  CheckCircle2,
  Quote,
  Star,
  Layers,
  Code2,
  BrainCircuit,
  Rocket
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function DepiSection() {
  const pillars = portfolioData.depiPillars;
  const testimonials = portfolioData.testimonials;

  return (
    <section id="depi" className="section-wrapper depi-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag cyan">
            <GraduationCap size={14} />
            <span>DEPI Initiative Spotlight</span>
          </div>
          <h2 className="section-title">
            Empowering Egyptian Engineers at <span className="gradient-text-cyan">DEPI</span>
          </h2>
          <p className="section-subtitle">
            As an official trainer for the <strong>Digital Egypt Pioneers Initiative (DEPI)</strong> under the Ministry of Communications and Information Technology (MCIT), I bridge university fundamentals with modern production software engineering.
          </p>
        </div>

        {/* Highlight Banner */}
        <div className="depi-banner glass-card">
          <div className="depi-banner-content">
            <div className="depi-banner-badge">
              <Award size={18} color="#06b6d4" />
              <span>Ministry of Communications &amp; IT (MCIT) Initiative</span>
            </div>
            <h3 className="depi-banner-title">
              Nurturing 350+ Software Engineers Across Egypt
            </h3>
            <p className="depi-banner-text">
              The mission of DEPI is to prepare top-tier tech talent for multinational and regional industry demands. My teaching methodology emphasizes hands-on code development, architecture refactoring, and practical mastery of Next.js, React, Node.js, and cloud ecosystems.
            </p>
            <div className="depi-metrics-row">
              <div className="depi-metric-item">
                <span className="depi-num gradient-text-cyan">350+</span>
                <span className="depi-lbl">Graduated Trainees</span>
              </div>
              <div className="depi-metric-divider" />
              <div className="depi-metric-item">
                <span className="depi-num gradient-text">100+</span>
                <span className="depi-lbl">Live Code Reviews</span>
              </div>
              <div className="depi-metric-divider" />
              <div className="depi-metric-item">
                <span className="depi-num gradient-text-emerald">98%</span>
                <span className="depi-lbl">Capstone Success Rate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="depi-pillars-grid">
          {pillars.map((item) => (
            <div key={item.title} className="depi-pillar-card glass-card">
              <div className="pillar-top-row">
                <div className="depi-pillar-icon">
                  <Rocket size={20} color="#06b6d4" />
                </div>
                <span className="pillar-active-badge">Active Track</span>
              </div>
              <h4 className="depi-pillar-title">{item.title}</h4>
              <p className="depi-pillar-desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Trainees Feedback / Testimonials */}
        <div className="testimonials-block">
          <div className="test-header">
            <h3 className="test-title">Trainee &amp; Peer Testimonials</h3>
            <p className="test-subtitle">Feedback from engineers who trained with Eng. Eslam Nasser</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <div key={t.id} className="testimonial-card glass-card">
                <div className="test-top">
                  <div className="rating-stars">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#fbbf24" color="#fbbf24" />
                    ))}
                  </div>
                  <Quote size={24} className="test-quote-icon" />
                </div>

                <p className="test-quote">&ldquo;{t.quote}&rdquo;</p>

                <div className="test-author">
                  <div className="test-avatar">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <strong className="test-name">{t.name}</strong>
                    <span className="test-role">{t.role} • {t.batch}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
