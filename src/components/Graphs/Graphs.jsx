import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import useStyles from "./style";
import { useSelector } from "react-redux";
import CATEGORIES from "../../constants/categories";
import calculatePercentage from "../../utils/calculatePercentage";
const Graphs = ({ userinfo }) => {
  const classes = useStyles();
  const expense = useSelector((state) => state.expense);
  const total = expense.total;
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

  useEffect(() => {
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
            const total = groups[grpkey].reduce((acc, curr) => {
              return acc + curr;
            }, 0);
            graphdata[key] = total;
          }
        }
      }
    }
  }, [userinfo]);

  const data = {
    labels: CATEGORIES.map((c) => c.name),
    datasets: [
      {
        data: CATEGORIES.map((c) =>
          calculatePercentage(total, graphdata[c.name])
        ),
        backgroundColor: [
          "#ff6347",
          "#de3c3c",
          "#e649bf",
          "#af49e6",
          "#7349e6",
          "#38b8eb",
          "#49e6b7",
          "#49e666",
          "#bce649",
          "#e6e649",
          "#e69d49",
        ],
        borderColor: [
          "#ff6347",
          "#de3c3c",
          "#e649bf",
          "#af49e6",
          "#7349e6",
          "#38b8eb",
          "#49e6b7",
          "#49e666",
          "#bce649",
          "#e6e649",
          "#e69d49",
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
