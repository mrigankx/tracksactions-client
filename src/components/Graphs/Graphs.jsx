import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import useStyles from "./style";
const Graphs = ({ userinfo }) => {
  const classes = useStyles();
  console.log(userinfo);
  const [graphdata, setGraphData] = useState({
    "Food & Dining": 0,
    Entertainment: 0,
    Education: 0,
    Shopping: 0,
    "Health & Fitness": 0,
    "Gifts & Donations": 0,
    Investments: 0,
    "Bills & Utilities": 0,
    "Auto & Transport": 0,
    "Drinks & Smoking": 0,
    Others: 0,
  });
  const groups = userinfo.reduce((groups, item) => {
    const group = groups[item.spent_category] || [];
    group.push(item.amount);
    groups[item.spent_category] = group;
    return groups;
  }, {});

  if (groups) {
    for (var grpkey of Object.keys(groups)) {
      for (var key of Object.keys(graphdata)) {
        if (key === grpkey) {
          console.log(key);
          graphdata[key] = groups[grpkey][0];
        }
      }
    }
  }
  console.log(graphdata);
  const data = {
    labels: [
      "Food & Dining",
      "Entertainment",
      "Education",
      "Shopping",
      "Health & Fitness",
      "Gifts & Donations",
      "Investments",
      "Bills & Utilities",
      "Auto & Transport",
      "Drinks & Smoking",
      "Others",
    ],
    datasets: [
      {
        data: [
          graphdata["Food & Dining"],
          graphdata["Entertainment"],
          graphdata["Education"],
          graphdata["Shopping"],
          graphdata["Health & Fitness"],
          graphdata["Gifts & Donations"],
          graphdata["Investments"],
          graphdata["Bills & Utilities"],
          graphdata["Auto & Transport"],
          graphdata["Drinks & Smoking"],
          graphdata["Others"],
        ],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "#19e0cc",
          "#1c6ce6",
          "#f76fee",
          "rgb(0,0,128)",
          "rgba(0,255,255, 0.7)",
          "rgb(128,0,128)",
          "rgb(255,0,0)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "#19e0cc",
          "#1c6ce6",
          "#f76fee",
          "rgb(0,0,128)",
          "rgba(0,255,255, 0.7)",
          "rgb(128,0,128)",
          "rgb(255,0,0)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Typography
        variant="h3"
        color="primary"
        align="center"
        className={classes.cate_header}
      >
        Expense by Categories
      </Typography>
      <div className={classes.doughnut}>
        <Pie
          height={375}
          width={507}
          data={data}
          options={{ maintainAspectRatio: false, responsive: true }}
        />
      </div>
    </>
  );
};

export default Graphs;
