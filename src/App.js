import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Mywork from './components/Mywork';

function App() {
  const [sections] = useState([
    {name: 'Home'},
    {name: 'My Work'},
    {name: 'Resume'},
    {name: 'Contact'}
  ])

const [currentSection, setCurrentSection] = useState(sections[1])

  return (
    <div>
      <Header
      sections={sections}
      currentSection={currentSection}
      setCurrentSection={setCurrentSection}
      ></Header>
      <main>
        {currentSection === sections[0] && <About></About>} 
        {currentSection === sections[1] && <Mywork></Mywork>}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
