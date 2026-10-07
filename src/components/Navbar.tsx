'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, GraduationCap, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  onOpenPhotoModal: () => void;
}

export default function Navbar({ onOpenPhotoModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'DEPI Training', href: '#depi' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#" className="nav-brand">
          <div className="brand-avatar-mini" onClick={(e) => { e.preventDefault(); onOpenPhotoModal(); }} title="View Photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/eslam-microsoft.jpg" alt="Eslam Nasser" />
            <span className="online-dot" />
          </div>
          <div className="brand-info">
            <span className="brand-name">{portfolioData.personal.name}</span>
            <span className="brand-badge">DEPI Trainer</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA & Status */}
        <div className="nav-actions">
          <div className="status-pill" title="Currently open for opportunities & consulting">
            <span className="pulse-indicator" />
            <span className="status-text">Available</span>
          </div>

          <a href="#contact" className="btn btn-primary nav-cta-btn">
            <span>Hire Me</span>
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-overlay">
          <div className="mobile-menu-card">
            <div className="mobile-menu-header">
              <span className="mobile-title">Navigation</span>
              <button
                className="close-mobile-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="mobile-links">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="mobile-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="mobile-divider" />
              <div className="mobile-gpa-badge">
                <GraduationCap size={16} color="#fbbf24" />
                <span>AAST Honors • 3.53 GPA</span>
              </div>
              <a
                href="#contact"
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '12px' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Get In Touch
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
