import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/nav/Navbar";
import Home from "./components/home/Home";
import WeekView from "./components/week-view/WeekView";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const habits = useSelector((state) => state);
  console.log("Habits", habits.allHabits);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/week-view" element={<WeekView />} />
      </Routes>
    </>
  );
}

export default App;
