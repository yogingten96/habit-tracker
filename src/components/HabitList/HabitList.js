import { Button } from "@mui/material";
import React from "react";
import styles from "./habitList.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteHabit } from "../../redux/actions/habitActions";

const HabitList = (props) => {
  let dispatch = useDispatch()
  let navigate = useNavigate();
  const redirectToWeek = (habit) => {

    localStorage.setItem('selectedHabit', habit.id);
    navigate("/week-view", { state: { habit } });
  };

  const handleDelete = (id)=>{
    dispatch(deleteHabit(id))

  }

  const { habit } = props;
  return (
    <div className={`${styles.habitMain}`} >
      {habit && habit.map((item, i) => {
        return (
          <ul className={`${styles.habitList}`} >
            <li className={styles.listFlex}>
              {item.name}
              <div className={`${styles.btnMain}`} >
                <Button
                  variant="contained"
                  onClick={() => redirectToWeek(item)}
                >
                  Week View
                </Button>
                <Button variant="contained" onClick={()=>handleDelete(item.id)} >Delete</Button>
              </div>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default HabitList;
