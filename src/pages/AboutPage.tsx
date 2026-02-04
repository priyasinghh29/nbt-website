import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingContact } from '@/components/FloatingContact';
import { AboutSection } from '@/components/AboutSection';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Page Hero */}
        <section className="pt-32 pb-16 bg-secondary/30 overflow-hidden">
          <div className="container-section">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center"
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="section-label inline-block"
              >
                Our Story
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mt-3"
              >
                About Us
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6"
              >
                Discover the passion and vision behind Noor Al Burooj's design philosophy.
              </motion.p>
            </motion.div>
          </div>
        </section>
        
        <AboutSection />
        
        {/* Additional About Content */}
        <section className="py-24 bg-background overflow-hidden">
          <div className="container-section">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={itemVariants}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "60px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="h-1 bg-primary mb-6"
                />
                <motion.h2 
                  variants={itemVariants}
                  className="font-display text-3xl md:text-4xl font-medium text-foreground mb-6"
                >
                  Our Vision
                </motion.h2>
                <motion.p 
                  variants={itemVariants}
                  className="text-muted-foreground leading-relaxed mb-4"
                >
                  At Noor Al Burooj, we envision spaces that transcend the ordinary—environments that 
                  inspire, comfort, and elevate everyday living. Our commitment to excellence drives 
                  us to push creative boundaries while respecting the functional needs of modern life.
                </motion.p>
                <motion.p 
                  variants={itemVariants}
                  className="text-muted-foreground leading-relaxed"
                >
                  We believe that great design is not just about aesthetics; it's about creating 
                  meaningful connections between people and their spaces. Every project we undertake 
                  is a testament to this philosophy.
                </motion.p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "60px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="h-1 bg-primary mb-6"
                />
                <motion.h2 
                  variants={itemVariants}
                  className="font-display text-3xl md:text-4xl font-medium text-foreground mb-6"
                >
                  Our Mission
                </motion.h2>
                <motion.p 
                  variants={itemVariants}
                  className="text-muted-foreground leading-relaxed mb-4"
                >
                  Our mission is to deliver exceptional interior design and fit-out solutions that 
                  exceed client expectations. We combine innovative design thinking with meticulous 
                  craftsmanship to create spaces that are both beautiful and functional.
                </motion.p>
                <motion.p 
                  variants={itemVariants}
                  className="text-muted-foreground leading-relaxed"
                >
                  From concept to completion, we maintain the highest standards of quality and 
                  professionalism, ensuring that every detail reflects our dedication to excellence.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Values Section with Animation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-24"
            >
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-display text-3xl md:text-4xl font-medium text-foreground text-center mb-12"
              >
                Our Core Values
              </motion.h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: 'Excellence', description: 'We pursue the highest standards in every project, ensuring quality that stands the test of time.' },
                  { title: 'Innovation', description: 'We embrace new technologies and creative solutions to deliver cutting-edge designs.' },
                  { title: 'Integrity', description: 'We build lasting relationships through transparency, honesty, and professional ethics.' }
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    whileHover={{ 
                      y: -8, 
                      scale: 1.03,
                      transition: { duration: 0.3 }
                    }}
                    className="bg-secondary/50 rounded-xl p-8 text-center cursor-pointer transition-colors duration-300 hover:bg-primary group"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.15, type: "spring" }}
                      className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-foreground/20 transition-colors duration-300"
                    >
                      <span className="text-2xl font-display font-bold text-primary group-hover:text-primary-foreground transition-colors duration-300">
                        {index + 1}
                      </span>
                    </motion.div>
                    <h3 className="font-display text-xl font-medium text-foreground mb-3 group-hover:text-primary-foreground transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-primary-foreground/80 transition-colors duration-300">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default AboutPage;