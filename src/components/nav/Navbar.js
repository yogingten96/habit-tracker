import { Button, Divider } from "@mui/material";
import React from "react";
import styles from "./navbar.module.css";
import AddHabitPop from "../AddHabitPop";
import { useDispatch, useSelector } from "react-redux";
import { addHabit, openDiag } from "../../redux/actions/habitActions";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const open = useSelector((state) => state);

  const [hours, setHours] = useState("");
  console.log("IND", open.allHabits);
  const today = new Date();
  let day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  const time = today.getHours();
  console.log("nav", day, month + 1, year, time);

  const dispatch = useDispatch();
  const handleOpenHabitPop = () => {
    dispatch(openDiag(true));
  };

  useEffect(() => {
    const updatingTime = new Date();
    const updatehrs = updatingTime.getHours();

    setHours(updatehrs);
  }, []);

  return (
    <>
      <div className={styles.navContainer}>
        <div style={{display:"flex" , gap:"10px"}} >
          <p className={styles.timeFontStyle} >{day+"/"+(month+1)+"/"+year}</p>
          <p className={styles.timeFontStyle}>{hours > 0 && hours < 12 && "Morning"}</p>
          <p className={styles.timeFontStyle}>{hours >= 12 && hours < 16 && "Afternoon"}</p>
          <p className={styles.timeFontStyle}>{hours >= 16 && hours < 24 && "Evening"}</p>
        </div>
        <div>
          <Button variant="contained" onClick={handleOpenHabitPop}>
            Add Habit
          </Button>
        </div>
      </div>
      <Divider />
      <AddHabitPop open={open} />
    </>
  );
};

export default Navbar;
