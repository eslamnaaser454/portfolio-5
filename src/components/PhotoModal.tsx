'use client';

import React, { useEffect } from 'react';
import { X, Award, Building2, Sparkles, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PhotoModal({ isOpen, onClose }: PhotoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="photo-modal-card glass-card" onClick={(e) => e.stopPropagation()}>
        <div className="photo-modal-header">
          <div className="modal-title-row">
            <Building2 size={20} color="#10b981" />
            <h3>{portfolioData.personal.name} @ Microsoft</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-image-wrapper">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/eslam-microsoft.jpg"
            alt="Eslam Nasser at Microsoft"
            className="modal-photo"
          />
        </div>

        <div className="modal-footer-info">
          <div className="modal-badges-row">
            <span className="badge badge-gpa">
              <GraduationCap size={14} />
              <span>AASTMT • 3.53 GPA (Honors)</span>
            </span>
            <span className="badge badge-depi">
              <Sparkles size={14} />
              <span>Official DEPI Trainer (MCIT)</span>
            </span>
            <span className="badge badge-microsoft">
              <Award size={14} />
              <span>Microsoft Experience</span>
            </span>
          </div>
          <p className="modal-caption-text">
            Eslam Nasser engaged at Microsoft premises — combining academic excellence from AASTMT (3.53 GPA) with software engineering mentorship for Egypt&apos;s next generation of developers at DEPI.
          </p>
        </div>
      </div>
    </div>
  );
}
