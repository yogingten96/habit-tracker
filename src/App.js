import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/nav/Navbar";
import Home from "./components/home/Home";
import WeekView from "./components/week-view/WeekView";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import WeekViewImproved from "./components/WeekViewImproved/WeekViewImproved";
function App() {
  const habits = useSelector((state) => state);
  console.log("Habits", habits.allHabits);
  return (
    <>
    {/* react router v6 used for routing */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/week-view" element={<WeekViewImproved />} />
      </Routes>
    </>
  );
}

export default App;
