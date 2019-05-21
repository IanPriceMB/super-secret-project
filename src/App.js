import React from 'react';
import './base.css'
import LevelOne from './levels/LevelOne';
import Hero from './characters/Hero';

const App = () => (
  <div className="app" id="app"> 
    <Hero />
    <LevelOne />
  </div>
)
export default App;
