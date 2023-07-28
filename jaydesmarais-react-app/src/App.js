import logo from './caution.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Site Under Construction
        </p>
        <a
          className="App-link"
          href="https://jaydesmarais.carrd.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit my temporary website
        </a>
      </header>
    </div>
  );
}

export default App;
