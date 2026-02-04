import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/nav-logo.png';

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' }
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Always show scrolled style on non-home pages
  const showScrolledStyle = isScrolled || !isHomePage;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 overflow-visible transition-all duration-300 ... ${
        showScrolledStyle 
          ? 'bg-background/95 backdrop-blur-md shadow-elegant py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-section flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <div className="relative h-12 md:h-14 flex items-center">
            <img
              src={logo}
              alt="Noor Al Burooj - Technical & Cleaning Services"
              className="h-28 md:h-32 w-auto object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`link-underline text-sm font-medium transition-colors duration-300 ${
                showScrolledStyle 
                  ? 'text-foreground/70 hover:text-foreground' 
                  : 'text-primary-foreground/80 hover:text-primary-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/consultation">
            <Button 
              variant={showScrolledStyle ? "hero" : "heroOutline"}
              size="sm"
            >
              Consultation
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 transition-colors ${
            showScrolledStyle ? 'text-foreground' : 'text-primary-foreground'
          }`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-t border-border"
          >
            <nav className="container-section py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-foreground/70 hover:text-foreground text-lg font-medium py-2 block"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="hero" className="mt-4 w-full">
                  Get Consultation
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};