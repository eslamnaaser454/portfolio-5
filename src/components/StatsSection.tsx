'use client';

import React from 'react';
import confetti from 'canvas-confetti';
import { Award, Users, Code, Clock, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function StatsSection() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#fbbf24', '#f59e0b', '#d97706'],
    });
  };

  const icons = [
    <Award key="award" size={24} className="stat-card-icon gold" />,
    <Users key="users" size={24} className="stat-card-icon cyan" />,
    <Code key="code" size={24} className="stat-card-icon indigo" />,
    <Clock key="clock" size={24} className="stat-card-icon emerald" />,
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {portfolioData.stats.map((stat, idx) => {
            const isGpa = idx === 0;
            return (
              <div
                key={stat.label}
                className={`stat-card glass-card ${isGpa ? 'gpa-highlight-card' : ''}`}
                onClick={isGpa ? triggerConfetti : undefined}
                role={isGpa ? 'button' : undefined}
                tabIndex={isGpa ? 0 : undefined}
                title={isGpa ? 'Click to celebrate graduation GPA!' : undefined}
              >
                <div className="stat-top">
                  <div className="stat-icon-wrapper">{icons[idx]}</div>
                  {isGpa && (
                    <span className="stat-click-hint">
                      Click to celebrate 🎉
                    </span>
                  )}
                </div>

                <div className="stat-body">
                  <div className="stat-number-wrap">
                    <span className="stat-number">{stat.value}</span>
                    {stat.suffix && <span className="stat-suffix">{stat.suffix}</span>}
                  </div>
                  <h3 className="stat-title">{stat.label}</h3>
                  <p className="stat-detail">{stat.detail}</p>
                </div>

                <div className="stat-card-glow" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
