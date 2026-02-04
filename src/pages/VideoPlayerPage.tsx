import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Sample video data - in a real app, this would come from a database or API
const projectVideos = [
  {
    id: '1',
    title: 'Luxury Villa Walkthrough',
    description: 'Take a virtual tour through our stunning luxury villa project featuring contemporary design elements and premium finishes.',
    thumbnail: '/placeholder.svg',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Placeholder video
    category: 'Residential'
  },
  {
    id: '2',
    title: 'Modern Office Space Tour',
    description: 'Explore our latest commercial project - a state-of-the-art office space designed for productivity and creativity.',
    thumbnail: '/placeholder.svg',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    category: 'Commercial'
  },
  {
    id: '3',
    title: 'Penthouse Transformation',
    description: 'Witness the transformation of a standard penthouse into a luxurious living space with panoramic city views.',
    thumbnail: '/placeholder.svg',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    category: 'Residential'
  },
  {
    id: '4',
    title: 'Restaurant Design Reveal',
    description: 'Behind the scenes look at our award-winning restaurant interior design project.',
    thumbnail: '/placeholder.svg',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    category: 'Commercial'
  }
];

const VideoPlayerPage = () => {
  const { id } = useParams<{ id: string }>();
  const video = projectVideos.find(v => v.id === id);

  if (!video) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-24">
          <div className="container-section text-center">
            <h1 className="font-display text-4xl font-medium text-foreground mb-4">
              Video Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The video you're looking for doesn't exist.
            </p>
            <Link to="/">
              <Button variant="hero">
                <ArrowLeft className="mr-2" size={18} />
                Back to Home
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container-section">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link to="/#videos" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="mr-2" size={18} />
              Back to Videos
            </Link>
          </motion.div>

          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="aspect-video bg-foreground/5 rounded-2xl overflow-hidden">
              <video
                controls
                autoPlay
                className="w-full h-full object-cover"
                poster={video.thumbnail}
              >
                <source src={video.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>

          {/* Video Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl"
          >
            <span className="section-label">{video.category}</span>
            <h1 className="font-display text-3xl md:text-4xl font-medium text-foreground mt-2 mb-4">
              {video.title}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {video.description}
            </p>
          </motion.div>

          {/* Related Videos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <h2 className="font-display text-2xl font-medium text-foreground mb-8">
              More Project Videos
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {projectVideos
                .filter(v => v.id !== id)
                .slice(0, 3)
                .map((relatedVideo) => (
                  <Link
                    key={relatedVideo.id}
                    to={`/video/${relatedVideo.id}`}
                    className="group"
                  >
                    <div className="relative overflow-hidden rounded-xl bg-secondary/50 aspect-video mb-3">
                      <img
                        src={relatedVideo.thumbnail}
                        alt={relatedVideo.title}
                        className="w-full h-full object-cover image-hover"
                      />
                      <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-14 h-14 rounded-full bg-primary-foreground/90 flex items-center justify-center">
                          <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-foreground border-b-[8px] border-b-transparent ml-1" />
                        </div>
                      </div>
                    </div>
                    <h3 className="font-display text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                      {relatedVideo.title}
                    </h3>
                    <span className="text-muted-foreground text-sm">{relatedVideo.category}</span>
                  </Link>
                ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VideoPlayerPage;