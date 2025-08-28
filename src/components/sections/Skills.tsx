import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Wrench, BarChart3, FileText } from 'lucide-react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { siteConfig } from '../../content/site';
import { Button } from '../ui/Button'; // adjust path


const iconMap = {
  'CAD & Design': Code,
  'Analysis & Simulation': BarChart3,
  'Manufacturing': Wrench,
  'Tools & Documentation': FileText,
};

export function Skills() {
  const skillsRef = useRef(null);
  const isInView = useInView(skillsRef, { once: true });

  return (
    <Section id="skills">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6" />
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit developed through academic learning and practical experience
            in aerospace engineering and mechanical design.
          </p>
        </motion.div>

        <div ref={skillsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(siteConfig.skills).map(([categoryKey, category], categoryIndex) => {
            const Icon = iconMap[category.title as keyof typeof iconMap];
            
            return (
              <motion.div
                key={categoryKey}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <Card glass className="p-8 h-full">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                        <Icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills */}
                    <div className="space-y-4">
                      {category.items.map((skill, skillIndex) => (
                        <div key={skillIndex} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-gray-900 dark:text-white">
                              {skill.name}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <motion.div
                              className="h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{
                                duration: 1.2,
                                delay: categoryIndex * 0.2 + skillIndex * 0.1,
                                ease: 'easeOut',
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Certifications & Training
            </h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center space-y-4" hover>
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mx-auto">
                    <FileText size={28} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {cert.year}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open(cert.pdfUrl, '_blank')}
                    className="text-primary-600 hover:text-primary-700"
                  >
                    View Certificate
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}