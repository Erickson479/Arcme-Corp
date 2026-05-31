import { BarChart, Zap, Shield, Smartphone, Globe, Layers } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Strategic Consulting',
      description: 'Leverage our decades of industry experience to navigate complex market dynamics and execute visionary growth plans.',
      icon: <Layers className="text-blue-600" size={28} />,
    },
    {
       title: 'Digital Transformation',
       description: 'Modernize your workflow and infrastructure with scalable digital solutions that streamline your core business operations.',
       icon: <Globe className="text-blue-600" size={28} />,
    },
    {
       title: 'Performance Optimization',
       description: 'Unlock maximum efficiency and speed across all operational verticals using data-driven load balancing metrics.',
       icon: <Zap className="text-blue-600" size={28} />,
    },
    {
       title: 'Security Assurance',
       description: 'Protect your valuable digital and physical assets with comprehensive enterprise-grade security protocols.',
       icon: <Shield className="text-blue-600" size={28} />,
    },
    {
       title: 'Mobile App Development',
       description: 'Engage your customers anywhere with high-quality native and hybrid applications meticulously tailored to iOS and Android.',
       icon: <Smartphone className="text-blue-600" size={28} />,
    },
    {
       title: 'Global Analytics',
       description: 'Turn your raw data into actionable insights for global market leadership via top-tier analytics and dashboard integrations.',
       icon: <BarChart className="text-blue-600" size={28} />,
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-gray-50 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold tracking-wide mb-4">Our Services</div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What we can do for you</h3>
          <p className="text-lg text-gray-600">
            A comprehensive suite of scalable solutions designed to accelerate your growth and simplify complex ongoing business challenges.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
