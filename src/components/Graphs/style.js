import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    graph_container: {
        background: "#dddddd",
        borderRadius: "50px",
        boxShadow: "20px 20px 60px #1e1e1e,-20px -20px 60px #383838",
        padding: "10px",
        marginTop: "50px",
    },
    doughnut: {
        height: "500px",
        overflow: "auto",
    },
    cate_header: {
        fontWeight: "bolder",
        color: "#808080",
        textDecoration: "underline"
    },
    [theme.breakpoints.down("sm")]: {
        doughnut: {
            height: "300px",
        },
        cate_header: {
            fontSize: "1.8rem",
            marginTop: "20px"

        },
    },
}));
