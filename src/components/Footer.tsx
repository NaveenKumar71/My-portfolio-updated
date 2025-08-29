import { Github, Linkedin, Mail } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
              Naveen Kumar B
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              A passionate Full Stack Developer creating modern and responsive web applications with cutting-edge technologies.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/NaveenKumar71" 
                className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors duration-300" 
                aria-label="Github"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/naveenkumarb715/" 
                className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors duration-300" 
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://leetcode.com/u/B_Naveenkumar/" 
                className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors duration-300" 
                aria-label="LeetCode"
              >
                <SiLeetcode className="w-5 h-5" />
              </a>
              <a 
                href="mailto:bknaveen712005@gmail.com" 
                className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors duration-300" 
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary transition-colors duration-300">About</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-primary transition-colors duration-300">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-primary transition-colors duration-300">Projects</a>
              </li>
              <li>
                <a href="#achievements" className="text-gray-400 hover:text-primary transition-colors duration-300">Achievements</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="block">Trichy</span>
                <span className="block">Tamil Nadu, INDIA</span>
              </li>
              <li>
                <a href="mailto:john.doe@example.com" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  bknaveen712005@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+11234567890" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  +91 99650 19566
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {currentYear} Naveen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}