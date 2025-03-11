import './App.css';
import './index.css';
import Layout from './layout/Layout';
import SectionWrapper from './components/SectionWrapper';
import Intro from './pages/Intro';
import Skills from './pages/Skills';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
    <Layout>
      <SectionWrapper sectionId='intro' isSectionMiddle={true}>
        <Intro />
      </SectionWrapper>
      <SectionWrapper sectionId='skills' headerName='skills'>
        <Skills />
      </SectionWrapper>
      <SectionWrapper sectionId='projects' headerName='projects'>
        <Projects />
      </SectionWrapper>
      <SectionWrapper sectionId='about' headerName='about me'>
        <About />
      </SectionWrapper>
      <SectionWrapper sectionId='contact' headerName='contact'>
        <Contact />
      </SectionWrapper>
    </Layout>
  );
}

export default App;
