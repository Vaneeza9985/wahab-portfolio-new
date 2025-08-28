import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '../ui/Button';
import { siteConfig } from '../../content/site';
import { smoothScrollTo } from '../../lib/utils';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    smoothScrollTo('hero');
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white font-bold">
                {siteConfig.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{siteConfig.name}</h3>
                <p className="text-sm text-gray-400">{siteConfig.title}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-sm">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'about', label: 'About' },
                { id: 'projects', label: 'Projects' },
                { id: 'experience', label: 'Experience' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => smoothScrollTo(item.id)}
                  className="text-left text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>{siteConfig.location}</p>
              <p>{siteConfig.email}</p>
            </div>
            <div className="flex space-x-3">
              {Object.entries(siteConfig.social).map(([platform, url]) => {
                const Icon = socialIcons[platform as keyof typeof socialIcons];
                if (!Icon) return null;

                return (
                  <motion.a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <p>© {currentYear} {siteConfig.name}. Made with</p>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <p></p>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={handleScrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-white"
            >
              <ArrowUp size={16} />
              <span>Back to top</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}