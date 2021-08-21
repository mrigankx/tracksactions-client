import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    data_table: {
        width: "auto",
        padding: "10px",
        borderRadius: "49px",
        background: "#2b2b2b",
        boxShadow: "11px 11px 22px #1e1e1e, -11px -11px 22px #383838",
        marginTop: "40px",
    },
    data_grid: {
        border: "none",
        minHeight: "650px",
        height: "auto",
        color: "#fff",
        "& .MuiTablePagination-toolbar": {
            color: "#fff"
        },
        "& .MuiDataGrid-sortIcon": {
            color: "#fff"
        },
    },
    table_header: {
        fontWeight: "bolder",
        color: "#808080",
        textDecoration: "underline"
    },
    del_exp: {
        color: "#FB3640",
        borderRadius: "20px",
        background: "linear-gradient(145deg, #2e2e2e, #272727)",
        boxShadow: "9px 9px 10px #1e1e1e,-9px -9px 10px #383838",
        fontWeight: "bolder",
        marginLeft: "20px"
    },
    [theme.breakpoints.down("sm")]: {
        table_header: {
            fontSize: "1.8rem",
            marginTop: "20px"
        },
        del_exp: {
            fontSize: "0.7rem",
            marginTop: "15px"
        },
        data_grid: {
            minHeight: "500px",
            fontSize: "0.8rem"
        },
    },


}));
