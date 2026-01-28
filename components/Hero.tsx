import React from 'react';

const Hero: React.FC = () => {
  const scrollToCourses = () => {
    const coursesSection = document.getElementById('courses-section');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden bg-slate-50 pt-16 pb-32">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-3xl opacity-50 mix-blend-multiply animate__animated animate__pulse animate__infinite animate__slower"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-50 mix-blend-multiply animate__animated animate__pulse animate__infinite animate__slower" style={{animationDelay: '1s'}}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left z-10 animate__animated animate__fadeInLeft">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
            Unlock Your Potential with <span className="text-indigo-600">Global Learning</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Access world-class courses and books from top instructors. Whether you want to code, design, or lead, your future starts here.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <button 
              onClick={scrollToCourses}
              className="bg-indigo-600 text-white px-8 py-3.5 rounded-full text-base font-semibold shadow-lg hover:bg-indigo-700 hover:shadow-indigo-500/30 transition-all transform hover:-translate-y-1 animate__animated animate__bounceIn"
              style={{animationDelay: '0.5s'}}
            >
              Explore Courses
            </button>
            <button className="bg-white text-indigo-600 border border-gray-200 px-8 py-3.5 rounded-full text-base font-semibold shadow-sm hover:bg-gray-50 hover:border-indigo-100 transition-all animate__animated animate__bounceIn" style={{animationDelay: '0.6s'}}>
              View Plans
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-12 md:mt-0 relative z-10 animate__animated animate__fadeInRight">
          <div className="relative rounded-2xl shadow-2xl overflow-hidden border-4 border-white transform md:rotate-2 hover:rotate-0 transition-transform duration-500 hover:scale-105 cursor-pointer">
             <img 
               src="https://picsum.photos/800/600?random=20" 
               alt="Student learning" 
               className="w-full h-auto object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
             <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold text-lg">Live Workshop</p>
                <p className="text-sm opacity-90">Join 15k+ students today</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;