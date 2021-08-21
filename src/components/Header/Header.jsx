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
          <img
            className={classes.logo}
            src="data:image/png;base64,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"
            alt="money"
          />
        </div>
        <Toolbar className={classes.toolbar}>
          {user ? (
            <div className={classes.profile}>
              <Avatar>{user.name.charAt(0)}</Avatar>
              <Typography className={classes.username} variant="body1">
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
