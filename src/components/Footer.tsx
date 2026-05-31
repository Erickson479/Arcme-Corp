export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 pb-8 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-gray-800 pb-12">
          <div className="md:col-span-1 border-gray-800">
             <div className="text-2xl font-bold text-white tracking-tight mb-4">AcmeCorp</div>
             <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Pioneering innovation and building scalable digital infrastructure for top-tier modern businesses globally.
             </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-blue-400 transition">About Us</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Careers</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Case Studies</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">API Documentation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div>
            &copy; {new Date().getFullYear()} AcmeCorp. All rights reserved.
          </div>
          <div className="flex gap-4">
            {/* Social mock icons */}
            <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition">In</a>
            <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition">Tw</a>
            <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition">Fb</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
