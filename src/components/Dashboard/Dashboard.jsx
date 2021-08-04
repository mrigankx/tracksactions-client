import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as api from "../../api/index";
import { Grow, Grid } from "@material-ui/core";
import StatsDetails from "../StatsDetails/StatsDetails";
import { FETCH_ALL } from "../../constants/index";
import { useLocation } from "react-router-dom";
import DashboardDetails from "../DashboardDetails.js/DashboardDetails";
const Dashboard = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const location = useLocation();
  const [didMount, setDidMount] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const callDashPage = async () => {
    try {
      const res = await api.dashboard(user);
      if (!res.status === 201) {
        const error = new Error(res.error);
        throw error;
      }
      const data = (await api.getExpense(user)).data;

      setUserInfo(data.body);
      dispatch({ type: FETCH_ALL, data: data.body });
    } catch (error) {
      console.log(error);
      history.push("/login");
    }
  };
  const [isShowUpdate, setIsShowUpdate] = useState(false);

  useEffect(() => {
    callDashPage();
    const today = new Date().getDate();
    if (today <= 5) {
      setIsShowUpdate(true);
    }
    setDidMount(true);
    return () => setDidMount(false);
  }, [location]);

  if (!didMount) {
    return null;
  }
  return (
    <Grow in>
      <Grid
        container
        justifycontent="space-between"
        alignItems="stretch"
        spacing={3}
      >
        <StatsDetails userdata={userInfo} />
        <DashboardDetails userinfo={userInfo} isShow={isShowUpdate} />
      </Grid>
    </Grow>
  );
};

export default Dashboard;
