import { CheckCircle } from 'lucide-react';

export default function About() {
  const features = [
    "Industry leading expertise",
    "Dedicated ongoing support",
    "Customized strategic planning",
    "Proven track record of success"
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
             <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2850&auto=format&fit=crop" alt="About us group discussion" className="rounded-2xl shadow-xl w-full h-[300px] md:h-[450px] object-cover" />
          </div>
          <div className="w-full md:w-1/2">
            <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold tracking-wide mb-4">About Us</div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Driven by a passion for excellence and innovation.</h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Founded on principles of integrity and forward-thinking logic, AcmeCorp brings together top-tier talent to solve the most pressing challenges of our clients. We believe in building lasting relationships rather than simple transactions, and prioritize long-term scalable value.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="text-blue-600 shrink-0" size={20} />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
