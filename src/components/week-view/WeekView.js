// import React from "react";
// import { useState , useEffect } from "react";
// import {
//   format,
//   subMonths,
//   addMonths,
//   startOfWeek,
//   addDays,
//   isSameDay,
//   lastDayOfWeek,
//   getWeek,
//   addWeeks,
//   subWeeks,
// } from "date-fns";
// import styles from "./week.module.css";
// import { Button, Checkbox, FormControlLabel } from "@mui/material";
// import { useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// // import { changeStatus } from "../../redux/actions/habitActions";
// import { useDispatch } from "react-redux";


// const WeekView = () => {
//   let dispatch = useDispatch()
//   let navigate = useNavigate();
//   let location = useLocation();
//   console.log("Location", location.state);
//   const [currentMonth, setCurrentMonth] = useState(new Date());
//   const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   const handleWeekChange = (week) => {
//     if (week === "previous") {
//       setCurrentMonth(subWeeks(currentMonth, 1));
//       setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
//     }
//     if (week == "next") {
//       setCurrentMonth(addWeeks(currentMonth, 1));
//       setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
//     }
//   };

//   const habitStatus = (status , date)=>{
//     console.log("habit done" ,date);
//     if(status === "done"){


//       // location.state.habit.none = false
//       // location.state.habit.undone = false
//       // location.state.habit.done=true
//     }

//     dispatch(changeStatus(status))

//   }

//   const handleBack = () => {
//     navigate("/");
//   };

 
  

//   const renderDays = () => {
//     const dateFormat = "EEE";
//     const days = [];
//     let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });

//     for (let i = 0; i < 7; i++) {
//       days.push(
//         <div className="" key={i}>
//           {format(addDays(startDate, i), dateFormat)}
//         </div>
//       );
//     }
//     return <div className={styles.flexDays}>{days}</div>;
//   };

//   const label = { inputProps: { "aria-label": "Checkbox demo" } };


//   const renderMonth= ()=>{
//     const dateFormat = "MMM yyyy"
//     return(
//       <div>
//          <span>{format(currentMonth, dateFormat)}</span>
//       </div>
//     )
//   }
//   let dates = [];

//   (() => {
//     const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
//     const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
//     let day = startDate;
//     let dateFormat = "d";
//     console.log("CM", startDate, endDate);
//     let formattedDate = "";
   

//     for (let i = 0; i < 7; i++) {
//       formattedDate = format(day, dateFormat);
//       console.log("days", formattedDate);
//       dates.push(
//         <div className={styles.singleDay}>
//           <div>{formattedDate}</div>

//           <div>
//             <FormControlLabel
//               control={<Checkbox defaultChecked={location.state.habit.done}  />}
//               label="Done" 
//               onClick={()=>habitStatus("done" , formattedDate)}

//             />
//             <FormControlLabel
//               control={<Checkbox defaultChecked={location.state.habit.undone} />}
//               label="Not Done"
//             />
//             <FormControlLabel
//               control={<Checkbox defaultChecked={location.state.habit.none} />}
//               label="None"
//             />
//           </div>
//         </div>
//       );
//       day = addDays(day, 1);
//     }

//     return <div className={styles.flexDays}>{dates}</div>;
//   })();

//   console.log("dates", dates);

//   const renderPrevNext = () => {
//     return (
//       <div className={`${styles.prev} ${styles.flexDays}`}>
//         <p
//           style={{ cursor: "pointer" }}
//           onClick={() => handleWeekChange("previous")}
//         >
//           Prev Week
//         </p>
//         <p
//           style={{ cursor: "pointer" }}
//           onClick={() => handleWeekChange("next")}
//         >
//           Next week
//         </p>
//       </div>
//     );
//   };

//   return (
//     <>
//       <div>
//         <div>
//           <h1>{location?.state?.habit.habit}</h1>
//         </div>
//         {renderMonth()}
//         {renderDays()}
//         {/* {renderDates()} */}
//         {dates.map((d)=>{
//           console.log("fff",d);

//         })}

//         {renderPrevNext()}
//         <div>
//           <Button variant="outlined" onClick={handleBack}>
//             Back to all Habits
//           </Button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default WeekView;
