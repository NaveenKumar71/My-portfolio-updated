import { ArrowRight, Download, Github, Linkedin,Mail } from "lucide-react";


export default function HeroSection() {
  return (
    <section id="about" className="py-16 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10"></div>
        <div className="absolute top-20 left-1/4 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-56 h-56 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 justify-between">
          {/* Text Column */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-lg font-medium text-primary animate-fade-in mb-2">Hello, I'm</h2>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-slide-up">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Naveen Kumar B
              </span>
            </h1>
            <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-6 animate-slide-up animation-delay-200">
              Aspiring Software Engineer
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 animate-slide-up animation-delay-400">
              As a dedicated fresher with strong communication and analytical skills, I'm eager to leverage my programming
              expertise to solve problems and deliver innovative solutions, contributing effectively to team success. 
              My proactive attitude and adaptability help me thrive in dynamic environments.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 mb-8 animate-slide-up animation-delay-600">
              <a 
                href="https://github.com/NaveenKumar71" 
                className="p-2.5 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                aria-label="Github"
              >
                <Github className="w-5 h-5 text-gray-700 dark:text-gray-200" />
              </a>
              <a 
                href="https://www.linkedin.com/in/naveenkumarb715/" 
                className="p-2.5 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-200" />
              </a>
              <a 
                href="mailto:bknaveen712005@gmail.com" 
                className="p-2.5 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                aria-label="Mail"
              >
                <Mail className="w-5 h-5 text-gray-700 dark:text-gray-200" />
              </a>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-slide-up animation-delay-600">
              <a 
                href="#contact" 
                className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-lg shadow-lg hover:shadow-primary/50 transition-all duration-300 font-medium inline-flex items-center justify-center"
              >
                Contact Me <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a 
                href="https://drive.google.com/file/d/1Hbqp1-ga-HPcj2VLxpOXxe6LT5Vw2QDu/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-6 py-2.5 border-2 border-primary text-primary hover:bg-primary hover:text-white dark:text-white rounded-lg transition-all duration-300 font-medium inline-flex items-center justify-center"
              >
                Resume <Download className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:flex-1 flex justify-center animate-slide-up">
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img
                  src="./src/images/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
