import { useCountUp } from '@/hooks/useCountUp';
import { motion } from 'framer-motion';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
  className?: string;
}

export const AnimatedCounter = ({ 
  end, 
  suffix = '+', 
  label, 
  duration = 2000,
  className = ''
}: AnimatedCounterProps) => {
  const { count, elementRef } = useCountUp({ end, duration });

  return (
    <motion.div 
      ref={elementRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`text-center ${className}`}
    >
      <div className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground">
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base uppercase tracking-widest text-primary-foreground/80 mt-2">
        {label}
      </div>
    </motion.div>
  );
};