import logo from './logo.svg';
import './App.css';
import WebSocket from './components/WebSocket';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <WebSocket/>
    </div>
  );
}

export default App;
