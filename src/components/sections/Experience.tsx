import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Award } from 'lucide-react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { siteConfig } from '../../content/site';

export function Experience() {
  return (
    <Section id="experience">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500" />

            {/* Experience items */}
            <div className="space-y-12">
              {siteConfig.experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className="relative flex items-start space-x-8"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                      <Users size={24} className="text-white" />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1">
                    <Card glass className="p-8" hover>
                      <div className="space-y-6">
                        {/* Header */}
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                              {exp.position}
                            </h3>
                            <h4 className="text-xl text-primary-600 dark:text-primary-400 font-semibold">
                              {exp.company}
                            </h4>
                          </div>

                          {/* Meta info */}
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
                            <div className="flex items-center space-x-2">
                              <MapPin size={16} />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Calendar size={16} />
                              <span>{exp.period} • {exp.duration}</span>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {exp.description}
                          </p>
                        </div>

                        {/* Highlights */}
                        <div className="space-y-4">
                          <h5 className="font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                            <Award size={18} />
                            <span>Key Achievements</span>
                          </h5>
                          <ul className="space-y-2">
                            {exp.highlights.map((highlight, highlightIndex) => (
                              <motion.li
                                key={highlightIndex}
                                className="flex items-start space-x-3 text-gray-600 dark:text-gray-300"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: highlightIndex * 0.1 }}
                                viewport={{ once: true }}
                              >
                                <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 flex-shrink-0" />
                                <span>{highlight}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag, tagIndex) => (
                            <Badge
                              key={tagIndex}
                              variant="secondary"
                              size="sm"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Future placeholder */}
            <motion.div
              className="relative flex items-start space-x-8 mt-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Timeline dot */}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center border-4 border-gray-100 dark:border-gray-800">
                  <div className="w-3 h-3 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse" />
                </div>
              </div>

              {/* Content card */}
              <div className="flex-1">
                <Card className="p-8 border-dashed border-2 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400">
                      What's Next?
                    </h3>
                    <p className="text-gray-500 dark:text-gray-500">
                      Looking for new opportunities to apply my aerospace engineering expertise
                      and continue growing in the field of aircraft structures and systems.
                    </p>
                  </div>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}