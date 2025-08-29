import { motion } from "./micro-animations";

type Skill = {
  name: string;
  category?: 'frontend' | 'backend' | 'tools' | 'design';
  icon: string;
};

const skills: Skill[] = [
  { name: "Java", icon: "☕" },
  { name: "React", category: "frontend", icon: "⚛️" },
  { name: "HTML5", category: "frontend", icon: "🌐" },
  { name: "CSS3", category: "frontend", icon: "🎨" },
  { name: "JavaScript", category: "frontend", icon: "𝗝𝗦" },
  { name: "Spring Boot", category: "backend", icon: "🍃" },
  { name: "Python", icon: "🐍" },
  { name: "SQL", category: "backend", icon: "📊" },
  { name: "Git", category: "tools", icon: "🔄" },
  { name: "Azure", category: "tools", icon: "☁️" },
  { name: "Android Studio", category: "tools", icon: "📱" },
];

export default function SkillsSection() {
  return (
    <section
  id="skills"
  className="py-20 min-h-[85vh] flex items-center relative overflow-hidden bg-transparent"
>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've developed expertise in various technologies and tools through years of experience and continuous learning.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center text-xl bg-primary/10 text-primary rounded-lg mb-4">
                  {skill.icon}
                </div>
                <h3 className="font-bold text-lg mb-1">{skill.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                  {skill.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
