import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingContact } from '@/components/FloatingContact';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { MapPin, Phone, CheckCircle, Sparkles, Home, Building2, Wrench, Sofa, Smartphone, Settings } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['Office 101 Hor al anz building', 'Dubai, United Arab Emirates']
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+971 544862924']
  }
];

const serviceTypes = [
  { id: 'interior', label: 'Interior Design', icon: Home },
  { id: 'office', label: 'Office Fit-Out', icon: Building2 },
  { id: 'maintenance', label: 'Maintenance', icon: Wrench },
  { id: 'furniture', label: 'Furniture', icon: Sofa },
  { id: 'smart-home', label: 'Smart Home', icon: Smartphone },
  { id: 'mep', label: 'MEP & Technical', icon: Settings },
];

const benefits = [
  'Expert consultation with 15+ years experience',
  'Customized solutions for your space',
  'Transparent pricing with no hidden costs',
  'Project timeline and milestone planning',
  'Post-project support and warranty'
];

const ConsultationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const phoneNumber = '971544862924'; // WhatsApp number (NO +, no spaces)

  const selectedServiceLabels = serviceTypes
    .filter(service => selectedServices.includes(service.id))
    .map(service => service.label)
    .join(', ');

  const message = `
Hello Noor Al Burooj,

I would like to request a free consultation.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Services Interested In:
${selectedServiceLabels || 'Not specified'}

Estimated Budget: ${formData.budget || 'Not specified'}

Project Details:
${formData.message || 'Not provided'}
  `.trim();

  const encodedMessage = encodeURIComponent(message);

  window.open(
    `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
    '_blank'
  );
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section with Split Design */}
        <section className="pt-24 lg:pt-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
          
          <div className="container-section relative">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-12 lg:py-20">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-medium">Free Consultation</span>
                </motion.div>
                
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight">
                  Let's Create
                  <span className="block text-primary">Your Dream Space</span>
                </h1>
                
                <p className="text-muted-foreground text-lg mt-6 max-w-lg">
                  Book a free consultation with our expert team. We'll discuss your vision, 
                  requirements, and create a customized plan for your project.
                </p>

                {/* Benefits */}
                <motion.div 
                  className="mt-10 space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground/80">{benefit}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Contact Info Cards */}
                <motion.div 
                  className="mt-12 grid sm:grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  {contactInfo.map((info) => (
                    <div 
                      key={info.title}
                      className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl border border-border/50"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.title}</p>
                        <p className="text-foreground font-medium">{info.details[0]}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right - Consultation Form */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-3xl blur-2xl" />
                
                <div className="relative bg-background border border-border/50 rounded-2xl p-8 md:p-10 shadow-elegant-lg">
                  <div className="text-center mb-8">
                    <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground">
                      Book Your Free Consultation
                    </h2>
                    <p className="text-muted-foreground mt-2">
                      Fill out the form and we'll get back to you within 24 hours
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name & Email */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          name="name"
                          
                          value={formData.name}
                          onChange={handleChange}
                          className="h-12 bg-secondary/30 border-border/50 focus:border-primary"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          
                          value={formData.email}
                          onChange={handleChange}
                          className="h-12 bg-secondary/30 border-border/50 focus:border-primary"
                          required
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        name="phone"
                        
                        value={formData.phone}
                        onChange={handleChange}
                        className="h-12 bg-secondary/30 border-border/50 focus:border-primary"
                        required
                      />
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-3">
                        Services You're Interested In
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {serviceTypes.map((service) => (
                          <motion.button
                            key={service.id}
                            type="button"
                            onClick={() => toggleService(service.id)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all duration-300 ${
                              selectedServices.includes(service.id)
                                ? 'border-primary bg-primary/10 text-primary'
                                : 'border-border/50 bg-secondary/20 text-foreground/70 hover:border-primary/50'
                            }`}
                          >
                            <service.icon className="w-5 h-5" />
                            <span className="text-sm font-medium">{service.label}</span>
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* Budget Range */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Estimated Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full h-12 px-4 rounded-md bg-secondary/30 border border-border/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-50k">Under AED 50,000</option>
                        <option value="50k-100k">AED 50,000 - 100,000</option>
                        <option value="100k-250k">AED 100,000 - 250,000</option>
                        <option value="250k-500k">AED 250,000 - 500,000</option>
                        <option value="above-500k">Above AED 500,000</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Project Details
                      </label>
                      <Textarea
                        name="message"
                        placeholder="Tell us about your project, space dimensions, preferences, timeline..."
                        value={formData.message}
                        onChange={handleChange}
                        className="min-h-[120px] bg-secondary/30 border-border/50 focus:border-primary resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="xl" 
                      className="w-full"
                    >
                      Request Free Consultation
                    </Button>

                    <p className="text-center text-sm text-muted-foreground">
                      By submitting, you agree to our privacy policy
                    </p>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default ConsultationPage;