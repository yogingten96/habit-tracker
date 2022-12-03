import React from "react";
import { useState } from "react";
import {
  format,
  subMonths,
  addMonths,
  startOfWeek,
  addDays,
  isSameDay,
  lastDayOfWeek,
  getWeek,
  addWeeks,
  subWeeks,
} from "date-fns";
import styles from "./week.module.css";
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const WeekView = () => {
  let navigate = useNavigate();
  let location = useLocation();
  console.log("Location", location.state);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleBack = () => {
    navigate("/");
  };

  const renderDays = () => {
    const dateFormat = "EEE";
    const days = [];
    let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className={styles.flexDays}>{days}</div>;
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const renderDates = () => {
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
    let day = startDate;
    let dateFormat = "d";
    console.log("CM", startDate, endDate);
    let formattedDate = "";
    let dates = [];

    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, dateFormat);
      console.log("days", formattedDate);
      dates.push(
        <div className={styles.singleDay}>
          <div>{formattedDate}</div>

          <div>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Done"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Not Done"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="None"
            />
          </div>
        </div>
      );
      day = addDays(day, 1);
    }

    return <div className={styles.flexDays}>{dates}</div>;
  };

  const renderPrevNext = () => {
    return (
      <div className={`${styles.prev} ${styles.flexDays}`}>
        <p>Prev Week</p>
        <p>Next week</p>
      </div>
    );
  };

  return (
    <>
      <div>
        <div>
          <h1>{location.state?.habit}</h1>
        </div>
        {renderDays()}
        {renderDates()}
        {/* {renderPrevNext()} */}
        <div>
          <Button variant="outlined" onClick={handleBack}>
            Back to all Habits
          </Button>
        </div>
      </div>
    </>
  );
};

export default WeekView;
