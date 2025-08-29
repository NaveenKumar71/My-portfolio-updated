import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import ProjectsSection from './components/ProjectsSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300 overflow-hidden">
        {/* 🌈 Animated Gradient Background */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 animate-gradient-x" />

        {/* 🫧 Floating Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-200" />
          <div className="absolute w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-400" />
          <div className="absolute w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-600" />
        </div>

        {/* 🧭 Main Content */}
        <Navbar />
        <main className="relative z-10">
          <HeroSection />
          <SkillsSection />
          <EducationSection />
          <ProjectsSection />
          <AchievementsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;