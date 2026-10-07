'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Mail,
  Copy,
  Check,
  Send,
  MapPin,
  Calendar,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import GithubIcon from './GithubIcon';
import { portfolioData } from '../data/portfolioData';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#06b6d4', '#10b981'],
      });
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="section-wrapper contact-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag emerald">
            <Mail size={14} />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h2 className="section-title">
            Let&apos;s Build Something <span className="gradient-text-emerald">Exceptional</span>
          </h2>
          <p className="section-subtitle">
            Whether you need a software engineer, corporate technical trainer, or wish to discuss cutting-edge development, I&apos;d love to connect.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="contact-info-card glass-card">
            <h3 className="contact-info-heading">Direct Contact Channels</h3>
            <p className="contact-info-sub">
              Feel free to reach out directly via email or check my GitHub repositories.
            </p>

            {/* Email Copy Box */}
            <div className="email-copy-box">
              <div className="email-icon-box">
                <Mail size={20} color="#06b6d4" />
              </div>
              <div className="email-details">
                <span className="email-label">Email Address</span>
                <span className="email-val">{portfolioData.personal.email}</span>
              </div>
              <button
                type="button"
                onClick={copyEmail}
                className={`copy-btn ${copied ? 'copied' : ''}`}
                title="Copy email to clipboard"
              >
                {copied ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Quick Details List */}
            <div className="contact-details-list">
              <div className="contact-detail-item">
                <MapPin size={18} className="cd-icon" />
                <div>
                  <strong>Location</strong>
                  <p>Alexandria / Cairo, Egypt</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <Calendar size={18} className="cd-icon" />
                <div>
                  <strong>Availability</strong>
                  <p>Open for Senior Engineering &amp; DEPI / Corporate Training</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <GithubIcon size={18} className="cd-icon" />
                <div>
                  <strong>GitHub Profile</strong>
                  <p>
                    <a
                      href={portfolioData.personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link"
                    >
                      github.com/eslamnaaser454 <ExternalLink size={12} />
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Status callout */}
            <div className="contact-status-box">
              <div className="csb-indicator" />
              <div>
                <strong>Active Response Window</strong>
                <p>Typically replies within 24 hours.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-card glass-card">
            <h3 className="contact-form-heading">Send a Message</h3>
            
            {submitted ? (
              <div className="success-banner">
                <Sparkles size={32} color="#10b981" />
                <h4>Message Received!</h4>
                <p>Thank you for reaching out. I will get back to you shortly at {formData.email || 'your email'}.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Your Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Project Inquiry / DEPI Training / Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Describe your inquiry or project details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary submit-btn"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
