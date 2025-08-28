import { useState, useEffect } from 'react';
import { throttle } from '../lib/utils';

const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const updateActiveSection = throttle(() => {
      const scrollY = window.scrollY + 100; // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollY) {
          setActiveSection(sections[i]);
          break;
        }
      }
    }, 100);

    window.addEventListener('scroll', updateActiveSection);
    updateActiveSection();

    return () => window.removeEventListener('scroll', updateActiveSection);
  }, []);

  return activeSection;
}