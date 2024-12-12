import './styles/App.css';
import BentoContainer from './components/BentoContainer';

function App() {
  return (
    <div className="App">
      <div className='bento-wrapper max-w-screen min-h-screen flex justify-center items-center text-base p-2'>
        <BentoContainer />
      </div>
    </div>
  );
}

export default App;
