import { motion } from "./micro-animations";
import { BookOpen, Calendar } from "lucide-react";

type Education = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
};

const educationData: Education[] = [
  {
    degree: "Bachelor of Technology",
    institution: "K.Ramakrishna College of Engineering",
    location: "Trichy",
    period: "2022 - present",
    description: "CGPA - 8.54",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Govt Boys Higher Secondary School",
    location: "Mannachanallur",
    period: "2021 - 2022",
    description: "86.16 %",
  }
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Education</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey has equipped me with the knowledge and skills needed to excel in the tech industry.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>
          
          {/* Education Timeline */}
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col sm:flex-row ${
                  index % 2 === 0 
                    ? 'sm:flex-row-reverse text-left sm:text-right' 
                    : 'text-left'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 -translate-y-1/3 w-6 h-6 rounded-full bg-primary border-4 border-white dark:border-gray-900 z-10"></div>
                
                {/* Content */}
                <div className={`sm:w-1/2 ${index % 2 === 0 ? 'sm:pl-12' : 'sm:pr-12'} pl-10 sm:pl-0`}>
                  <div className="glass-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.institution}</p>
                      <div className="flex items-center mt-2 text-sm text-gray-600 dark:text-gray-400">
                        <Calendar size={16} className="mr-2" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center mt-1 text-sm text-gray-600 dark:text-gray-400">
                        <BookOpen size={16} className="mr-2" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}