import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingContact } from '@/components/FloatingContact';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import project1 from '@/assets/project-1.png';
import project2 from '@/assets/project-2.png';
import project3 from '@/assets/project-3.png';
import project4 from '@/assets/project-4.png';
import project5 from '@/assets/project-5.png';
import project6 from '@/assets/project-6.png';
import project7 from '@/assets/project-7.png';
import project8 from '@/assets/project-8.png';
import project9 from '@/assets/project-9.png';

const residentialProjects = [
  { 
    image: project1, 
    title: 'Villa Renovations', 
    description: 'Complete villa transformations blending modern aesthetics with functional living spaces for families.'
  },
  { 
    image: project2, 
    title: 'Apartments', 
    description: 'Stylish apartment interiors optimized for space efficiency and contemporary urban living.'
  },
  { 
    image: project3, 
    title: 'Home Maintenance', 
    description: 'Comprehensive residential maintenance ensuring your home stays pristine and fully functional.'
  },
];

const commercialProjects = [
  { 
    image: project4, 
    title: 'Retail & Shops', 
    description: 'Interior fit-out and renovation of retail spaces designed to enhance customer experience and reflect brand identity.',
    includes: ['Retail outlets', 'Showrooms', 'Brand stores']
  },
  { 
    image: project5, 
    title: 'Offices & Corporate Spaces', 
    description: 'Modern office interiors designed for productivity, collaboration, and efficient space utilization.',
    includes: ['Corporate offices', 'Co-working spaces', 'Administrative buildings']
  },
  { 
    image: project6, 
    title: 'Restaurants & Cafés', 
    description: 'Hospitality interiors balancing aesthetics, comfort, and operational efficiency.',
    includes: ['Restaurants', 'Cafés', 'Fast food outlets']
  },
  { 
    image: project7, 
    title: 'Salons & Wellness Spaces', 
    description: 'Purpose-built interiors focused on client comfort, functionality, and brand presentation.',
    includes: ['Beauty salons', 'Spas', 'Grooming studios']
  },
  { 
    image: project8, 
    title: 'Warehouse & Industrial', 
    description: 'Functional industrial spaces engineered for operational efficiency and safety compliance.',
    includes: ['Warehouses', 'Factories', 'Industrial facilities']
  },
  { 
    image: project9, 
    title: 'Commercial Renovation', 
    description: 'Upgrading and transforming existing commercial spaces while minimizing business downtime.',
    includes: ['Fit-out upgrades', 'Refurbishments', 'Interior renovations']
  },
];

const ResidentialProjectCard = ({ project, index }: { project: typeof residentialProjects[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative overflow-hidden rounded-2xl cursor-pointer"
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-[350px] object-cover image-hover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
    <div className="absolute bottom-6 left-6 right-6">
      <h3 className="font-display text-xl font-medium text-primary-foreground mt-1">
        {project.title}
      </h3>
      <p className="text-primary-foreground/80 text-sm mt-2">
        {project.description}
      </p>
    </div>
  </motion.div>
);

const CommercialProjectCard = ({ project, index }: { project: typeof commercialProjects[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group bg-background rounded-2xl overflow-hidden shadow-elegant card-hover"
  >
    <div className="overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-[250px] object-cover image-hover"
      />
    </div>
    <div className="p-6">
      <h3 className="font-display text-xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.includes.map((item) => (
          <span 
            key={item} 
            className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const ProjectsPage = () => {
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
              <span className="section-label">Our Portfolio</span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mt-3">
                Projects
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
                Explore our diverse portfolio of residential and commercial interior design projects.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Tabs */}
        <section className="py-24 bg-background">
          <div className="container-section">
            <Tabs defaultValue="commercial" className="w-full">
              <TabsList className="w-full max-w-md mx-auto mb-12 grid grid-cols-2 h-14 bg-secondary">
                <TabsTrigger 
                  value="residential" 
                  className="font-display text-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-12"
                >
                  Residential
                </TabsTrigger>
                <TabsTrigger 
                  value="commercial"
                  className="font-display text-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-12"
                >
                  Commercial
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="residential">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {residentialProjects.map((project, index) => (
                      <ResidentialProjectCard key={`${project.title}-${index}`} project={project} index={index} />
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
              
              <TabsContent value="commercial">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {commercialProjects.map((project, index) => (
                      <CommercialProjectCard key={`${project.title}-${index}`} project={project} index={index} />
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default ProjectsPage;