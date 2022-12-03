import { Button } from "@mui/material";
import React from "react";
import styles from "./habitList.module.css";
import { useNavigate } from "react-router-dom";

const HabitList = (props) => {

  let navigate = useNavigate();
  const redirectToWeek = (habit) => {
    navigate("/week-view",{state:{habit}})
  };

  const { habit } = props;
  return (
    <div>
      {habit.map((item, i) => {
        return (
          <ul>
            <li className={styles.listFlex}>
              {item.habit}
              <div>
                <Button variant="contained" onClick={()=>redirectToWeek(item.habit)}>
                  Week View
                </Button>
                <Button variant="contained">Delete</Button>
              </div>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default HabitList;
