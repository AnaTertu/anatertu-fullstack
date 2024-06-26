import logo from './logo.svg';
import './App.css';
import Footer from './Footer'; 
import Tictac  from './Tictac';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer dados={ {ano:2020, mes:12, dia:13}}/>
      <Tictac/>
    </div>
  );
}

export default App;
