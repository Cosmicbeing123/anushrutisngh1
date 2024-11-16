import { Briefcase } from 'lucide-react';
import { useEffect, useRef } from 'react';

const experiences = [
  {
    company: 'CMC Canada',
    role: 'Marketing Manager',
    achievements: [
      "Spearheaded groundbreaking marketing campaign integrating TradingView with CMC's CFD trading platform",
      'Managed and optimized paid social campaigns, increasing engagement by 35%',
      'Collaborated with UX/UI teams to enhance website, resulting in 25% improvement in user experience',
      'Developed comprehensive content strategies and conducted competitive research',
    ],
  },
  {
    company: 'Marsh McLennan',
    role: 'Digital Marketing Specialist',
    achievements: [
      'Addressed 10-year decline in aviation insurance by revamping digital strategy',
      'Led cross-functional teams across web development, UX/UI, stakeholders, and creatives',
      'Reduced data submission time from 50 to 10 minutes with new dynamic website',
      'Executed A/B testing and optimized marketing spend, leading to 20% increase in conversions',
    ],
  },
  {
    company: 'Raymond James',
    role: 'Marketing Coordinator',
    achievements: [
      'Strategized email marketing campaigns for B2B insurance and wealth management',
      'Automated email campaigns and customer journeys, enhancing engagement by 30%',
      'Developed and implemented remarketing strategies increasing client retention',
    ],
  },
  {
    company: 'City of Mississauga',
    role: 'Marketing Intern',
    achievements: [
      'Launched "Digital Main Street" initiative for local business digital transformation',
      'Designed customer journeys and brand strategies for emerging businesses',
      'Created social media strategies, increasing followers by 40%',
    ],
  },
];

export default function Experience() {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            entry.target.classList.contains('slide-left') ? 'animate-slide-in-left' : 'animate-slide-in-right'
          );
        }
      });
    }, {
      threshold: 0.1,
    });

    document.querySelectorAll('.experience-item').forEach((item) => {
      observer.current?.observe(item);
    });

    return () => observer.current?.disconnect();
  }, []);

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Professional Journey
        </h2>

        <div className="relative">
          {/* Timeline line with pulsating effect */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 h-full w-0.5 bg-gradient-to-b from-purple-600 to-pink-600 animate-pulse-line" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.company} className="relative">
                <div className={`md:grid md:grid-cols-2 md:gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}>
                  {/* Timeline marker */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-4">
                    <div className="w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
                      <Briefcase className="w-4 h-4 text-purple-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <div 
                    className={`experience-item ${index % 2 === 0 ? 'slide-left' : 'slide-right'} 
                      bg-white p-6 rounded-xl shadow-lg ${
                      index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'
                    }`}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.role}</h3>
                    <div className="text-purple-600 font-semibold mb-4">{exp.company}</div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 mr-2" />
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Spacer for timeline layout */}
                  <div className={index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}