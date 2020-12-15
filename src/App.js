import React from 'react'; // must be imported in every component file
import About from './components/About';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
