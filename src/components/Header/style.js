import {
  makeStyles
} from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: "49px",
    background: "linear-gradient(145deg, #272727, #2e2e2e)",
    boxShadow: "11px 11px 22px #1e1e1e, -11px -11px 22px #383838",
    margin: "30px 0",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
  },
  navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    // color: "#fff"
  },
  title: {
    fontSize: "3rem"
  },
  headerContainer: {
    display: "flex",
    justifyContent: "flex-start",
  },

  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
    flexGrow: 1,
  },
  profile: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "90%",

  },
  username: {
    color: "#fff",
    marginLeft: "10px",
    marginRight: "10px",
    fontSize: "1.5rem",
    fontWeight: "bold",

  },

  [theme.breakpoints.down("md")]: {
    title: {
      fontSize: "2rem",
      marginLeft: theme.spacing(1)
    },
    profile: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      marginLeft: "-35%"
    },
    navbar: {
      flexDirection: "column",
    },
    username: {
      fontSize: "0.9rem",
    },
    logout: {
      fontSize: "0.6rem",
      borderRadius: "20px"
    },

    toolbar: {
      width: "300px",
      justifyContent: "center",
    },
    menuButton: {
      marginRight: theme.spacing(1)
    },
  },

}));
export default useStyles;