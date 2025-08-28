import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users, Clock, Target } from 'lucide-react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { siteConfig } from '../../content/site';
import profile from '../assets/profile.jpg';

const iconMap = {
  'Years Experience': Clock,
  'Projects Completed': Target,
  'Tools Mastered': Award,
  'Certifications': Users,
};

export function About() {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });

  return (
    <Section id="about" className="bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Portrait and Bio */}
          <div className="space-y-8">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl transform rotate-6" />
                <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 rounded-2xl flex items-center justify-center text-gray-500 dark:text-gray-400">
                  <span className="text-lg font-medium">
                    <img src={profile} alt="profile" className="rounded-2xl object-cover w-80 h-80" />

                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {siteConfig.about.bio}
              </p>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Core Expertise
                </h3>
                <ul className="space-y-2">
                  {siteConfig.about.highlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center space-x-3 text-gray-600 dark:text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-primary-500 rounded-full" />
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="space-y-8">
            <motion.h3
              className="text-2xl font-semibold text-gray-900 dark:text-white text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              By the Numbers
            </motion.h3>
            
            <div ref={statsRef} className="grid grid-cols-2 gap-6">
              {siteConfig.about.stats.map((stat, index) => {
                const Icon = iconMap[stat.label as keyof typeof iconMap];
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card glass className="p-6 text-center h-full">
                      <div className="flex flex-col items-center space-y-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                          <Icon size={24} className="text-white" />
                        </div>
                        <div>
                          <motion.div
                            className="text-3xl font-bold text-gray-900 dark:text-white"
                            initial={{ scale: 0 }}
                            animate={isInView ? { scale: 1 } : { scale: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 + 0.5, type: 'spring' }}
                          >
                            {isInView && (
                              <CountUpAnimation
                                end={stat.value}
                                suffix={stat.suffix}
                                duration={1500}
                                delay={index * 200 + 500}
                              />
                            )}
                          </motion.div>
                          <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function CountUpAnimation({ end, suffix, duration, delay }: { end: number; suffix: string; duration: number; delay: number }) {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCurrent(Math.floor(end * easeOut));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      animate();
    }, delay);

    return () => clearTimeout(timer);
  }, [end, duration, delay]);

  return <>{current}{suffix}</>;
}