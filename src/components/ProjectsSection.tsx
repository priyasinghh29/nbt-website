import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedCounter } from './AnimatedCounter';
import { Link } from 'react-router-dom';
import project1 from '@/assets/project-1.png';
import project2 from '@/assets/project-2.png';
import project3 from '@/assets/project-4.png';
import project4 from '@/assets/project-6.png';

const projects = [
  { image: project1, title: 'Villa Renovations', category: 'Residential', description: 'Complete villa transformations with modern aesthetics' },
  { image: project2, title: 'Apartments', category: 'Residential', description: 'Stylish apartment interiors optimized for space efficiency and contemporary urban living.' },
  { image: project3, title: 'Retail & Shops', category: 'Commercial', description: 'Productive workspaces designed for collaboration' },
  { image: project4, title: 'Restaurants & Cafés', category: 'Commercial', description: 'Hospitality interiors balancing comfort and efficiency' },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div className="container-section">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Portfolio</span>
            <h2 className="section-title mt-3">Selected Projects</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/projects">
              <Button variant="ghost" className="group text-foreground font-medium">
                View All Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Projects Grid with Counter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Large Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:row-span-2 group relative overflow-hidden rounded-2xl"
          >
            <img 
              src={projects[0].image} 
              alt={projects[0].title}
              className="w-full h-full min-h-[400px] lg:min-h-[600px] object-cover image-hover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-primary-foreground/70 text-sm uppercase tracking-wider">
                {projects[0].category}
              </span>
              <h3 className="font-display text-2xl font-medium text-primary-foreground mt-1">
                {projects[0].title}
              </h3>
            </div>
          </motion.div>

          {/* Right Column Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4 group relative overflow-hidden rounded-2xl"
          >
            <img 
              src={projects[1].image} 
              alt={projects[1].title}
              className="w-full h-[280px] object-cover image-hover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-primary-foreground/70 text-xs uppercase tracking-wider">
                {projects[1].category}
              </span>
              <h3 className="font-display text-lg font-medium text-primary-foreground">
                {projects[1].title}
              </h3>
            </div>
          </motion.div>

          {/* Counter Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3 bg-primary rounded-2xl flex items-center justify-center p-8 min-h-[280px]"
          >
            <AnimatedCounter 
              end={100} 
              suffix="+" 
              label="Projects Completed" 
              duration={2500}
            />
          </motion.div>

          {/* Bottom Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 group relative overflow-hidden rounded-2xl"
          >
            <img 
              src={projects[2].image} 
              alt={projects[2].title}
              className="w-full h-[280px] object-cover image-hover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-primary-foreground/70 text-xs uppercase tracking-wider">
                {projects[2].category}
              </span>
              <h3 className="font-display text-lg font-medium text-primary-foreground">
                {projects[2].title}
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-3 group relative overflow-hidden rounded-2xl"
          >
            <img 
              src={projects[3].image} 
              alt={projects[3].title}
              className="w-full h-[280px] object-cover image-hover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-primary-foreground/70 text-xs uppercase tracking-wider">
                {projects[3].category}
              </span>
              <h3 className="font-display text-lg font-medium text-primary-foreground">
                {projects[3].title}
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};