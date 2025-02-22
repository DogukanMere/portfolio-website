import './App.css';
import './index.css';
import useTheme from './hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);

  return (
    <div>
      <button className='text-textLight dark:text-textDark text-xl' onClick={toggleTheme}>
        {theme}
      </button>
    </div>
  );
}

export default App;
