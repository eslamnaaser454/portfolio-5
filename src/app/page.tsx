'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import DepiSection from '../components/DepiSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import PhotoModal from '../components/PhotoModal';

export default function Home() {
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  return (
    <main className="portfolio-main">
      <Navbar onOpenPhotoModal={() => setIsPhotoModalOpen(true)} />
      
      <Hero onOpenPhotoModal={() => setIsPhotoModalOpen(true)} />

      <StatsSection />

      <AboutSection onOpenPhotoModal={() => setIsPhotoModalOpen(true)} />

      <ExperienceSection onOpenPhotoModal={() => setIsPhotoModalOpen(true)} />

      <SkillsSection />

      <ProjectsSection />

      <DepiSection />

      <ContactSection />

      <Footer />

      <PhotoModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
      />
    </main>
  );
}
