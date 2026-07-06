import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './portfolio/about';
import Propos from './portfolio/propos';
import SkillsSection from './portfolio/skills';
import ProjectsSection from './portfolio/project';
import ContactSection from './portfolio/conatct';
import EducationSection from './portfolio/formation';
import Navbar from './portfolio/nav';
import Footer from './portfolio/footer';

// Page d'accueil : toutes les sections sur une seule page (portfolio classique en scroll)
function Home() {
  return (
    <>
      <About />
      <Propos />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </>
  );
}
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Propos />} />
          <Route path="/skills" element={<SkillsSection />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/formation" element={<EducationSection />} />
          <Route path="/contact" element={<ContactSection />} />
          {/* Route 404 */}
          <Route
            path="*"
            element={
              <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#070b12] text-white font-mono">
                <p className="text-cyan-400 text-xs tracking-[0.2em] mb-4">// 404</p>
                <h1 className="text-3xl font-bold mb-2">Page introuvable</h1>
                <p className="text-slate-400 text-sm">
                  La page que vous cherchez n'existe pas.
                </p>
              </div>
            }
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;