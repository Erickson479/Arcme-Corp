export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
          <div className="w-full lg:w-5/12 text-white p-10 md:p-12 flex flex-col justify-between" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2850&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(37, 99, 235, 0.9)' }}>
            <div>
              <h3 className="text-3xl font-bold mb-4">Let's start building</h3>
              <p className="text-blue-100 leading-relaxed mb-8">
                Fill out the form and our professional team will get back to you within 24 hours. We're excited to partner with you.
              </p>
            </div>
            <div className="text-blue-100 space-y-4">
              <div>
                <strong className="block text-white mb-1">Our Headquarters</strong>
                <p>123 Innovation Drive,<br/>Tech City, ST 90210</p>
              </div>
              <div>
                <strong className="block text-white mb-1">Contact Details</strong>
                <p>hello@acmecorp.com<br/>+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-7/12 bg-white p-10 md:p-12">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition" placeholder="Doe" />
                </div>
              </div>
              <div>
                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                 <input type="email" id="email" className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition" placeholder="john@example.com" />
              </div>
              <div>
                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                 <textarea id="message" rows={4} className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-none" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
