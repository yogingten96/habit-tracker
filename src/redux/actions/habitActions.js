import { ActionTypes } from "../constants/action-types";
let nextId = 0;

export const addHabit = (habit) => {
  return {
    type: ActionTypes.ADD_HABIT,
    payload: {
      id: ++nextId,
      habit,
    },
  };
};

export const openDiag = (open) => {
  return {
    type: ActionTypes.OPEN_D,
    payload: open,
  };
};

export const closeDiag = (close) => {
  return {
    type: ActionTypes.CLOSE_D,
    payload: close,
  };
};



export const markDone = (day, habitId, dayId) => {
  return {
    type: ActionTypes.MARK_DONE,
    payload: {
      day,
      habitId,
      dayId,
    },
  };
};


export const markUnDone = (day, habitId, dayId) => {
  return {
    type: ActionTypes.MARK_NOT_DONE,
    payload: {
      day,
      habitId,
      dayId,
    },
  };
};

export const markNone =(day, habitId,dayId) =>{
  return {
    type:ActionTypes.MARK_NONE,
    payload:{
      day,
      habitId,
      dayId,
    }
  }
}


export const deleteHabit = (habitId)=>{
  return{
    type : ActionTypes.DELETE_HABIT,
    payload:habitId

    
  }
}