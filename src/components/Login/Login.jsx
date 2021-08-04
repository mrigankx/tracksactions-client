import React, { useState } from "react";
import useStyles from "./style";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Avatar,
} from "@material-ui/core";

import { GoogleLogin } from "react-google-login";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as api from "../../api/index";
import Input from "./Input";
import Icon from "./icon.js";
import { signup, signin } from "../../actions/auth";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  cpassword: "",
};
const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  if (user) {
    history.push("/dashboard");
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (isSignup) {
        await dispatch(signup(formData, history));
      } else {
        await dispatch(signin(formData, history));
      }
      console.log("formatting form data");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        cpassword: "",
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleShowPassword = () => setShowPassword((prev) => !prev);
  const switchMode = () => setIsSignup(!isSignup);
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    console.log(token);
    try {
      const res = await api.signupwithgoogle({
        name: result?.name,
        email: result?.email,
      });
      console.log("google signin");
      console.log(res);
      if (res.status !== 201) {
        const error = new Error(res.error);
        throw error;
      }
      await dispatch({
        type: "AUTH",
        data: { body: { ...result, token } },
      });
      history.push("/dashboard");
    } catch (error) {
      console.log(error);
      history.push("/login");
    }
  };
  const googleFailure = () => {
    console.log("Google login unsuccessful. Try again later");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  className={classes.input_field}
                  handleChange={handleChange}
                  value={formData.firstName}
                  autofocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  value={formData.lastName}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              value={formData.email}
              type="email"
            />

            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              value={formData.password}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="cpassword"
                label="Confirm Password"
                value={formData.cpassword}
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={isLoading ? true : false}
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <GoogleLogin
            clientId="785366194066-mvgggv3a29fohnk42jg8gob4dn30u31t.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          <Grid container justifycontent="flex-end">
            <Grid item>
              <Button style={{ color: "white" }} onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
