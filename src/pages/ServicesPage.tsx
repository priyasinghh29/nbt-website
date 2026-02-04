import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingContact } from '@/components/FloatingContact';
import { motion } from 'framer-motion';
import { Smartphone } from 'lucide-react';
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
    description: 'We provide end-to-end interior design and fit-out solutions, managing every stage from concept development to final execution. Our approach balances aesthetics, functionality, and build quality.',
    whatWeDo: [
      'Concept design & space planning',
      '3D visualization & material selection',
      'Authority approvals & technical drawings',
      'Turnkey execution & project management'
    ],
    idealFor: ['Villas & apartments', 'Retail shops', 'Restaurants & cafés', 'Offices & salons']
  },
  {
    image: serviceOffice,
    title: 'Commercial & Office Solutions',
    description: 'We design and execute commercial environments that enhance productivity, reflect brand identity, and support operational efficiency.',
    whatWeDo: [
      'Office interiors & workspace planning',
      'Retail & showroom fit-outs',
      'Brand-driven commercial interiors',
      'Renovation & refurbishment'
    ],
    idealFor: ['Corporate offices', 'Retail outlets', 'Commercial buildings']
  },
  {
    image: serviceMep,
    title: 'MEP & Technical Services',
    description: 'Our MEP services ensure safe, efficient, and compliant infrastructure across commercial and industrial projects.',
    whatWeDo: [
      'Electrical & lighting systems',
      'HVAC & ventilation',
      'Plumbing & drainage',
      'Fire fighting & life safety systems',
      'Integrated MEP coordination'
    ],
    idealFor: ['Warehouses', 'Factories', 'Industrial facilities', 'Commercial buildings']
  },
  {
    image: serviceSmart,
    title: 'Smart Home & Automation',
    description: 'We integrate intelligent automation systems that offer comfort, control, and energy efficiency. Control your entire home from your smartphone — whether you are in the living room or halfway across the world.',
    whatWeDo: [
      'Lighting & climate automation',
      'Security & access control',
      'Audio-visual integration',
      'Centralized smart control systems',
      'Remote access via smartphone apps — control everything from anywhere'
    ],
    idealFor: ['Villas', 'High-end apartments', 'Premium commercial spaces'],
    highlight: 'Away from home? No problem. Manage lights, AC, cameras, and locks directly from your phone — anytime, anywhere.'
  },
  {
    image: serviceFurniture,
    title: 'Custom Furniture & Joinery',
    description: 'Our bespoke furniture and joinery solutions are designed to complement interior spaces while maximizing functionality.',
    whatWeDo: [
      'Custom cabinetry & wardrobes',
      'Retail counters & display units',
      'Office furniture & partitions',
      'Factory-finished joinery'
    ],
    idealFor: ['Residential interiors', 'Retail spaces', 'Offices & hospitality projects']
  },
  {
    image: serviceMaintenance,
    title: 'Maintenance & Facility Services',
    description: 'We provide ongoing maintenance solutions to ensure interiors, systems, and facilities operate seamlessly over time.',
    whatWeDo: [
      'Annual maintenance contracts (AMC)',
      'Interior & MEP maintenance',
      'Preventive & emergency services',
      'Facility management support'
    ],
    idealFor: ['Offices', 'Commercial buildings', 'Retail outlets', 'Industrial facilities']
  }
];

const ServicesPage = () => {
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
              <span className="section-label">What We Offer</span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mt-3">
                Our Services
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
                Comprehensive solutions designed to transform spaces and support long-term performance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-background">
          <div className="container-section">
            <div className="space-y-24">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`grid md:grid-cols-2 gap-12 items-start ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div className="overflow-hidden rounded-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[400px] object-cover image-hover"
                      />
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>
                    
                    {/* What We Do */}
                    <div className="mb-8">
                      <h3 className="font-display text-xl font-medium text-foreground mb-4">
                        What We Do
                      </h3>
                      <ul className="space-y-3">
                        {service.whatWeDo.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-foreground">
                            <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Ideal For */}
                    <div>
                      <h3 className="font-display text-xl font-medium text-foreground mb-4">
                        Ideal For
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {service.idealFor.map((item) => (
                          <span 
                            key={item} 
                            className="px-4 py-2 bg-secondary rounded-full text-sm text-foreground"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlight for Smart Home */}
                    {'highlight' in service && service.highlight && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-8 p-5 bg-primary/10 border border-primary/20 rounded-xl"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <Smartphone className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-display text-lg font-medium text-foreground mb-1">
                              Remote Control
                            </h4>
                            <p className="text-foreground/80">
                              {service.highlight}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
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

export default ServicesPage;