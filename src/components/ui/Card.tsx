import React, { HTMLAttributes, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glass?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, glass = false, children, ...props }, ref) => {
    const baseClasses = 'rounded-2xl transition-all duration-300';
    
    const glassClasses = glass 
      ? 'bg-white/10 dark:bg-gray-900/10 backdrop-blur-md border border-white/20 dark:border-gray-700/20' 
      : 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800';
    
    const hoverClasses = hover 
      ? 'hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/10 cursor-pointer' 
      : '';

    return (
      <motion.div
        ref={ref}
        className={cn(baseClasses, glassClasses, hoverClasses, className)}
        whileHover={hover ? { y: -4 } : undefined}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

export { Card };