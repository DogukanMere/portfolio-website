import './App.css';
import './index.css';
import useTheme from './hooks/useTheme';
import Layout from './layout/Layout';

function App() {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);

  return (
    <Layout>
      <div id='home' className='h-screen dark:text-bgLight text-bgDark'>
        Test
      </div>
      <div id='about' className='h-screen'>
        about
      </div>
      <div id='contact' className='h-screen'>
        contact
      </div>
    </Layout>
  );
}

export default App;
