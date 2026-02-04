import { motion } from 'framer-motion';
import serviceInterior from '@/assets/service-interior.png';
import serviceOffice from '@/assets/service-office.jpg';
import serviceMep from '@/assets/service-mep.png';
import serviceSmart from '@/assets/service-smart.png';
import serviceFurniture from '@/assets/service-furniture.png';
import serviceMaintenance from '@/assets/service-maintainence.png';

const services = [
  {
    image: serviceInterior,
    title: 'Interior Design & Fit-Out',
    description: 'Complete interior solutions from concept to turnkey execution for residential and commercial spaces.'
  },
  {
    image: serviceOffice,
    title: 'Commercial & Office Solutions',
    description: 'Functional, brand-aligned interiors for offices, retail spaces, and corporate environments.'
  },
  {
    image: serviceMep,
    title: 'MEP & Technical Services',
    description: 'Integrated electrical, HVAC, plumbing, and safety systems built to international standards.'
  },
  {
    image: serviceSmart,
    title: 'Smart Home & Automation',
    description: 'Control your home from anywhere — lighting, climate, security, and more — all from your smartphone, even when you are away.'
  },
  {
    image: serviceFurniture,
    title: 'Custom Furniture & Joinery',
    description: 'Bespoke furniture and joinery crafted to enhance functionality and aesthetics.'
  },
  {
    image: serviceMaintenance,
    title: 'Maintenance & Facility Services',
    description: 'Reliable maintenance solutions ensuring long-term performance of interiors and systems.'
  }
];

export const ExpertiseSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/50">
      <div className="container-section">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Specializations</span>
          <h2 className="section-title mt-3">Our Services</h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group bg-background rounded-xl overflow-hidden shadow-elegant cursor-pointer transition-colors duration-300 hover:bg-primary"
            >
              <div className="pt-5 px-5 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-56 object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="px-6 pb-6 pt-5">
                <h3 className="font-display text-xl font-medium text-foreground mb-3 transition-colors duration-300 group-hover:text-primary-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed transition-colors duration-300 group-hover:text-primary-foreground/80">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};