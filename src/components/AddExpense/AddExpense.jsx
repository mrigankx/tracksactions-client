import React, { useState } from "react";
import {
  Typography,
  Paper,
  Button,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
} from "@material-ui/core";
import * as api from "../../api/index";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import useStyles from "./style";
import Input from "../Login/Input";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
const AddExpense = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const history = useHistory();
  const initialState = {
    username: user.email,
    spent_category: "",
    spent_on: "",
    amount: "",
  };
  const [newExpense, setNewExpense] = useState(initialState);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.addExpense(newExpense);
      if (!res.status === 201) {
        const error = new Error(res.error);
        throw error;
      }
      toast.success("Added Successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      history.push("/dashboard");
    } catch (error) {
      console.log(error);
      toast.warn("Error while adding expense", {
        position: toast.POSITION.TOP_CENTER,
      });
      history.push("/dashboard");
    }
    setNewExpense(initialState);
  };
  const handleChange = (e) => {
    setNewExpense({ ...newExpense, [e.target.name]: e.target.value });
  };

  return (
    <Paper className={classes.new_form}>
      <Typography
        variant="h5"
        style={{
          fontWeight: "bold",
          textDecoration: "underline",
          color: "#808080",
        }}
        align="center"
      >
        Add New Expense
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <FormControl className={classes.formControl}>
          <InputLabel
            id="demo-simple-select-label"
            style={{ color: "#808080" }}
          >
            Spent Category
          </InputLabel>
          <Select
            required={true}
            labelId="demo-simple-select-label"
            name="spent_category"
            id="demo-simple-select"
            value={newExpense.spent_category}
            onChange={handleChange}
            className={classes.selected_val}
          >
            <MenuItem value="Food & Dining">Food & Dining</MenuItem>
            <MenuItem value="Entertainment">Entertainment</MenuItem>
            <MenuItem value="Education">Education</MenuItem>
            <MenuItem value="Shopping">Shopping</MenuItem>
            <MenuItem value="Health & Fitness">Health & Fitness</MenuItem>
            <MenuItem value="Gifts & Donations">Gifts & Donations</MenuItem>
            <MenuItem value="Investments">Investments</MenuItem>
            <MenuItem value="Bills & Utilities">Bills & Utilities</MenuItem>
            <MenuItem value="Auto & Transport">Auto & Transport</MenuItem>
            <MenuItem value="Drinks & Smoking">Drinks & Smoking</MenuItem>
            <MenuItem value="Others">Others</MenuItem>
          </Select>
        </FormControl>

        <Input
          value={newExpense.spent_on}
          label="Spent On"
          name="spent_on"
          handleChange={handleChange}
          type="text"
          isRequired={false}
        />
        <Input
          value={newExpense.amount}
          label="Amount"
          name="amount"
          handleChange={handleChange}
          type="number"
          isRequired={true}
        />
        <Button type="submit" variant="contained" className={classes.add_exp}>
          <AddCircleIcon />
          &nbsp; Add Expense
        </Button>
      </form>
    </Paper>
  );
};

export default AddExpense;
