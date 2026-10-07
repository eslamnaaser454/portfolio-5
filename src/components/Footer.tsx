'use client';

import React from 'react';
import { ArrowUp, Mail, GraduationCap, Award } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-logo">{portfolioData.personal.name}</h3>
            <p className="footer-bio">
              Software Engineer &bull; DEPI Technical Trainer &bull; AASTMT Honors Graduate (3.53 GPA)
            </p>
            <div className="footer-badges">
              <span className="badge badge-gpa">
                <GraduationCap size={14} />
                <span>AAST 3.53 GPA Honors</span>
              </span>
              <span className="badge badge-depi">
                <Award size={14} />
                <span>DEPI Lead Trainer</span>
              </span>
            </div>
          </div>

          <div className="footer-links-group">
            <div className="footer-col">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#depi">DEPI Spotlight</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Connect</h4>
              <ul>
                <li>
                  <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer">
                    <GithubIcon size={14} />
                    <span>GitHub</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${portfolioData.personal.email}`}>
                    <Mail size={14} />
                    <span>Email Direct</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} {portfolioData.personal.name}. Built with Next.js &amp; Modern Vanilla CSS.
          </p>
          <button onClick={scrollToTop} className="scroll-top-btn" title="Back to top">
            <span>Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
