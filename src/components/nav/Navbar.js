import { Button, Divider } from "@mui/material";
import React from "react";
import styles from "./navbar.module.css";
import AddHabitPop from "../AddHabitPop";
import { useDispatch , useSelector } from "react-redux";
import { addHabit, openDiag } from "../../redux/actions/habitActions";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const open = useSelector((state) => state);
  console.log("IND" , open.allHabits);


  const dispatch = useDispatch();
  const handleOpenHabitPop = () => {
    dispatch(openDiag(true));
  };

  return (
    <>
      <div className={styles.navContainer}>
        <div>
          <p>Date and Day and Time</p>
        </div>
        <div>
          <Button variant="contained" onClick={handleOpenHabitPop}>
            Add Habit
          </Button>
        </div>
      </div>
      <Divider />
      <AddHabitPop open={open}/>
    </>
  );
};

export default Navbar;
