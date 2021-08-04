import {
    makeStyles
} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    grid_card: {
        marginTop: "20px",

    },
    card_tiles: {
        height: "15vh",
        borderRadius: "20px",
        boxShadow: "20px 20px 60px #181818, -20px -20px 60px #3e3e3e;",
        color: "#fff",
        paddingTop: "20px",
        padding: "10px",
    },
    tiles_header: {
        textaAlign: "center",
        padding: "20px"
    }
    ,
    tiles_footer: {
        color: "#fff",
        position: "relative",
        fontWeight: "bolder",
        bottom: 5,
    },

    [theme.breakpoints.down("sm")]: {
        card_tiles: {
            height: "12vh",
            paddingTop: "10px",
            borderRadius: "30px",
        },
        tiles_header: {
            fontSize: "1.7rem",
            padding: "10px"
        }
        ,
        tiles_footer: {
            fontSize: "1.2rem",
            bottom: 6,
        },
    },

}));