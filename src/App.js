import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Newtodo from './components/Newtodo';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
      </header>
      <main>
        <Newtodo>
        </Newtodo>
      </main>
    </div>
  );
}

export default App;
