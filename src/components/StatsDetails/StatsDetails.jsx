import React, { useEffect, useState } from "react";
import { Grow, Grid, Card, Typography } from "@material-ui/core";
import * as api from "../../api/index";
import CountUp from "react-countup";
import useStyle from "./style";
const StatsDetails = ({ userdata }) => {
  const classes = useStyle();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [total, setTotal] = useState(0);
  const [maxbal, setMaxBal] = useState(0);
  const [balanceLeft, setBalanceLeft] = useState(0);
  const [overbudget, setOverbudget] = useState(0);
  const setUserStats = async () => {
    setTotal(() => {
      return userdata.reduce(function (accumulator, item) {
        return accumulator + item.amount;
      }, 0);
    });
  };
  const getUserMaxBalance = async () => {
    try {
      const res = (await api.getmaxbalance({ email: user.email })).data;
      setMaxBal(() => {
        return res.body.max_balance;
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (userdata) {
      setUserStats();
      getUserMaxBalance();
    }
  }, [userdata]);
  useEffect(() => {
    setBalanceLeft(() => {
      return maxbal - total;
    });
  }, [total, maxbal]);

  useEffect(() => {
    if (balanceLeft < 0) {
      setOverbudget(() => {
        return Math.abs(balanceLeft);
      });
      setBalanceLeft(0);
    }
  }, [balanceLeft, maxbal]);
  useEffect(() => {
    if (maxbal > total) {
      setOverbudget(0);
    }
  }, [maxbal, total]);

  const carddata = [
    { name: "Total Expense", value: total, bgcolor: "#8080" },
    { name: "Budget Balance", value: maxbal, bgcolor: "#341677" },
    { name: "Balance Left", value: balanceLeft, bgcolor: "#8CBA51" },
    { name: "Overbudget", value: overbudget, bgcolor: "#FB3640" },
  ];

  return (
    <Grow in>
      <Grid
        container
        className={classes.grid_card}
        justifycontent="space-between"
        alignItems="stretch"
        spacing={3}
      >
        {carddata.map((data) => {
          return (
            <Grid key={data.name} item xs={12} sm={3}>
              <Card
                style={{ background: data.bgcolor }}
                className={classes.card_tiles}
              >
                <Typography
                  variant="h4"
                  align="center"
                  className={classes.tiles_header}
                >
                  ₹<CountUp start={0} end={data.value} />
                </Typography>
                <Typography
                  variant="h5"
                  align="left"
                  className={classes.tiles_footer}
                >
                  {data.name}
                </Typography>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Grow>
  );
};

export default StatsDetails;
