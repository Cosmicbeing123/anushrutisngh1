import { useState } from 'react';
import { ToggleLeft, ToggleRight } from 'lucide-react';

const marketingSkills = [
  'Strategic SEO Mastery',
  'Marketing Automation Expertise',
  'Data Analysis Proficiency',
  'Brand Planning and Development',
  'Innovative Marketing Strategy',
  'Social Media Management',
  'Lead Generation Techniques',
  'Market Research Acumen',
  'Project Management',
  'Content Strategy Planning',
  'Competitive Research',
  'A/B Testing Specialist',
  'Omnichannel Marketing',
  'Advanced SEO/SEM',
];

const technicalSkills = [
  'Google Ads & Analytics',
  'HubSpot CRM',
  'Salesforce Marketing Cloud',
  'Microsoft Power BI',
  'Tableau',
  'Figma',
  'Adobe Creative Suite',
  'Microsoft Dynamics 365',
  'Apple Search Ads',
  'Bing Ads',
  'Shopify',
  'WordPress',
];

export default function Skills() {
  const [showTechnical, setShowTechnical] = useState(false);

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Professional Skills
        </h2>

        {/* Toggle Switch */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <span className={`text-lg font-medium ${!showTechnical ? 'text-purple-600' : 'text-gray-400'}`}>
            Marketing
          </span>
          <button
            onClick={() => setShowTechnical(!showTechnical)}
            className="relative inline-flex items-center h-8 rounded-full w-14 transition-colors focus:outline-none bg-gray-200"
          >
            <span
              className={`inline-block w-6 h-6 transform transition-transform bg-white rounded-full shadow-lg ${
                showTechnical ? 'translate-x-7' : 'translate-x-1'
              }`}
            />
            {showTechnical ? (
              <ToggleRight className="absolute right-1 text-purple-600" size={20} />
            ) : (
              <ToggleLeft className="absolute left-1 text-purple-600" size={20} />
            )}
          </button>
          <span className={`text-lg font-medium ${showTechnical ? 'text-purple-600' : 'text-gray-400'}`}>
            Technical
          </span>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {(showTechnical ? technicalSkills : marketingSkills).map((skill, index) => (
            <div
              key={skill}
              className="group relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 rounded-xl transform group-hover:scale-95 transition-transform" />
              <h3 className="relative text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                {skill}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}