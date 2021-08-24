import React, { useState, useEffect } from "react";
import decode from "jwt-decode";
import useStyles from "./style";
import { Toolbar, Typography, Button, Avatar } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../constants/index";
const Header = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();
  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  const logout = () => {
    dispatch({ type: LOGOUT });
    history.push("/");
    setUser(null);
  };
  return (
    <div className={classes.appBar}>
      <div className={classes.navbar}>
        <div className={classes.headerContainer}>
          <Typography
            component={Link}
            to="/"
            className={classes.title}
            style={{
              flexGrow: 1,
              fontWeight: "bolder",
              color: "#fff",
              textDecoration: "none",
            }}
            variant="inherit"
            align="center"
          >
            Managexpense
          </Typography>
          <Typography
            component={Link}
            to="/"
            style={{
              flexGrow: 1,
              fontWeight: "bolder",
              color: "#808080",
              textDecoration: "none",
            }}
            variant="body1"
            align="right"
          >
            Powered by Speechly
          </Typography>
        </div>
        <Toolbar className={classes.toolbar}>
          {user ? (
            <div className={classes.profile}>
              <Avatar>{user.name.charAt(0)}</Avatar>
              <Typography className={classes.username} variant="inherit">
                Hello, {user.name}
              </Typography>
              <Button
                className={classes.logout}
                variant="contained"
                color="secondary"
                onClick={logout}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button
              className={classes.menuButton}
              style={{
                color: "#fff",
                borderRadius: "20px",
                background: "linear-gradient(145deg, #2e2e2e, #272727)",
                boxShadow: "9px 9px 10px #1e1e1e,-9px -9px 10px #383838",
              }}
              variant="contained"
              component={Link}
              to="/login"
            >
              SIGN IN / UP
            </Button>
          )}
        </Toolbar>
      </div>
    </div>
  );
};

export default Header;
