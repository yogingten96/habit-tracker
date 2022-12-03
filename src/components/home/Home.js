import { Button } from "@mui/material";
import React from "react";
import "./habit.css";
import { useSelector } from "react-redux";
import HabitList from "../HabitList/HabitList";

const Home = () => {
  const habit = useSelector((state) => state.allHabits.habits);
  console.log("habit in home", habit);
  return (
    <>
      <div className="habitCard">
        {/* <div>
          <p> Single Habit</p>
        </div>
        <div>
          <Button variant="contained">Week View</Button>
          <Button>Delete</Button>
        </div> */}
      </div>

      <HabitList habit={habit} />
    </>
  );
};

export default Home;
