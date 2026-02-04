import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const projectVideos = [
  {
    id: '1',
    title: 'Luxury Villa Walkthrough',
    thumbnail: '/placeholder.svg',
    category: 'Residential',
    duration: '3:45',
  },
  {
    id: '2',
    title: 'Modern Office Space Tour',
    thumbnail: '/placeholder.svg',
    category: 'Commercial',
    duration: '4:20',
  },
  {
    id: '3',
    title: 'Penthouse Transformation',
    thumbnail: '/placeholder.svg',
    category: 'Residential',
    duration: '5:15',
  },
  {
    id: '4',
    title: 'Restaurant Design Reveal',
    thumbnail: '/placeholder.svg',
    category: 'Commercial',
    duration: '2:58',
  },
];

export const VideosSection = () => {
  return (
    <section id="videos" className="py-24 md:py-32 bg-secondary/50 overflow-hidden">
      <div className="container-section">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Video Gallery</span>
            <h2 className="section-title mt-3">Project Videos</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/videos">
              <Button variant="ghost" className="group text-foreground font-medium">
                View All Videos
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden"
        >
          {/* Edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-secondary/60 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-secondary/60 to-transparent z-10" />

          {/* Seamless track */}
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 30,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            {[...projectVideos, ...projectVideos].map((video, index) => (
              <motion.div
                key={`${video.id}-${index}`}
                whileHover={{ y: -8, scale: 1.02 }}
                className="flex-shrink-0 w-[280px] md:w-[320px]"
              >
                <Link to={`/video/${video.id}`} className="group block">
                  <div className="relative overflow-hidden rounded-xl bg-foreground/5 aspect-video mb-4 shadow-elegant-lg">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Play Overlay */}
                    <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center 
                                    opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 rounded-full bg-background/90 
                                   flex items-center justify-center shadow-elegant"
                      >
                        <Play className="w-6 h-6 text-foreground ml-1" fill="currentColor" />
                      </motion.div>
                    </div>

                    {/* Duration */}
                    <div className="absolute bottom-3 right-3 bg-foreground/80 
                                    text-primary-foreground text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>

                  <span className="text-primary text-xs uppercase tracking-wider font-medium">
                    {video.category}
                  </span>
                  <h3 className="font-display text-lg font-medium text-foreground mt-1 
                                 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
