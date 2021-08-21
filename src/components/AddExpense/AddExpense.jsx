import React, { useEffect, useState } from "react";
import { Typography, Paper, Divider } from "@material-ui/core";
import * as api from "../../api/index";
import useStyles from "./style";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./Form/Form";
import formatDate from "../../utils/formatDate";
import { useSpeechContext } from "@speechly/react-client";
import InfoCard from "../InfoCard/InfoCard";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
} from "@speechly/react-ui";

toast.configure();
const AddExpense = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [isEasy, setIsEasy] = useState(false);
  const history = useHistory();
  const { segment } = useSpeechContext();

  const username = user ? user.email : "";
  const initialState = {
    username: username,
    spent_category: "",
    spent_on: "",
    amount: "",
    entrydate: formatDate(new Date()),
  };
  const [newExpense, setNewExpense] = useState(initialState);
  const handleSubmit = async () => {
    console.log("in submit");
    console.log(newExpense);
    if (Number.isNaN(Number(newExpense.amount))) return;

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
  useEffect(() => {
    if (segment) {
      if (segment.isFinal && segment.intent.intent === "create_transaction") {
        return handleSubmit();
      } else if (
        segment.isFinal &&
        segment.intent.intent === "cancel_transaction"
      ) {
        return setNewExpense(initialState);
      }

      segment.entities.forEach((s) => {
        const category = `${s.value.charAt(0)}${s.value
          .slice(1)
          .toLowerCase()}`;

        switch (s.type) {
          case "amount":
            setNewExpense({ ...newExpense, amount: s.value });
            break;
          case "category":
            setNewExpense({ ...newExpense, spent_category: category });
            break;
          case "date":
            setNewExpense({ ...newExpense, entrydate: s.value });
            break;
          default:
            break;
        }
      });

      if (
        segment.isFinal &&
        newExpense.amount &&
        newExpense.spent_category &&
        newExpense.entrydate
      ) {
        handleSubmit();
      }
    }
  }, [segment]);
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
      {isEasy && (
        <Paper className={classes.info_card}>
          <InfoCard />
          <Divider />
          <Typography align="center" variant="subtitle2" gutterBottom>
            {segment ? (
              <div className={classes.segment}>
                {segment.words.map((w) => w.value).join(" ")}
              </div>
            ) : null}
            {/* {isSpeaking ? <BigTranscript /> : 'Start adding transactions'}  */}
          </Typography>
        </Paper>
      )}
      <Form
        classes={classes}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        newExpense={newExpense}
        isEasy={isEasy}
        setIsEasy={setIsEasy}
        setNewExpense={setNewExpense}
      />
      {isEasy && (
        <PushToTalkButtonContainer>
          <PushToTalkButton />
        </PushToTalkButtonContainer>
      )}
    </Paper>
  );
};

export default AddExpense;
