import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import useStyles from "./style";
import CATEGORIES from "../../constants/categories";
const Graphs = ({ userinfo }) => {
  const classes = useStyles();
  console.log(userinfo);
  const [graphdata, setGraphData] = useState({
    Food: 0,
    Entertainment: 0,
    Education: 0,
    Shopping: 0,
    Health: 0,
    Gifts: 0,
    Investments: 0,
    Bills: 0,
    Travel: 0,
    Smoking: 0,
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
    labels: CATEGORIES,
    datasets: [
      {
        data: [
          graphdata["Food"],
          graphdata["Entertainment"],
          graphdata["Education"],
          graphdata["Shopping"],
          graphdata["Health"],
          graphdata["Gifts"],
          graphdata["Investments"],
          graphdata["Bills"],
          graphdata["Travel"],
          graphdata["Smoking"],
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
    <div className={classes.graph_container}>
      <Typography
        variant="h4"
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
          options={{
            maintainAspectRatio: false,
            responsive: true,
          }}
        />
      </div>
    </div>
  );
};

export default Graphs;
