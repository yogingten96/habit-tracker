import {
  Checkbox,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Button,
  FormControl,
} from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./weekImproved.module.css";
import { useDispatch, useSelector } from "react-redux";
import { markDone, markUnDone } from "../../redux/actions/habitActions";
import { useEffect, useState } from "react";
import DayView from "../DayView/DayView";
// import DayView from "../DayView/DayView";
const WeekViewImproved = () => {
  const dispatch = useDispatch();
  var habit = useSelector((state) => state.allHabits.habits);
  var statusChange = useSelector((state) => state.allHabits.statusChange);
  let location = useLocation();
  let navigate = useNavigate();
  console.log("stateinWeek", habit);

  const [habitState, setHabitState] = useState({
    id: "",
    name: "",
    weekDays: [],
  });

  console.log("upddddd ", habit);

  console.log("location", location.state);
  const { state } = location;
  let selectedHabitId = localStorage.getItem("selectedHabit");
  // console.log("selected", selectedHabit);

  let selectedHabit = {};

  for (let i = 0; i < habit.length; i++) {
    if (habit[i].id == selectedHabitId) {
      selectedHabit = habit[i];
    }
  }

  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  console.log("currentDay", currentDay);

  const handleBackToHabits = () => {
    navigate("/");
  };

  const checkDone = (selectedDate, habitId, dayId) => {
    if (selectedDate > currentDay) {
      alert("Cant change status of future days");
      return;
    }

    setHabitState((habitState.weekDays[dayId].isDone = true));

    dispatch(markDone(selectedDate, habitId, dayId));
    console.log("doneclicked", habitState);
  };
  console.log("aaaaaa", selectedHabit);

  const checkUndone = (selectedDate, habitId, dayId) => {
    // disptach action to mark undone
    dispatch(markUnDone(selectedDate, habitId, dayId));
  };

  useEffect(() => {
    console.log("useEffect Executed");
    setHabitState({
      ...habitState,
      id: location?.state?.habit?.id,
      name: location?.state?.habit?.name,
      weekDays: location?.state?.habit?.weekDays,
    });
  }, []);

  return (
    <>
      {/* <div>WeekViewImproved</div> */}
      <div className={`${styles.weekContainer}`}>
        <p  className={`${styles.titleBox}`}>{selectedHabit && selectedHabit.name}</p>

        <div

        className={`${styles.weekBoxFlex}`}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            border: "1px solod white",
          }}
        >
          {selectedHabit &&
            selectedHabit.weekDays.map((day) => {
              return <DayView day={day} habitId={selectedHabit.id} />;
            })}
        </div>

        {/* <DayView  /> */}

        <Button variant="contained" style={{display:"block" , margin:"20px auto"}} onClick={handleBackToHabits}>Back to all habits</Button>
      </div>
    </>
  );
};

export default WeekViewImproved;
