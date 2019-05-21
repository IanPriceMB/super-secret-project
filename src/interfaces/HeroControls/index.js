import React, { useReducer } from 'react';
import HeroControls from './context';
import heroControlsReducer from './reducer';

const defaultState = {
  left: false,
  right: false,
  up: false,
  down: false,
  shoot: false,
  jump: false,
};

const HeroControlsProvider = ({children}) => {
  const [controlsState, controlsDispatch] = useReducer(heroControlsReducer, defaultState); 
  return <HeroControls.Provider value={{controlsState, controlsDispatch}}>{children}</HeroControls.Provider>
}

export default HeroControlsProvider;
