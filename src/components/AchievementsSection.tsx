import { motion } from "./micro-animations";
import { Award, AlignCenterVertical as Certificate } from "lucide-react";

type Achievement = {
  type: 'award' | 'certification';
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  link?: string;
};

const achievements: Achievement[] = [
  // Awards
  {
    type: 'award',
    title: "Mr.Fashionate'25 Award",
    issuer: 'Talentia ',
    date: 'March 2025',
    description: "Secured Mr.Fashionate'25 award \n- At K.Ramakrihsnan college of Engineering",
    image: 'src/images/awards/Mr.Fashionate.jpg',
  },
  {
    type: 'award',
    title: 'Best Performer Award',
    issuer: 'KRCE',
    date: 'Febraury 2024',
    description: 'Presented a topic Neuralink\n- And Got first price in the event',
    image: 'src/images/awards/bestperformer.jpg',
  },
  {
    type: 'award',
    title: 'Best Team Award',
    issuer: 'KRCE',
    date: 'August 2024',
    description: 'Led a team for a paper presentation and secured first prize',
    image: 'src/images/awards/Teamaward.jpg',
  },
  {
    type: 'award',
    title: 'Best Presentation Award',
    issuer: 'KRCE',
    date: 'October 2024',
    description: 'Presented a paper in department of MBA and secured first prize',
    image: 'src/images/awards/paperpresentation.jpg',
  },
  
  // Certifications
  {
    type: 'certification',
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft Azure',
    date: 'March 2025',
    description: 'Certification validating foundational knowledge of Microsoft Azure cloud services and core principles.',
    image: 'src/images/certificate/microsoft.png',
    link: '#',
  },
  {
    type: 'certification',
    title: 'Cloud Computing',
    issuer: 'NPTEL',
    date: 'July 2024',
    description: 'Certification validating foundational knowledge and concepts in cloud computing.',
    image: 'src/images/certificate/nptel.png',
    link: '#',
  },
  {
    type: 'certification',
    title: 'Java Programming',
    issuer: 'Infosys',
    date: 'Aug 2024',
    description: 'Certification validating foundational knowledge and concepts in Java programming.',
    image: 'src/images/certificate/java.png',
    link: '#',
  },
];

export default function AchievementsSection() {
  const awards = achievements.filter((a) => a.type === "award");
  const certifications = achievements.filter((a) => a.type === "certification");

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Recognitions and certifications that validate my expertise and commitment to excellence.
          </p>
        </motion.div>

        {/* STACKED LAYOUT: Awards first, then Certifications */}
        <div className="space-y-14">
          {/* Awards Section */}
          <div>
            <div className="flex items-center mb-6">
              <Award className="text-yellow-500 w-7 h-7 mr-3" />
              <h1 className="text-2xl font-bold">Awards</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-80 w-full overflow-hidden">
                    <img
                      src={award.image}
                      alt={award.title}
                      className= "w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {award.title}
                    </h4>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-primary font-medium">{award.issuer}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{award.date}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{award.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <div className="flex items-center mb-6">
              <Certificate className="text-green-500 w-7 h-7 mr-3" />
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-80 w-full overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {cert.title}
                    </h4>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-primary font-medium">{cert.issuer}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{cert.date}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{cert.description}</p>
                    {/* {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors duration-300 text-sm font-medium"
                      >
                        View Certificate →
                      </a>
                    )} */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
