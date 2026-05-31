import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex justify-between items-center">
            <a href="#home" className="text-2xl font-bold text-gray-900 tracking-tight">AcmeCorp</a>
            <div className="hidden md:flex space-x-8">
              {navLinks.map(link => (
                <a key={link.name} href={link.href} className="text-gray-600 hover:text-gray-900 font-medium transition-colors">{link.name}</a>
              ))}
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
         </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-4 flex flex-col space-y-4">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-gray-900 font-medium text-lg px-4">{link.name}</a>
          ))}
        </div>
      )}
    </nav>
  );
}
