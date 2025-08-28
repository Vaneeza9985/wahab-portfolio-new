import React, { HTMLAttributes, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  animate?: boolean;
  delay?: number;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, animate = true, delay = 0, children, ...props }, ref) => {
    const Component = animate ? motion.section : 'section';
    const motionProps = animate ? {
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay, ease: 'easeOut' },
      viewport: { once: true, margin: '-100px' }
    } : {};

    return (
      <Component
        ref={ref}
        className={cn('py-20', className)}
        {...motionProps}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Section.displayName = 'Section';

export { Section };