import React from 'react';
import { motion } from 'framer-motion';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export function ProgressBar() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 z-50 origin-left"
      style={{ scaleX: progress }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: progress }}
      transition={{ type: 'spring', stiffness: 400, damping: 40 }}
    />
  );
}