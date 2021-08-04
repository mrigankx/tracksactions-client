import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    paper: {
        marginTop: "40px",
        background: "linear-gradient(145deg, #2e2e2e, #272727)",
        boxShadow: "9px 9px 10px #1e1e1e,-9px -9px 10px #383838",
        color: "#fff",
        padding: "10px",
    },
    change_bal_field: {
        marginTop: "20px",
        '& label': {
            color: '#808080',
        },
        '& .MuiInputBase-formControl': {
            color: "#fff",
            borderRadius: "36px",
            padding: 0,
            background: "#2B2B2B",
            boxShadow: "inset 25px 25px 49px #1d1d1d, inset -25px -25px 49px #393939"
        },
    },
    change_bal_btn: {
        marginTop: "10px",
        color: "#fff",
        borderRadius: "20px",
        background: "linear-gradient(145deg, #2e2e2e, #272727)",
        boxShadow: "9px 9px 10px #1e1e1e,-9px -9px 10px #383838",
    }
}));