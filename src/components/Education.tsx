import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: "Master's in International Business Management & Marketing Management",
    school: 'Algonquin College, Ottawa',
    year: '2020',
    description: 'Specialized in digital marketing strategies and international business development.',
  },
  {
    degree: 'Bachelor of Commerce',
    school: 'HLIC Ahmedabad',
    year: '2018',
    description: 'Focus on marketing fundamentals and business administration.',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Educational Background
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 rounded-xl transform group-hover:scale-95 transition-transform" />
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-sm text-purple-600 font-semibold">{edu.year}</div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                <div className="text-purple-600 font-semibold mb-4">{edu.school}</div>
                <p className="text-gray-600">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}