import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import { siteConfig } from '../../content/site';
import { smoothScrollTo } from '../../lib/utils';

export function Hero() {
  const handleViewProjects = () => {
    smoothScrollTo('projects');
  };

  const handleDownloadResume = () => {
    window.open(siteConfig.resumeUrl, '_blank');
  };

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Blueprint Grid */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(12, 39, 83, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Floating Aircraft SVG */}
        <motion.div
          className="absolute top-1/4 right-1/4 opacity-10"
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg width="200" height="100" viewBox="0 0 200 100" className="text-primary-600">
            <g stroke="currentColor" fill="none" strokeWidth="2">
              {/* Aircraft outline */}
              <path d="M20,50 L180,50 M20,50 L40,30 M20,50 L40,70 M160,40 L180,30 M160,60 L180,70 M80,50 L80,20 L120,20 L120,50 M100,20 L100,10" />
            </g>
          </svg>
        </motion.div>

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-primary-400/20 to-secondary-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-gradient-to-r from-secondary-400/20 to-accent-400/20 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Location Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MapPin size={16} className="text-primary-600" />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              {siteConfig.locationShort}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {siteConfig.hero.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {siteConfig.hero.subhead}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Button
              size="lg"
              magnetic
              onClick={handleViewProjects}
              className="group"
            >
              <span>{siteConfig.hero.cta.primary}</span>
              <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              magnetic
              onClick={handleDownloadResume}
              className="group"
            >
              <Download size={20} className="mr-2 transition-transform group-hover:translate-y-0.5" />
              <span>{siteConfig.hero.cta.secondary}</span>
            </Button>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="mt-12 text-lg text-gray-500 dark:text-gray-400 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            "{siteConfig.tagline}"
          </motion.p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.div
            className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}