export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image */}
          <div className="mb-12 lg:mb-0">
            <div className="relative">
              <div className="aspect-w-4 aspect-h-5">
                <img
                  src="/anushruti-mountain.jpg"
                  alt="Anushruti Singh"
                  className="object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              A dynamic Marketing Manager with a flair for crafting compelling narratives and a keen eye for analytics. 
              Over the past five years, I've been at the forefront of developing marketing strategies that not only 
              capture attention but also deliver measurable results.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              My journey has taken me from the bustling halls of international business schools to leading campaigns 
              for top-tier firms. I'm driven by curiosity, fueled by creativity, and committed to making a meaningful 
              impact in the marketing landscape.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-8 mt-12">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-purple-600 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}