import { motion } from 'framer-motion';
import { CheckCircle2, Lightbulb } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import aboutImage from '@/assets/about-design.jpg';

const features = [
  {
    icon: CheckCircle2,
    title: 'End-to-End Fit-Out Execution',
    description: 'From design and approvals to installation and maintenance, we manage the entire journey of your space.'
  },
  {
    icon: Lightbulb,
    title: 'Smart & Functional Spaces',
    description: 'Integrated smart home systems, lighting, climate, and automation — all controlled seamlessly.'
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Our Philosophy</span>
            <h2 className="section-title mt-3 mb-6">Get to Know Us</h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At Noor Al Burooj, we deliver end-to-end interior, fit-out, and technical solutions 
              for residential and commercial spaces. From concept design and luxury interiors to 
              MEP services, smart home integration, custom furniture, and long-term maintenance — 
              we build spaces that perform as beautifully as they look.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image with Counter */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.3, type: "spring", stiffness: 50 }}
            className="relative"
          >
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-elegant-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <motion.img 
                src={aboutImage} 
                alt="Interior Design Process"
                className="w-full h-[500px] object-cover"
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
              
              {/* Floating Labels */}
              <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute top-6 right-6 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-elegant"
              >
                <span className="text-sm font-medium text-foreground">Design • Fit-Out • Smart Systems</span>
              </motion.div>
            </motion.div>

            {/* Years Counter Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 left-6 md:left-12 bg-primary rounded-xl px-8 py-6 shadow-elegant-lg"
            >
              <AnimatedCounter 
                end={15} 
                suffix="+" 
                label="Years of Excellence" 
                duration={2000}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};