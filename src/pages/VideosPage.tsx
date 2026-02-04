import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingContact } from '@/components/FloatingContact';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const projectVideos = [
  {
    id: '1',
    title: 'Luxury Villa Walkthrough',
    thumbnail: '/placeholder.svg',
    category: 'Residential',
    duration: '3:45',
    description: 'Complete transformation of a modern villa with premium finishes'
  },
  {
    id: '2',
    title: 'Modern Office Space Tour',
    thumbnail: '/placeholder.svg',
    category: 'Commercial',
    duration: '4:20',
    description: 'Corporate office redesign focused on productivity and collaboration'
  },
  {
    id: '3',
    title: 'Penthouse Transformation',
    thumbnail: '/placeholder.svg',
    category: 'Residential',
    duration: '5:15',
    description: 'Luxury penthouse interior with panoramic city views'
  },
  {
    id: '4',
    title: 'Restaurant Design Reveal',
    thumbnail: '/placeholder.svg',
    category: 'Commercial',
    duration: '2:58',
    description: 'Fine dining restaurant with elegant contemporary design'
  },
  {
    id: '5',
    title: 'Retail Store Fit-Out',
    thumbnail: '/placeholder.svg',
    category: 'Commercial',
    duration: '3:30',
    description: 'Brand-aligned retail space designed for customer experience'
  },
  {
    id: '6',
    title: 'Apartment Renovation',
    thumbnail: '/placeholder.svg',
    category: 'Residential',
    duration: '4:05',
    description: 'Modern apartment makeover maximizing space and style'
  }
];

const VideosPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Page Hero */}
        <section className="pt-32 pb-16 bg-secondary/30">
          <div className="container-section">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="section-label">Video Gallery</span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mt-3">
                Project Videos
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
                Watch our project transformations and get inspired for your next interior design project.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Videos Grid */}
        <section className="py-24 bg-background">
          <div className="container-section">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/video/${video.id}`} className="group block">
                    <div className="relative overflow-hidden rounded-xl bg-foreground/5 aspect-video mb-4">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-full object-cover image-hover"
                      />
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <motion.div 
                          whileHover={{ scale: 1.1 }}
                          className="w-16 h-16 rounded-full bg-primary-foreground/90 flex items-center justify-center shadow-elegant"
                        >
                          <Play className="w-6 h-6 text-foreground ml-1" fill="currentColor" />
                        </motion.div>
                      </div>
                      {/* Duration Badge */}
                      <div className="absolute bottom-3 right-3 bg-foreground/80 text-primary-foreground text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <span className="text-primary text-xs uppercase tracking-wider font-medium">
                      {video.category}
                    </span>
                    <h3 className="font-display text-xl font-medium text-foreground mt-1 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-2">
                      {video.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default VideosPage;