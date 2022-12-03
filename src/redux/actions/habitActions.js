import { ActionTypes } from "../constants/action-types";
let nextId=0;

export const addHabit = (habit) => {
  return {
    type: ActionTypes.ADD_HABIT,
    payload:{
      id:++nextId,
      habit,
    } 
  };
};

export const openDiag = (open) => {
  return {
    type: ActionTypes.OPEN_D,
    payload:open,
  };
};

export const closeDiag = (close) => {
  return {
    type: ActionTypes.CLOSE_D,
    payload: close,
  };
};
