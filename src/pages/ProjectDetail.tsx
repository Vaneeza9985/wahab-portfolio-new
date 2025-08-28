import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag, ExternalLink, CheckCircle, Award } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { siteConfig } from '../content/site';

export function ProjectDetail() {
  const { id } = useParams();
  const project = siteConfig.projects.find(p => p.id === parseInt(id || '0'));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Project Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            The project you're looking for doesn't exist.
          </p>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 py-24">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link to="/#projects">
            <Button variant="ghost" className="group">
              <ArrowLeft size={20} className="mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Projects
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <Badge variant="secondary">{project.category}</Badge>
                <Badge variant={project.status === 'Completed' ? 'success' : 'warning'}>
                  {project.status}
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.longDescription}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>

            {/* Project Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="overflow-hidden">
                <div className="h-96 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400 text-lg font-medium">
                    Project Image Placeholder
                  </span>
                </div>
              </Card>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card glass className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <CheckCircle size={24} className="mr-3 text-green-500" />
                  Key Results & Achievements
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.results.map((result, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-300">{result}</p>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Technical Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card glass className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Award size={24} className="mr-3 text-blue-500" />
                  Technical Stack & Tools
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.techStack.map((tech, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <div className="w-2 h-2 bg-secondary-500 rounded-full" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {tech}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card glass className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Project Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar size={16} className="text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Year</p>
                      <p className="font-medium text-gray-900 dark:text-white">{project.year}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Tag size={16} className="text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Category</p>
                      <p className="font-medium text-gray-900 dark:text-white">{project.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={16} className="text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Status</p>
                      <p className="font-medium text-gray-900 dark:text-white">{project.status}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Related Projects */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card glass className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Related Projects
                </h3>
                <div className="space-y-3">
                  {siteConfig.projects
                    .filter(p => p.id !== project.id && p.category === project.category)
                    .slice(0, 2)
                    .map((relatedProject) => (
                      <Link
                        key={relatedProject.id}
                        to={`/project/${relatedProject.id}`}
                        className="block p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1">
                          {relatedProject.title}
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2">
                          {relatedProject.description}
                        </p>
                      </Link>
                    ))}
                </div>
              </Card>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Card className="p-6 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Interested in Similar Work?
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Let's discuss how I can help with your engineering projects.
                </p>
                <Link to="/#contact">
                  <Button size="sm" className="w-full">
                    Get In Touch
                    <ExternalLink size={16} className="ml-2" />
                  </Button>
                </Link>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}