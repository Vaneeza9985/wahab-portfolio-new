import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { siteConfig } from '../../content/site';

export function Projects() {
  return (
    <Section id="projects" className="bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6" />
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my engineering projects, from CAD designs to FEA analysis,
            demonstrating practical solutions to real-world aerospace challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card glass className="h-full overflow-hidden group" hover>
                <div className="space-y-6">
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 overflow-hidden rounded-t-2xl">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                      <span className="text-sm font-medium">Project Image</span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant={project.status === 'Completed' ? 'success' : 'warning'} size="sm">
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    {/* Header */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" size="sm">
                          {project.category}
                        </Badge>
                        <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                          <Calendar size={14} />
                          <span>{project.year}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          size="sm"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="outline" size="sm" className="text-xs">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <Link to={`/project/${project.id}`}>
                        <Button variant="ghost" size="sm" className="text-primary-600 hover:text-primary-700">
                          <ExternalLink size={16} className="mr-2" />
                          View Details
                        </Button>
                      </Link>
                      <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                        <Tag size={12} />
                        <span>{project.techStack.length} tools</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button variant="outline" size="lg" magnetic>
            View All Projects
            <ExternalLink size={20} className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}