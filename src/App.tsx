import './App.css';
import './index.css';
import Layout from './layout/Layout';
import SectionWrapper from './components/SectionWrapper';
import Intro from './pages/Intro';
import Skills from './pages/Skills';
import About from './pages/About';

function App() {
  return (
    <Layout>
      <SectionWrapper sectionId='intro' isSectionMiddle={true}>
        <Intro />
      </SectionWrapper>
      <SectionWrapper sectionId='skills' headerName='skills'>
        <Skills />
      </SectionWrapper>
      <SectionWrapper sectionId='about' headerName='about me'>
        <About />
      </SectionWrapper>
    </Layout>
  );
}

export default App;
