import React, { useState } from "react";
import { Button, Paper, TextField, Typography } from "@material-ui/core";
import useStyles from "./style";
import RotateRightIcon from "@material-ui/icons/RotateRight";
import * as api from "../../api/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
toast.configure();
const ChangeBalance = () => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: user.email,
    newBudgetBalance: 0,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = (await api.updateBalance(formData)).data;
      if (!res.status === 201) {
        const error = new Error(res.error);
        throw error;
      }

      toast.success("Updated Successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      history.push("/dashboard");
    } catch (error) {
      console.log(error);
      toast.warn("Error while Updating", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    setFormData({
      username: user.email,
      newBudgetBalance: 0,
    });
  };
  const handleChange = (e) => {
    setFormData(() => {
      return { ...formData, [e.target.name]: e.target.value };
    });
  };
  return (
    <Paper className={classes.paper}>
      <Typography
        variant="h5"
        style={{
          fontWeight: "bold",
          textDecoration: "underline",
          color: "#808080",
        }}
        align="center"
      >
        Change Budget Balance
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          value={formData.newBudgetBalance}
          label="New Budget Balance"
          name="newBudgetBalance"
          onChange={handleChange}
          type="number"
          fullWidth
          variant="outlined"
          className={classes.change_bal_field}
          required={true}
        />
        <Button
          type="submit"
          variant="contained"
          className={classes.change_bal_btn}
        >
          <RotateRightIcon />
          &nbsp;Change Budget Balance
        </Button>
      </form>
    </Paper>
  );
};

export default ChangeBalance;
