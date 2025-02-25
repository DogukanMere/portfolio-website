import './App.css';
import './index.css';
import useTheme from './hooks/useTheme';
import Layout from './layout/Layout';

function App() {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);

  return (
    <Layout>
      <div className='h-screen'>Test</div>
      <div className='h-screen'>Test</div>
      <div className='h-screen'>Test</div>
    </Layout>
  );
}

export default App;
