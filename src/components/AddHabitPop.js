import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openDiag, addHabit } from "../redux/actions/habitActions";

const AddHabitPop = (props) => {
  // const {open} = props
  // const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [addition, setAddition] = useState("");

  const open = useSelector((state) => state.allHabits.openD);
  console.log("Open in ac", open);

  const handleChange = (e) => {
    console.log("change", e.target);
    setAddition(e.target.value);
  };

  const handleAddHabit = () => {
    dispatch(addHabit(addition));
    dispatch(openDiag(false));
  };

  const handleClose = () => {
    dispatch(openDiag(false));
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Habit</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Add Habit"
            name="habit"
            fullWidth
            variant="standard"
            onChange={handleChange}
            value={addition}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddHabit}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddHabitPop;
