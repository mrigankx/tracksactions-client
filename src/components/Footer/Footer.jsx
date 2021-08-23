import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./style";
const Footer = () => {
  const date = new Date();
  const thisYear = date.getFullYear();
  const classes = useStyles();
  return (
    <div>
      <footer className={classes.footer}>
        <Typography align="center" variant="h6">
          Copyright @ {thisYear}
        </Typography>
        <Typography align="center" variant="h6">
          Developed by{" "}
          <a
            className={classes.dev_link}
            href="https://github.com/mrigankx"
            target="_blank"
            rel="noreferrer"
          >
            Mrigankx
          </a>
        </Typography>
      </footer>
    </div>
  );
};

export default Footer;
