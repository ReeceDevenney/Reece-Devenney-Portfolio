import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';

function App() {
  const [sections] = useState([
    {name: 'Home'},
    {name: 'My Work'},
    {name: 'Resume'},
    {name: 'Contact'}
  ])

const [currentSection, setCurrentSection] = useState(sections[0])

  return (
    <div>
      <Header
      sections={sections}
      currentSection={currentSection}
      setCurrentSection={setCurrentSection}
      ></Header>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
