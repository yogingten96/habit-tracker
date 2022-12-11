import React from "react";
import styles from "./day.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  markDone,
  markUnDone,
  markNone,
} from "../../redux/actions/habitActions";
import { useEffect, useState } from "react";

const DayView = ({ day, habitId }) => {
  const [dayState, setDayState] = useState({});
  const today = new Date();
  const todayDate = today.getDate();

  console.log("day", day);
  const dispatch = useDispatch();

  const checkDone = (selectedDate, habitId, dayId) => {
    // comparing dates to restrict user from changes comings days status
    if (selectedDate > todayDate) {
      alert("Only todays and previous days status change allowed !!");
      return;
    }

    // dispatching action to mark status ans done for the selected dates and selected habit
    dispatch(markDone(selectedDate, habitId, dayId));
  };

  const checkUndone = (selectedDate, habitId, dayId) => {
    if (selectedDate > todayDate) {
      alert("Only todays and previous days status change allowed !!");
      return;
    }
    console.log("undone", selectedDate, habitId, dayId);
    // disptach action to mark undone
    dispatch(markUnDone(selectedDate, habitId, dayId));
  };

  const checkNone = (selectedDate, habitId, dayId) => {
    if (selectedDate > todayDate) {
      alert("Only todays and previous days status change allowed !!");
      return;
    }

    // dispatch actions to mark none for habit
    dispatch(markNone(selectedDate, habitId, dayId));
  };

  return (
    <>
      {/* <div style={{ display: "flex", justifyContent: "space-between" }}> */}
      <div className={styles.weekDayBox}>
        <div>{day.day}</div>
        <div>{day.dd + "/" + day.mm + "/" + day.yyyy}</div>
        <div>
          <p>
            <span
              className={`${styles.cursorPointer}`}
              onClick={() => checkDone(day.dd, habitId, day.id)}
            >
              <i
                className={
                  day.isDone == true
                    ? `${"fa-solid fa-circle-check"} ${styles.greenCheck}`
                    : "fa-regular fa-circle-check"
                }
              ></i>{" "}
              <span
                className={day.isDone == true ? `${styles.greenCheck}` : ""}
              >
                {" "}
                Done
              </span>
            </span>
          </p>
          <p>
            <span
              className={`${styles.cursorPointer}`}
              onClick={() => checkUndone(day.dd, habitId, day.id)}
            >
              <i
                className={
                  day.isDone === false
                    ? `${"fa-solid fa-circle-xmark"} ${styles.redCheck}`
                    : "fa-solid fa-xmark"
                }
              ></i>{" "}
              <span
                className={day.isDone === false ? `${styles.redCheck}` : ""}
              >
                Not done
              </span>
            </span>
          </p>
          <p>
            <span
              className={`${styles.cursorPointer}`}
              onClick={() => checkNone(day.dd, habitId, day.id)}
            >
              <i
                className={
                  day.isDone == ""
                    ? `${"fa-solid fa-question"} ${styles.checkNone}`
                    : "fa-solid fa-question"
                }
              ></i>{" "}
              <span className={day.isDone === "" ? `${styles.checkNone}` : ""}>
                None
              </span>
            </span>
          </p>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default DayView;
