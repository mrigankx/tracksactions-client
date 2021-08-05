import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: "white"
  },
  demo_btn: {
    background: "linear-gradient(145deg, #2e2e2e, #272727)",
    boxShadow: "9px 9px 10px #1e1e1e,-9px -9px 10px #383838",
    color: "#fff"
  }
}));
export default useStyles;