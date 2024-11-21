import './styles/App.css';
import BentoContainer from './components/BentoContainer';

function App() {
  return (
    <div className="App">
      <div className='bento-wrapper w-screen h-screen flex justify-center items-center'>
        <BentoContainer />
      </div>
    </div>
  );
}

export default App;
