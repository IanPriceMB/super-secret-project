import React from 'react';
import './base.css'
import LevelOne from './levels/LevelOne';
import Hero from './characters/Hero';

// Interfaces
import HeroControlsProvider from './interfaces/HeroControls';


const App = () => {
  return (
    <div className="app" id="app"> 
    <HeroControlsProvider>
      <Hero />
      <LevelOne />
    </HeroControlsProvider>
  </div>
  );
};

export default App;
