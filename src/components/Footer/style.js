import {
    makeStyles
} from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    footer: {
        color: "#808080",
        borderRadius: "49px",
        background: "linear-gradient(145deg, #272727, #2e2e2e)",
        boxShadow: "11px 11px 22px #1e1e1e, -11px -11px 22px #383838",
        margin: "30px 0"
    },
    dev_link: {
        textDecoration: "underline",
        color: "#808080"
    }
}));
export default useStyles;