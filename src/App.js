import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Сайт в разработке
        </p>
        <a
          className="App-link"
          href="mailto:sales@sinum.pro"
          target="_blank"
          rel="noopener noreferrer"
        >
          sales@sinum.pro
        </a>
      </header>
    </div>
  );
}

export default App;
