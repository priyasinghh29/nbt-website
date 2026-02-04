import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingContact } from '@/components/FloatingContact';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['Office 101 Hor al anz building', 'Dubai, United Arab Emirates'],
    action: 'Get Directions',
    href: 'https://maps.google.com'
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+971 544862924'],
    action: 'Call Now',
    href: 'tel:+971544862924'
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['Nooralburooj@gmail.com'],
    action: 'Send Email',
    href: 'mailto:Nooralburooj@gmail.com'
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Sun - Thu: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 2:00 PM'],
    action: null,
    href: null
  }
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const phoneNumber = '971544862924'; // country code + number (NO +)

  const message = `
Hello Noor Al Burooj,

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
  `.trim();

  const encodedMessage = encodeURIComponent(message);

  window.open(
    `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
    '_blank'
  );
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 lg:pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
          
          <div className="container-section relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Get in Touch</span>
              </motion.div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight">
                Contact Us
              </h1>
              
              <p className="text-muted-foreground text-lg mt-6">
                Have a question or want to learn more about our services? 
                We'd love to hear from you. Reach out using any of the methods below.
              </p>

              {/* CTA for Consultation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-8"
              >
                <Link to="/consultation">
                  <Button variant="hero" size="lg">
                    Book a Free Consultation
                  </Button>
                </Link>
                <p className="text-sm text-muted-foreground mt-3">
                  Looking to start a project? Get a personalized consultation.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-16 bg-secondary/30">
          <div className="container-section">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-background rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-elegant transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-medium text-foreground mb-3">
                    {info.title}
                  </h3>
                  {info.details.map((detail) => (
                    <p key={detail} className="text-muted-foreground text-sm leading-relaxed">
                      {detail}
                    </p>
                  ))}
                  {info.action && info.href && (
                    <a 
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-2 text-primary text-sm font-medium mt-4 hover:underline"
                    >
                      {info.action}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20">
          <div className="container-section">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Left - Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mt-4 text-lg">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>

                <div className="mt-10 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                  <h3 className="font-display text-xl font-medium text-foreground mb-3">
                    Need a Full Consultation?
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    If you're looking to discuss a project in detail, including budget, 
                    timeline, and specific requirements, book a free consultation instead.
                  </p>
                  <Link to="/consultation">
                    <Button variant="outline" className="w-full">
                      Book Free Consultation
                    </Button>
                  </Link>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Quick Response</p>
                      <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Direct Support</p>
                      <p className="text-sm text-muted-foreground">Get answers from our experts</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right - Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-background border border-border/50 rounded-2xl p-8 shadow-elegant">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Your Name *
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

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input
                        name="subject"
                        placeholder="What is this regarding?"
                        value={formData.subject}
                        onChange={handleChange}
                        className="h-12 bg-secondary/30 border-border/50 focus:border-primary"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        placeholder="How can we help you?"
                        value={formData.message}
                        onChange={handleChange}
                        className="min-h-[150px] bg-secondary/30 border-border/50 focus:border-primary resize-none"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="xl" 
                      className="w-full"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
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

export default ContactPage;