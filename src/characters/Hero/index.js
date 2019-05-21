import React, { useContext, useEffect } from 'react';
import HeroControls from '../../interfaces/HeroControls/context';
import './style/index.css';

const Hero = () => {
  const { controlsDispatch, controlsState } = useContext(HeroControls);

  let HERO;

  useEffect(() => {
    console.log(controlsState);
    console.log(controlsDispatch);
  }, []);
  
  return <div className="hero" id="hero"></div>
};

export default Hero;
