import { motion } from 'framer-motion';

const steps = [
  {
    step: '01',
    title: 'Understanding Your Vision',
    description:
      'We listen carefully, evaluate your requirements, and align on scope, budget, and expectations.',
  },
  {
    step: '02',
    title: 'Design & Planning',
    description:
      'Layouts, materials, and technical planning are developed with precision and clarity.',
  },
  {
    step: '03',
    title: 'Execution & Coordination',
    description:
      'Our team manages fit-out, MEP, custom works, and on-site execution with strict quality control.',
  },
  {
    step: '04',
    title: 'Delivery & Ongoing Support',
    description:
      'Final handover, inspections, and long-term maintenance support ensure lasting performance.',
  },
];

export const CTASection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary relative overflow-hidden">
      <div className="container-section">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
            What to Expect When You Work With Us
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            A structured, transparent process designed to make your journey smooth,
            predictable, and rewarding.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative bg-background rounded-2xl p-8 shadow-elegant-lg border border-border transition-all duration-300 hover:shadow-elegant-xl"
            >
              {/* Step number */}
              <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium text-sm shadow-elegant">
                {item.step}
              </div>

              <h3 className="font-display text-xl font-medium text-foreground mt-6 mb-3 transition-colors group-hover:text-primary">
                {item.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
