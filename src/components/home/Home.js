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
   

      <div className="container" >
      <HabitList habit={habit} />

      </div>

      
    </>
  );
};

export default Home;
