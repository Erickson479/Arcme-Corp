import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 bg-gray-50 flex items-center min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12 text-center md:text-left">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
            Innovate Your Business <span className="text-blue-600">With Us</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0">
            We deliver high-quality solutions that scale with your needs. Discover how our professional services can take your operations to the next level.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a href="#services" className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition flex items-center justify-center gap-2 w-full sm:w-auto">
              Get Started <ArrowRight size={20} />
            </a>
            <a href="#contact" className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition w-full sm:w-auto">
              Contact Sales
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2850&auto=format&fit=crop" alt="Team working" className="rounded-2xl shadow-2xl object-cover w-full h-[300px] sm:h-[400px] md:h-[500px]" />
        </div>
      </div>
    </section>
  );
}
