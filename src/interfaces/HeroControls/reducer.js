import { UP, DOWN, LEFT, RIGHT, SHOOT, JUMP } from './enums';

const heroControlsReducer = (state, {action, payload}) => {
  switch (action) {
    case UP:
      return {...state, up: true};
    case DOWN:
      return {...state, down: true};
    case LEFT:
      return {...state, left: true};
    case RIGHT:
      return {...state, right: true};
    case SHOOT:
      return {...state, shoot: true};
    case JUMP:
      return {...state, jump: true};
    default:
      return state;
  }
};

export default heroControlsReducer;