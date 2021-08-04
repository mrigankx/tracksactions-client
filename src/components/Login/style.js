import {
    makeStyles
} from "@material-ui/core/styles";

export default makeStyles((theme) => ({

    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(2),
        borderRadius: "20px",
        background: "linear-gradient(145deg, #2e2e2e, #272727)",
        boxShadow: "9px 9px 10px #1e1e1e,-9px -9px 10px #383838",
        color: "#fff"
    },
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
        },
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        borderRadius: "20px",
        background: "linear-gradient(145deg, #2e2e2e, #272727)",
        boxShadow: "9px 9px 10px #1e1e1e,-9px -9px 10px #383838",
        color: "#fff"
    },
    googleButton: {
        marginBottom: theme.spacing(2),
        borderRadius: "20px",
        background: "linear-gradient(145deg, #2e2e2e, #272727)",
        boxShadow: "9px 9px 10px #1e1e1e,-9px -9px 10px #383838",
        color: "#fff"
    },
    input_field: {
        color: "#fff"
    }
}));