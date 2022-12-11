import { ActionTypes } from "../constants/action-types";
let id = 0;
const initialState = {
  habits: [],
  openD: false,
  statusChange: false,
};

export const habitReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_HABIT:
      console.log("pay", payload);
      const today = new Date();
      let day = today.getDate() - today.getDay();
      const month = today.getMonth();
      const year = today.getFullYear();

      const habitObject = {
        id: payload.id,
        name: payload.habit,
        weekDays: [
          {
            id: 0,
            day: "Sunday",
            dd: day,
            mm: month,
            yyyy: year,
            isDone: "",
          },
          {
            id: 1,
            day: "Monday",
            dd: day + 1,
            mm: month,
            yyyy: year,
            isDone: "",
          },
          {
            id: 2,
            day: "Tuesday",
            dd: day + 2,
            mm: month,
            yyyy: year,
            isDone: "",
          },
          {
            id: 3,
            day: "Wednesday",
            dd: day + 3,
            mm: month,
            yyyy: year,
            isDone: "",
          },
          {
            id: 4,
            day: "Thursday",
            dd: day + 4,
            mm: month,
            yyyy: year,
            isDone: "",
          },
          {
            id: 5,
            day: "Friday",
            dd: day + 5,
            mm: month,
            yyyy: year,
            isDone: "",
          },
          {
            id: 6,
            day: "Saturday",
            dd: day + 6,
            mm: month,
            yyyy: year,
            isDone: "",
          },
        ],
      };

      return {
        ...state,
        habits: [...state.habits, habitObject],
      };

    // return {
    //   ...state,
    //   habits:[...state.habits,{
    //     id:payload.id,
    //     habit:payload.habit,
    //     done:false,
    //     undone:false,
    //     none:true,
    //   }]
    // }

    case ActionTypes.MARK_DONE:
      var tempState = state;

      for (let i = 0; i < tempState.habits.length; i++) {
        if (tempState.habits[i].id == payload.habitId) {
          console.log("ppp", tempState.habits[i]);
          tempState.habits[i].weekDays[payload.dayId].isDone = true;
        }
      }

      state = tempState;

      return {
        ...state,
        statusChange: true,
      };

    case ActionTypes.MARK_NOT_DONE:
      var tempState = state;

      for (let i = 0; i < tempState.habits.length; i++) {
        if (tempState.habits[i].id == payload.habitId) {
          tempState.habits[i].weekDays[payload.dayId].isDone = false;
        }
      }

      state = tempState;

      return {
        ...state,
      };

    case ActionTypes.MARK_NONE:
      var tempState = state;

      for (let i = 0; i < tempState.habits.length; i++) {
        if (tempState.habits[i].id == payload.habitId) {
          tempState.habits[i].weekDays[payload.dayId].isDone = "";
        }
      }

      state = tempState;

      return {
        ...state,
      };

    case ActionTypes.DELETE_HABIT:
      console.log(payload);

      var tempState = state.habits;

      tempState = tempState.filter((item) => item.id != payload);

      state.habits = tempState;

      console.log("sateAfterDelete", state);

      return {
        ...state,
      };

    case ActionTypes.OPEN_D:
      console.log("payload", payload);
      return { ...state, openD: payload };

    default:
      return state;
  }
};
