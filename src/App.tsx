import './App.css';
import './index.css';
import useTheme from './hooks/useTheme';
import Layout from './layout/Layout';
import SectionWrapper from './components/SectionWrapper';
import Intro from './pages/Intro';

function App() {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);

  return (
    <Layout>
      <SectionWrapper sectionId='intro'>
        <Intro />
      </SectionWrapper>
      <SectionWrapper sectionId='about'>
        <Intro />
      </SectionWrapper>
      <SectionWrapper sectionId='intro'>
        <Intro />
      </SectionWrapper>
    </Layout>
  );
}

export default App;
