import { Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Let's Connect
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a
              href="https://www.linkedin.com/in/anushrutisingh18/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-4 bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <Linkedin className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-transform" />
              <div>
                <div className="font-semibold text-gray-900">LinkedIn</div>
                <div className="text-sm text-gray-600">Connect with me</div>
              </div>
            </a>

            <a
              href="mailto:anushrutisingh18@gmail.com"
              className="group flex items-center justify-center gap-4 bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <Mail className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-transform" />
              <div>
                <div className="font-semibold text-gray-900">Email</div>
                <div className="text-sm text-gray-600">Send me a message</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}