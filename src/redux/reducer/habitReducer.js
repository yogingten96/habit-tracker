import { ActionTypes } from "../constants/action-types";
let id = 0;
const initialState = {
  habits: [],
  openD: false,
};

export const habitReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_HABIT:
      console.log("pay", payload);
      return {
        ...state,
        habits:[...state.habits,{
          id:payload.id,
          habit:payload.habit
        }]
      }

    case ActionTypes.OPEN_D:
      console.log("payload", payload);
      return { ...state, openD: payload };

    default:
      return state;
  }
};
