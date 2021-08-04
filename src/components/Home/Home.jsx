import React, { useState } from "react";
import useStyles from "./style";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Grow,
  Grid,
  Container,
  Paper,
  Typography,
  Button,
} from "@material-ui/core";
import HomeImage from "../HomeImage/HomeImage";
import { signin } from "../../actions/auth";
const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  if (user) {
    history.push("/dashboard");
  }
  const demoUser = {
    firstname: "",
    lastname: "",
    email: "test@test.com",
    password: "test",
    confirmPassword: "",
  };
  const demoLogin = () => {
    dispatch(signin(demoUser, history));
  };
  return (
    <Grow in>
      <Container>
        <Grid
          container
          justifycontent="space-between"
          alignItems="stretch"
          className={classes.maincontainer}
          spacing={3}
        >
          <Grid item xs={12} sm={9}>
            <HomeImage />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper}>
              <Typography variant="h6" align="center">
                Please Sign in to manage and track your expenses or you can use
                demo account.
              </Typography>
              <Button
                onClick={demoLogin}
                className={classes.demo_btn}
                variant="contained"
              >
                Demo
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
