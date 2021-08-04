import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    doughnut: {
        // width: "100%",
        height: "500px",
        overflow: "auto"
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
