import React from 'react';

const Hero = () => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/photo-1451187580459-43490279c0fa.avif')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      {/* Subtle Gradient Overlay for Futuristic Feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 via-transparent to-purple/10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan/5 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple/5 rounded-full blur-xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan/3 rounded-full blur-2xl animate-float"></div>
      </div>
      
      {/* Main Content */}
      <div className="container relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12">
          <h1 className="hero-title mb-6 sm:mb-8">
            <span className="block text-white drop-shadow-lg">Stanley (Odera)</span>
            <span className="block gradient-text drop-shadow-lg">Aghara</span>
          </h1>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan to-purple mx-auto mb-8 sm:mb-12 shadow-lg shadow-cyan/20"></div>
        </div>
        
        <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
          I build secure, observable delivery pipelines that{' '}
          <span className="gradient-text">scale</span>
        </h2>
        
        <p className="text-lg sm:text-xl text-gray-200 mb-12 sm:mb-16 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          Software Engineering Graduate with 3+ years in cloud infrastructure, expanding expertise 
          in DevOps, Platform Engineering, and Site Reliability Engineering.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="btn-primary animate-glow shadow-lg hover:shadow-cyan/30 transition-all duration-300">
            View My Work
          </button>
          <button className="btn-secondary shadow-lg hover:shadow-purple/30 transition-all duration-300">
            Get In Touch
          </button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan rounded-full flex justify-center shadow-lg shadow-cyan/20 backdrop-blur-sm bg-white/5">
            <div className="w-1 h-3 bg-cyan rounded-full mt-2 animate-pulse shadow-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
