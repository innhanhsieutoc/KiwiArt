import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { PaintingDetailModal } from './components/PaintingDetailModal';
import { Painting } from './types';
import { SectionHeading } from './components/SectionHeading';
import { NAV_ITEMS } from './constants';

function App() {
  const [selectedPainting, setSelectedPainting] = useState<Painting | null>(null);
  const [activeSection, setActiveSection] = useState('home'); // Default active section

  // Create refs for each section
  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    gallery: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  const handleOpenModal = (painting: Painting) => {
    console.log('Opening modal for:', painting.name, 'ID:', painting.id); // Debugging log
    setSelectedPainting(painting);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const handleCloseModal = () => {
    console.log('Closing modal'); // Debugging log
    setSelectedPainting(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };
  
  // Refined useEffect for stable IntersectionObserver setup
  useEffect(() => {
      const observer = new IntersectionObserver(
          (entries) => {
              let currentMostVisibleSectionId = 'home'; // Default to home
              let maxVisibleRatio = 0;

              entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                      // Prioritize sections that are more visible
                      if (entry.intersectionRatio > maxVisibleRatio) {
                          maxVisibleRatio = entry.intersectionRatio;
                          currentMostVisibleSectionId = entry.target.id;
                      }
                  }
              });

              // Use functional update to avoid activeSection in dependency array
              setActiveSection(prevActiveSection => {
                  if (currentMostVisibleSectionId && currentMostVisibleSectionId !== prevActiveSection) {
                      return currentMostVisibleSectionId;
                  }
                  return prevActiveSection;
              });

              // Special handling for the very top of the page (home section)
              // Only apply if the current active section isn't already 'home'
              if (window.scrollY < 100 && activeSection !== 'home') {
                  setActiveSection('home');
              }
          },
          {
              threshold: [0, 0.25, 0.5, 0.75, 1], // Monitor multiple thresholds
              rootMargin: '-10% 0px -10% 0px' // Custom root margin to make detection more stable
          }
      );

      Object.values(sectionRefs).forEach((ref) => {
          if (ref.current) {
              observer.observe(ref.current);
          }
      });

      return () => {
          observer.disconnect();
      };
  }, [sectionRefs, activeSection]); // Include activeSection in dependencies to re-evaluate top-of-page logic if needed.
                                   // Note: This might cause observer to re-create if activeSection changes,
                                   // but the `rootMargin` and `threshold` are set to be stable.
                                   // Keeping `activeSection` here for the specific top-of-page logic within the callback.

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeSection={activeSection} />
      <main className="flex-grow">
        <section id="home" ref={sectionRefs.home} className="py-16 md:py-24">
          <HeroSection />
        </section>

        <section id="gallery" ref={sectionRefs.gallery} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Exquisite Collection" subtitle="Discover the unique beauty of gemstone art." />
          <Gallery onPaintingClick={handleOpenModal} />
        </section>

        <section id="about" ref={sectionRefs.about} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-purple-50">
          <SectionHeading title="About Gemstone Art" subtitle="Where nature's beauty meets artistic vision." />
          <div className="max-w-4xl mx-auto text-center text-lg leading-relaxed text-gray-700">
            <p className="mb-4">
              Our gemstone paintings are meticulously crafted by skilled artisans, transforming natural precious and semi-precious stones into breathtaking works of art. Each piece tells a story, capturing the vibrant hues and intricate patterns found in the earth's treasures.
            </p>
            <p className="mb-4">
              We believe in creating not just decorations, but heirlooms that bring tranquility and elegance to any space. Explore our collection and find a piece that resonates with your soul.
            </p>
          </div>
        </section>

        <section id="contact" ref={sectionRefs.contact} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Get In Touch" subtitle="We'd love to hear from you!" />
          <div className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-xl border border-pink-100">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition duration-200"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition duration-200"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition duration-200"
                  placeholder="Your message or inquiry"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

      </main>
      <Footer />
      {selectedPainting && (
        <PaintingDetailModal painting={selectedPainting} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;