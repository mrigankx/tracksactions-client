import React from "react";
import {
  Button,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import MicNoneRoundedIcon from "@material-ui/icons/MicNoneRounded";
import MicOffOutlinedIcon from "@material-ui/icons/MicOffOutlined";
import CATEGORIES from "../../../constants/categories";

import Input from "../../Login/Input";
const Form = ({
  classes,
  newExpense,
  setNewExpense,
  isEasy,
  setIsEasy,
  handleChange,
  handleSubmit,
}) => {
  const changeEasy = () => {
    setIsEasy(!isEasy);
  };
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Input
        value={newExpense.entrydate}
        name="entrydate"
        handleChange={handleChange}
        type="date"
        isRequired={true}
      />
      <FormControl fullWidth>
        <InputLabel style={{ color: "#808080" }}>Spent Category</InputLabel>
        <Select
          value={newExpense.spent_category}
          onChange={handleChange}
          className={classes.selected_val}
          name="spent_category"
        >
          {CATEGORIES.map((c) => (
            <MenuItem key={c} value={c}>
              {c}
            </MenuItem>
          ))}
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
      <Button
        onClick={handleSubmit}
        variant="contained"
        className={classes.add_exp}
      >
        <AddCircleIcon />
        &nbsp; Add
      </Button>
      <Button
        variant="contained"
        className={classes.easy_add}
        onClick={changeEasy}
      >
        {isEasy ? <MicOffOutlinedIcon /> : <MicNoneRoundedIcon />} Quick Add
      </Button>
    </form>
  );
};

export default Form;
